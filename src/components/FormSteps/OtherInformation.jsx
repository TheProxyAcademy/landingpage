import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Text, VStack, Box, Input, HStack, Select, Textarea, Portal, createListCollection } from "@chakra-ui/react";
import { GoAlertFill } from "react-icons/go";

const classTimeOptions = createListCollection({
  items: [
    { label: "Mornings (10AM WAT)", value: "Mornings(10AM WAT)" },
    { label: "Evenings (5PM WAT)", value: "Evenings(5PM WAT)" },
    { label: "Any time", value: "Any time" },
  ],
});

const howDidYouHearOptions = createListCollection({
  items: [
    { label: "Twitter", value: "Twitter" },
    { label: "Facebook", value: "Facebook" },
    { label: "Instagram", value: "Instagram" },
    { label: "Google", value: "Google" },
    { label: "WhatsApp", value: "WhatsApp" },
    { label: "A Friend", value: "A Friend" },
    { label: "Other", value: "Other" },
  ],
});

const OtherInformation = ({ handleChange, formData, errors }) => {
  return (
    <VStack gap={6} w="full" maxH="400px" overflowY="auto">
      <Text
        as="h3"
        textTransform="uppercase"
        textAlign="center"
        color="green.600"
        fontWeight="bold"
        fontSize={{ base: "18px", lg: "20px" }}
        fontFamily="'Syne', sans-serif"
        mb={2}
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          bottom: '-8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '3px',
          background: 'linear-gradient(135deg, #059C02 0%, #0b7f03 100%)',
          borderRadius: '2px',
        }}
      >
        Additional Information
      </Text>

      <VStack gap={5} w="full">
        <Box w="full">
          <Text
            display="flex"
            alignItems="center"
            fontSize="14px"
            fontWeight="600"
            color="gray.700"
            fontFamily="'Syne', sans-serif"
            mb={2}
          >
            Location
            <FontAwesomeIcon
              icon={faAsterisk}
              style={{
                color: "#e53e3e",
                fontSize: "8px",
                marginLeft: "6px"
              }}
            />
          </Text>
          <Input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange("location")}
            placeholder="e.g. Lagos, Nigeria"
            bg="rgba(255, 255, 255, 0.8)"
            border={errors.location ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
            borderRadius="12px"
            py={6}
            px={4}
            fontSize="16px"
            _placeholder={{
              color: "gray.400",
              fontSize: "14px"
            }}
            _hover={{
              borderColor: errors.location ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
              bg: "rgba(255, 255, 255, 0.9)"
            }}
            _focus={{
              borderColor: errors.location ? "#e53e3e" : "green.500",
              boxShadow: errors.location ? "0 0 0 3px rgba(229, 62, 62, 0.1)" : "0 0 0 3px rgba(5, 156, 2, 0.1)",
              bg: "white"
            }}
            transition="all 0.3s ease"
          />
          {errors.location && (
            <Text fontSize="12px" color="red.500" mt={1}>
              {errors.location}
            </Text>
          )}
        </Box>

        <Box w="full">
          <Text
            display="flex"
            alignItems="center"
            fontSize="14px"
            fontWeight="600"
            color="gray.700"
            fontFamily="'Syne', sans-serif"
            mb={2}
          >
            What class time is most convenient for you?
            <FontAwesomeIcon
              icon={faAsterisk}
              style={{
                color: "#e53e3e",
                fontSize: "8px",
                marginLeft: "6px"
              }}
            />
          </Text>
          <Select.Root
            collection={classTimeOptions}
            value={formData.classTime ? [formData.classTime] : []}
            onValueChange={(details) => handleChange("classTime")({ target: { value: details.value[0] } })}
          >
            <Select.HiddenSelect />
            <Select.Control
              bg="rgba(255, 255, 255, 0.8)"
              border={errors.classTime ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
              borderRadius="12px"
              py={2}
              px={4}
              fontSize="16px"
              _hover={{
                borderColor: errors.classTime ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
                bg: "rgba(255, 255, 255, 0.9)"
              }}
              _focus={{
                borderColor: errors.classTime ? "#e53e3e" : "green.500",
                boxShadow: errors.classTime ? "0 0 0 3px rgba(229, 62, 62, 0.1)" : "0 0 0 3px rgba(5, 156, 2, 0.1)",
                bg: "white"
              }}
              transition="all 0.3s ease"
            >
              <Select.Trigger border="none" _focus={{ border: "none" }}>
                <Select.ValueText placeholder="Select a time" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content h="200px" overflowY="auto" px={2} border="none" boxShadow="lg">
                  {classTimeOptions.items.map((item) => (
                    <Select.Item key={item.value} item={item} p={2}>
                      {item.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
          {errors.classTime && (
            <Text fontSize="12px" color="red.500" mt={1}>
              {errors.classTime}
            </Text>
          )}
        </Box>

        {/* Payment Information Section */}
        <Box
          w="full"
          bg="rgba(5, 156, 2, 0.05)"
          border="1px solid rgba(5, 156, 2, 0.2)"
          borderRadius="16px"
          p={6}
          position="relative"
          overflow="hidden"
        >
          <VStack gap={4} align="start">
            <Text
              fontSize="16px"
              fontWeight="bold"
              color="green.600"
              fontFamily="'Syne', sans-serif"
              textTransform="uppercase"
            >
              💳 Payment Information
            </Text>
            <Text fontSize="14px" color="gray.700" lineHeight="1.6">
              Please make a payment of <Text as="span" fontWeight="bold" color="green.600">₦45,000</Text> per child for the registration fee to the account details below:
            </Text>
            
            <Box
              w="full"
              bg="rgba(255, 255, 255, 0.8)"
              border="1px solid rgba(0, 0, 0, 0.1)"
              borderRadius="12px"
              p={4}
            >
              <VStack gap={2} align="start">
                <HStack gap={2}>
                  <Text fontSize="14px" fontWeight="bold" color="gray.700">Bank Name:</Text>
                  <Text fontSize="14px" color="gray.600">Zenith Bank</Text>
                </HStack>
                <HStack gap={2}>
                  <Text fontSize="14px" fontWeight="bold" color="gray.700">Account Name:</Text>
                  <Text fontSize="14px" color="gray.600">The Proxy Academy</Text>
                </HStack>
                <HStack gap={2}>
                  <Text fontSize="14px" fontWeight="bold" color="gray.700">Account Number:</Text>
                  <Text fontSize="14px" color="gray.600" fontWeight="bold">1227467766</Text>
                </HStack>
              </VStack>
            </Box>

            <Box
              bg="rgba(59, 130, 246, 0.1)"
              border="1px solid rgba(59, 130, 246, 0.2)"
              borderRadius="8px"
              p={3}
              fontSize="12px"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <GoAlertFill color="#3b82f6" />
              <Text fontSize="12px" color="gray.700">
                Please email us with the payment receipt at <Text as="strong">support@theproxyacademy.com</Text>
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box w="full">
          <Text
            display="flex"
            alignItems="center"
            fontSize="14px"
            fontWeight="600"
            color="gray.700"
            fontFamily="'Syne', sans-serif"
            mb={4}
          >
            Have you made the payment?
            <FontAwesomeIcon
              icon={faAsterisk}
              style={{
                color: "#e53e3e",
                fontSize: "8px",
                marginLeft: "6px"
              }}
            />
          </Text>
          <HStack gap={4}>
            <Box
              bg="rgba(255, 255, 255, 0.8)"
              border={errors.paid ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
              borderRadius="12px"
              p={4}
              transition="all 0.3s ease"
              _hover={{
                bg: "rgba(255, 255, 255, 0.9)",
                borderColor: errors.paid ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
                transform: "translateY(-1px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }}
              cursor="pointer"
              onClick={() => handleChange("paid")({ target: { value: "yes" } })}
            >
              <HStack gap={3}>
                <Box
                  width="20px"
                  height="20px"
                  borderRadius="50%"
                  border="2px solid"
                  borderColor={formData.paid === "yes" ? "#059C02" : "#d1d5db"}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg={formData.paid === "yes" ? "#059C02" : "transparent"}
                  transition="all 0.3s ease"
                >
                  {formData.paid === "yes" && (
                    <Box
                      width="8px"
                      height="8px"
                      borderRadius="50%"
                      bg="white"
                    />
                  )}
                </Box>
                <Text fontSize="14px" fontWeight="500" color="gray.700">
                  Yes
                </Text>
              </HStack>
            </Box>
            <Box
              bg="rgba(255, 255, 255, 0.8)"
              border={errors.paid ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
              borderRadius="12px"
              p={4}
              transition="all 0.3s ease"
              _hover={{
                bg: "rgba(255, 255, 255, 0.9)",
                borderColor: errors.paid ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
                transform: "translateY(-1px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }}
              cursor="pointer"
              onClick={() => handleChange("paid")({ target: { value: "no" } })}
            >
              <HStack gap={3}>
                <Box
                  width="20px"
                  height="20px"
                  borderRadius="50%"
                  border="2px solid"
                  borderColor={formData.paid === "no" ? "#059C02" : "#d1d5db"}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg={formData.paid === "no" ? "#059C02" : "transparent"}
                  transition="all 0.3s ease"
                >
                  {formData.paid === "no" && (
                    <Box
                      width="8px"
                      height="8px"
                      borderRadius="50%"
                      bg="white"
                    />
                  )}
                </Box>
                <Text fontSize="14px" fontWeight="500" color="gray.700">
                  No
                </Text>
              </HStack>
            </Box>
          </HStack>
          {errors.paid && (
            <Text fontSize="12px" color="red.500" mt={1}>
              {errors.paid}
            </Text>
          )}
        </Box>

        <Box w="full">
          <Text
            display="flex"
            alignItems="center"
            fontSize="14px"
            fontWeight="600"
            color="gray.700"
            fontFamily="'Syne', sans-serif"
            mb={2}
          >
            How did you hear about us?
            <FontAwesomeIcon
              icon={faAsterisk}
              style={{
                color: "#e53e3e",
                fontSize: "8px",
                marginLeft: "6px"
              }}
            />
          </Text>
          <Select.Root
            collection={howDidYouHearOptions}
            value={formData.howDidYouHearAboutUs ? [formData.howDidYouHearAboutUs] : []}
            onValueChange={(details) => handleChange("howDidYouHearAboutUs")({ target: { value: details.value[0] } })}
          >
            <Select.HiddenSelect />
            <Select.Control
              bg="rgba(255, 255, 255, 0.8)"
              border={errors.howDidYouHearAboutUs ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
              borderRadius="12px"
              py={2}
              px={4}
              fontSize="16px"
              _hover={{
                borderColor: errors.howDidYouHearAboutUs ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
                bg: "rgba(255, 255, 255, 0.9)"
              }}
              _focus={{
                borderColor: errors.howDidYouHearAboutUs ? "#e53e3e" : "green.500",
                boxShadow: errors.howDidYouHearAboutUs ? "0 0 0 3px rgba(229, 62, 62, 0.1)" : "0 0 0 3px rgba(5, 156, 2, 0.1)",
                bg: "white"
              }}
              transition="all 0.3s ease"
            >
              <Select.Trigger border="none" _focus={{ border: "none" }}>
                <Select.ValueText placeholder="Select an option" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content spaceY={2} h="200px" overflowY="auto" px={2} border="none" boxShadow="lg">
                  {howDidYouHearOptions.items.map((item) => (
                    <Select.Item key={item.value} item={item} p={2}>
                      {item.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
          {errors.howDidYouHearAboutUs && (
            <Text fontSize="12px" color="red.500" mt={1}>
              {errors.howDidYouHearAboutUs}
            </Text>
          )}
        </Box>

        <Box w="full">
          <Text
            display="flex"
            alignItems="center"
            fontSize="14px"
            fontWeight="600"
            color="gray.700"
            fontFamily="'Syne', sans-serif"
            mb={2}
          >
            Further Comments
            <Box as="span" fontSize="12px" color="gray.500" ml={2} fontWeight="normal">
              (Optional)
            </Box>
          </Text>
          <Textarea
            name="furtherComments"
            value={formData.furtherComments}
            onChange={handleChange("furtherComments")}
            placeholder="Any additional comments or questions..."
            bg="rgba(255, 255, 255, 0.8)"
            border={errors.furtherComments ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
            borderRadius="12px"
            py={4}
            px={4}
            fontSize="16px"
            rows={4}
            resize="vertical"
            _placeholder={{
              color: "gray.400",
              fontSize: "14px"
            }}
            _hover={{
              borderColor: errors.furtherComments ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
              bg: "rgba(255, 255, 255, 0.9)"
            }}
            _focus={{
              borderColor: errors.furtherComments ? "#e53e3e" : "green.500",
              boxShadow: errors.furtherComments ? "0 0 0 3px rgba(229, 62, 62, 0.1)" : "0 0 0 3px rgba(5, 156, 2, 0.1)",
              bg: "white"
            }}
            transition="all 0.3s ease"
          />
          {errors.furtherComments && (
            <Text fontSize="12px" color="red.500" mt={1}>
              {errors.furtherComments}
            </Text>
          )}
        </Box>
      </VStack>
    </VStack>
  );
};

export default OtherInformation;
