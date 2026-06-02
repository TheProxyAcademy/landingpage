import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  HStack,
  Input,
  NativeSelect,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import toast from "react-hot-toast";
import { COHORT, PRICING, WHATSAPP_NUMBER } from "./constants";
import {
  clearPendingRegistration,
  loadPendingRegistration,
  useFlutterwaveCheckout,
} from "./useFlutterwaveCheckout";

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

function sanitizePhone(phone) {
  return (phone || "").replace(/[^\d+]/g, "").trim();
}

function parseNairaAmount(nairaString) {
  const num = Number(String(nairaString).replace(/[^\d.]/g, ""));
  if (!Number.isFinite(num) || num <= 0) return null;
  return num;
}

async function verifyAndStore({
  chargeId,
  reference,
  expectedAmount,
  registration,
}) {
  const res = await fetch("/api/flutterwave/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chargeId,
      reference,
      expectedAmount,
      expectedCurrency: "NGN",
      registration,
    }),
  });
  const json = await res.json().catch(() => null);
  if (!res.ok || !json?.ok || !json?.verified) {
    const message =
      json?.error ||
      (json?.verified === false ? "Payment could not be verified." : "Verification failed.");
    const err = new Error(message);
    err.details = json;
    throw err;
  }
  return json;
}

export default function FocusflowCohortRegisterForm() {
  const { ready, startCheckout } = useFlutterwaveCheckout();
  const [searchParams, setSearchParams] = useSearchParams();
  const returnHandled = useRef(false);
  const cohortPrice = useMemo(() => PRICING.fullPrice, []);
  const amount = useMemo(() => parseNairaAmount(cohortPrice), [cohortPrice]);

  const [form, setForm] = useState({
    parentFullname: "",
    parentEmail: "",
    parentPhone: "",
    childFullname: "",
    childAge: "",
    schedulePreference: "",
    paymentPlan: "full",
    studentPhone: "",
  });

  const [isPaying, setIsPaying] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const canPay =
    ready &&
    !!amount &&
    form.parentFullname.trim() &&
    form.parentEmail.trim() &&
    /\S+@\S+\.\S+/.test(form.parentEmail) &&
    form.parentPhone.trim() &&
    form.childFullname.trim() &&
    form.childAge.trim();

  const buildRegistration = () => ({
    parentFullname: form.parentFullname.trim(),
    parentEmail: form.parentEmail.trim(),
    parentPhone: sanitizePhone(form.parentPhone),
    childFullname: form.childFullname.trim(),
    childAge: form.childAge.trim(),
    studentPhone: sanitizePhone(form.studentPhone),
    schedulePreference: form.schedulePreference || "unspecified",
    paymentPlan: form.paymentPlan,
  });

  useEffect(() => {
    if (searchParams.get("payment") !== "return") return;
    if (returnHandled.current) return;

    const reference =
      searchParams.get("reference") ||
      searchParams.get("tx_ref") ||
      searchParams.get("trx_ref");
    const chargeId =
      searchParams.get("charge_id") ||
      searchParams.get("chargeId") ||
      searchParams.get("transaction_id");
    const returnStatus = (searchParams.get("status") || "").toLowerCase();

    if (!reference && !chargeId) return;

    returnHandled.current = true;
    setSearchParams({}, { replace: true });

    const registration =
      (reference && loadPendingRegistration(reference)) || null;

    if (returnStatus && returnStatus !== "succeeded" && returnStatus !== "successful") {
      toast.error("Payment was not completed. Please try again.");
      if (reference) clearPendingRegistration(reference);
      return;
    }

    const toastId = reference || chargeId || "verify";
    toast.loading("Verifying payment...", { id: toastId });

    verifyAndStore({
      chargeId: chargeId || undefined,
      reference: reference || undefined,
      expectedAmount: amount,
      registration,
    })
      .then((verified) => {
        toast.success(
          verified?.stored
            ? "Payment verified! Registration saved."
            : "Payment verified! (Registration not stored yet.)",
          { id: toastId }
        );
        if (reference) clearPendingRegistration(reference);
        setReceipt({
          tx_ref: reference || verified?.flutterwave?.reference,
          transactionId: verified?.flutterwave?.id,
          status: "verified",
          paidAt: new Date().toISOString(),
          amount,
          currency: "NGN",
          customerEmail: registration?.parentEmail || form.parentEmail.trim(),
        });
      })
      .catch(() => {
        toast.error(
          "Payment may have succeeded, but we could not verify it yet. Message us on WhatsApp with your payment reference.",
          { id: toastId }
        );
      });
  }, [amount, form.parentEmail, searchParams, setSearchParams]);

  const handleChange = (key) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const startPayment = async () => {
    if (!canPay) {
      toast.error("Please complete the form first.");
      return;
    }

    setIsPaying(true);

    try {
      await startCheckout({
        amount,
        currency: "NGN",
        registration: buildRegistration(),
      });
    } catch (err) {
      setIsPaying(false);
      toast.error(err?.message || "Payment failed to start. Please try again.");
    }
  };

  if (receipt) {
    const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hi The Proxy Academy! I just paid for the FocusFlow cohort. Tx Ref: ${receipt.tx_ref}${receipt.transactionId ? `, Transaction ID: ${receipt.transactionId}` : ""}. Parent email: ${receipt.customerEmail}.`
    )}`;

    return (
      <Box
        bg="white"
        borderRadius="24px"
        border="1px solid rgba(5, 156, 2, 0.18)"
        shadow="0 20px 40px rgba(0,0,0,0.08)"
        overflow="hidden"
      >
        <Box p={8} bg="linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)">
          <Badge
            bg="rgba(5, 156, 2, 0.12)"
            color="green.700"
            px={4}
            py={2}
            borderRadius="full"
            fontFamily="'Syne', sans-serif"
            fontWeight="bold"
            fontSize="11px"
            textTransform="uppercase"
            letterSpacing="wide"
            border="1px solid rgba(5, 156, 2, 0.25)"
          >
            Payment confirmed
          </Badge>
          <Text
            mt={4}
            fontFamily="'Syne', sans-serif"
            fontWeight="bold"
            fontSize={{ base: "22px", md: "28px" }}
            color="gray.800"
            textTransform="uppercase"
          >
            You&apos;re in.
          </Text>
          <Text mt={2} color="gray.600" lineHeight="1.7">
            We&apos;ve received your payment for the {COHORT.product} cohort. Keep this
            reference handy.
          </Text>
        </Box>
        <Box p={8}>
          <VStack align="stretch" spacing={4}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              <Box p={4} bg="gray.50" borderRadius="14px" border="1px solid" borderColor="gray.200">
                <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="wider">
                  Tx Ref
                </Text>
                <Text mt={1} fontFamily="'Syne', sans-serif" fontWeight="bold" color="gray.800">
                  {receipt.tx_ref}
                </Text>
              </Box>
              <Box p={4} bg="gray.50" borderRadius="14px" border="1px solid" borderColor="gray.200">
                <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="wider">
                  Status
                </Text>
                <Text mt={1} fontFamily="'Syne', sans-serif" fontWeight="bold" color="green.700">
                  {receipt.status}
                </Text>
              </Box>
            </SimpleGrid>

            <Box borderTop="1px solid" borderColor="gray.200" />

            <Button
              as="a"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              borderRadius="full"
              bg="linear-gradient(135deg, #25D366, #128C7E)"
              color="white"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Send confirmation on WhatsApp
            </Button>

            <Button
              variant="outline"
              borderRadius="full"
              borderColor="green.600"
              color="green.700"
              onClick={() => setReceipt(null)}
            >
              Register another child
            </Button>
          </VStack>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      bg="white"
      borderRadius="24px"
      border="1px solid rgba(255, 255, 255, 0.35)"
      boxShadow="0 20px 40px rgba(0, 0, 0, 0.10)"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left="-100%"
        width="100%"
        height="100%"
        background="linear-gradient(90deg, transparent, rgba(5, 156, 2, 0.08), transparent)"
        animation={`${shimmer} 3.5s ease-in-out infinite`}
        pointerEvents="none"
      />

      <Box p={{ base: 6, md: 8 }} position="relative">
        <HStack justify="space-between" flexWrap="wrap" gap={3}>
          <Box>
            <Text fontFamily="'Syne', sans-serif" fontWeight="bold" textTransform="uppercase" fontSize="lg" color="gray.800">
              Registration details
            </Text>
            <Text color="gray.600" fontSize="sm">
              Pay securely with Flutterwave (NGN).
            </Text>
          </Box>
          <Badge bg="green.50" color="green.700" border="1px solid" borderColor="green.200" px={3} py={1.5} borderRadius="full">
            {PRICING.fullPrice}
          </Badge>
        </HStack>

        <Box borderTop="1px solid" borderColor="gray.200" my={6} />

        <VStack align="stretch" spacing={6}>
          <Box>
            <Text fontFamily="'Syne', sans-serif" fontWeight="bold" color="green.700" textTransform="uppercase" fontSize="sm" mb={3}>
              Parent / Guardian
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              <Box>
                <Text fontSize="14px" fontWeight="600" color="gray.700" fontFamily="'Syne', sans-serif" mb={2}>
                  Full name <Text as="span" color="red.500">*</Text>
                </Text>
                <Input value={form.parentFullname} onChange={handleChange("parentFullname")} placeholder="e.g. John Hassan" bg="white" borderRadius="12px" py={6} px={2} />
              </Box>
              <Box>
                <Text fontSize="14px" fontWeight="600" color="gray.700" fontFamily="'Syne', sans-serif" mb={2}>
                  Email <Text as="span" color="red.500">*</Text>
                </Text>
                <Input value={form.parentEmail} onChange={handleChange("parentEmail")} type="email" placeholder="e.g. john@email.com" bg="white" borderRadius="12px" py={6} />
              </Box>
              <Box>
                <Text fontSize="14px" fontWeight="600" color="gray.700" fontFamily="'Syne', sans-serif" mb={2}>
                  Phone number (WhatsApp) <Text as="span" color="red.500">*</Text>
                </Text>
                <Input value={form.parentPhone} onChange={handleChange("parentPhone")} placeholder="e.g. 080..." bg="white" borderRadius="12px" py={6} px={2} />
              </Box>
             
            </SimpleGrid>
          </Box>

          <Box>
            <Text fontFamily="'Syne', sans-serif" fontWeight="bold" color="green.700" textTransform="uppercase" fontSize="sm" mb={3}>
              Student
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              <Box>
                <Text fontSize="14px" fontWeight="600" color="gray.700" fontFamily="'Syne', sans-serif" mb={2}>
                  Child&apos;s full name <Text as="span" color="red.500">*</Text>
                </Text>
                <Input value={form.childFullname} onChange={handleChange("childFullname")} placeholder="e.g. Daniella Hassan" bg="white" borderRadius="12px" py={6} px={2} />
              </Box>
              <Box>
                <Text fontSize="14px" fontWeight="600" color="gray.700" fontFamily="'Syne', sans-serif" mb={2}>
                  Age <Text as="span" color="red.500">*</Text>
                </Text>
                <Input value={form.childAge} onChange={handleChange("childAge")} placeholder={`e.g. 12 (Ages ${COHORT.ages})`} bg="white" borderRadius="12px" py={6} px={2} />
              </Box>
              <Box>
                <Text fontSize="14px" fontWeight="600" color="gray.700" fontFamily="'Syne', sans-serif" mb={2}>
                  Phone number (WhatsApp)
                </Text>
                <Input value={form.studentPhone || ""} onChange={handleChange("studentPhone")} placeholder="e.g. 080..." bg="white" borderRadius="12px" py={6} px={2} />
              </Box>
            </SimpleGrid>
          </Box>

          <Box>
            <Text fontFamily="'Syne', sans-serif" fontWeight="bold" color="green.700" textTransform="uppercase" fontSize="sm" mb={3}>
              Payment plan
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              <Box>
                <Text fontSize="14px" fontWeight="600" color="gray.700" fontFamily="'Syne', sans-serif" mb={2}>
                  Plan
                </Text>
                <NativeSelect.Root>
                  <NativeSelect.Field
                    value={form.paymentPlan}
                    onChange={handleChange("paymentPlan")}
                    bg="white"
                    borderRadius="12px"
                    h="52px"
                  >
                    <option value="full">Full payment</option>
                    <option value="installment">Installment (chat to finalize)</option>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Box>
              <Box
                p={4}
                borderRadius="16px"
                bg="rgba(5, 156, 2, 0.06)"
                border="1px solid rgba(5, 156, 2, 0.18)"
              >
                <Text fontSize="sm" color="gray.700" fontWeight="semibold">
                  Installments
                </Text>
                <Text fontSize="xs" color="gray.600" mt={1} lineHeight="1.6">
                  If you choose installment, complete payment now as full payment OR message us to arrange installments before paying.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box borderTop="1px solid" borderColor="gray.200" />

          <VStack align="stretch" spacing={3}>
            <Button
              onClick={startPayment}
              disabled={!canPay || isPaying}
              size="lg"
              borderRadius="full"
              bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
              color="white"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
              _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
              transition="all 0.3s ease"
            >
              {isPaying ? "Opening payment..." : "Pay with Flutterwave"}
            </Button>

            <Text fontSize="xs" color="gray.500" textAlign="center" lineHeight="1.6">
              By paying, you confirm the details above are correct. If you want an installment plan, message us on WhatsApp before completing payment.
            </Text>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

