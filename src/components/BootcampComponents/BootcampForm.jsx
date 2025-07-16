import React, { useRef, useState } from "react";
import { 
  Box, 
  VStack, 
  Text, 
  Button, 
  Flex, 
  Spinner, 
  Center, 
  Progress,
  HStack,
  Badge,
  Link,
  Stack
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { keyframes } from "@emotion/react";
import ParentInfo from "../FormSteps/ParentInfo";
import ApplicantInfo from "../FormSteps/ApplicantInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faLongArrowLeft,
  faLongArrowRight,
  faUser,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import OtherInformation from "../FormSteps/OtherInformation";
import toast from 'react-hot-toast';

// Keyframes for animations
const slideInUp = keyframes`
  0% { transform: translateY(40px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const slideInLeft = keyframes`
  0% { transform: translateX(-40px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const slideInRight = keyframes`
  0% { transform: translateX(40px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const formData = {
  parentFullname: "",
  parentEmail: "",
  parentPhoneNumber: "",
  location: "",
  classTime: "",
  paid: "",
  howDidYouHearAboutUs: "",
  furtherComments: "",
  applicantFullname: "",
  applicantAge: "",
  applicantEmail: "",
  applicantCourse: "",
  applicantPhoneNumber: "",
};

const BootcampForm = ({ onFormInteraction, onFormSubmission }) => {
  const [currentStep, setCurrentStep] = useState("step-one");
  const [form, setForm] = useState(formData);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (fieldName) => (e) => {
    const name = fieldName;
    const value = e.target.value;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateStep = () => {
    const stepErrors = {};
    
    if (currentStep === "step-one") {
      // Validate parent info
      if (!form.parentFullname.trim()) {
        stepErrors.parentFullname = "Parent's full name is required";
      }
      if (!form.parentEmail.trim()) {
        stepErrors.parentEmail = "Parent's email is required";
      } else if (!/\S+@\S+\.\S+/.test(form.parentEmail)) {
        stepErrors.parentEmail = "Please enter a valid email address";
      }
      if (!form.parentPhoneNumber.trim()) {
        stepErrors.parentPhoneNumber = "Parent's phone number is required";
      }
      
      // Validate applicant info
      if (!form.applicantFullname.trim()) {
        stepErrors.applicantFullname = "Applicant's full name is required";
      }
      if (!form.applicantAge.trim()) {
        stepErrors.applicantAge = "Applicant's age is required";
      }
      if (!form.applicantCourse.trim()) {
        stepErrors.applicantCourse = "Please select a course";
      }
    }
    
    if (currentStep === "final-step") {
      if (!form.location.trim()) {
        stepErrors.location = "Location is required";
      }
      if (!form.classTime.trim()) {
        stepErrors.classTime = "Class time is required";
      }
      if (!form.paid.trim()) {
        stepErrors.paid = "Payment information is required";
      }
      if (!form.howDidYouHearAboutUs.trim()) {
        stepErrors.howDidYouHearAboutUs = "Please tell us how you heard about us";
      }
    }
    
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep("final-step");
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep("step-one");
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep()) {
      return;
    }

    console.log("form", form);

    setIsLoading(true);
    onFormInteraction?.();
    
    try {
      // Make API call to backend
      const response = await fetch('https://bootcamp-be.onrender.com/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Registration successful:', result);
      toast.success('Registration successful!');
      setCurrentStep("submitted");
      onFormSubmission?.();
      
      // Reset form
      setForm(formData);
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      // You might want to show an error message to the user
      // For now, we'll just log the error
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getStepProgress = () => {
    switch (currentStep) {
      case "step-one":
        return 33;
      case "final-step":
        return 66;
      case "submitted":
        return 100;
      default:
        return 0;
    }
  };

  const getStepInfo = () => {
    switch (currentStep) {
      case "step-one":
        return {
          title: "Personal Information",
          description: "Tell us about yourself and your child",
          icon: faUser,
          step: "Step 1 of 3"
        };
      case "final-step":
        return {
          title: "Additional Details",
          description: "Complete your registration",
          icon: faInfoCircle,
          step: "Step 2 of 3"
        };
      case "submitted":
        return {
          title: "Registration Complete",
          description: "Welcome to our bootcamp!",
          icon: faCheckCircle,
          step: "Complete"
        };
      default:
        return {};
    }
  };

  const stepInfo = getStepInfo();

  return (
    <Box
      as="form"
      onFocus={onFormInteraction}
      ref={formRef}
      w="full"
      onSubmit={handleSubmit}
    >

      {/* Step Header */}
      {currentStep !== "submitted" && (
        <VStack
          gap={4}
          mb={8}
          css={{ animation: `${slideInUp} 0.8s ease-out` }}
        >
          <Box
            p={3}
            borderRadius="full"
            bg="rgba(5, 156, 2, 0.1)"
            border="1px solid rgba(5, 156, 2, 0.2)"
          >
            <FontAwesomeIcon
              icon={stepInfo.icon}
              size="lg"
              color="#059C02"
            />
          </Box>
          <VStack gap={2}>
            <Text
              fontSize="20px"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              color="gray.800"
              textAlign="center"
            >
              {stepInfo.title}
            </Text>
            <Text
              fontSize="14px"
              color="gray.600"
              textAlign="center"
              lineHeight="1.5"
            >
              {stepInfo.description}
            </Text>
          </VStack>
        </VStack>
      )}

      {/* Form Content */}
      <Box
        bg="rgba(255, 255, 255, 0.6)"
        borderRadius="16px"
        p={6}
        border="1px solid rgba(255, 255, 255, 0.3)"
        backdropFilter="blur(5px)"
        mb={6}
        css={{ animation: `${slideInUp} 0.8s ease-out 0.3s both` }}
      >
        {currentStep === "step-one" && (
          <VStack gap={8} maxH="400px" overflowY="auto">
            <ParentInfo
              formData={form}
              setFormData={setForm}
              handleChange={handleChange}
              errors={errors}
            />
            <ApplicantInfo
              formData={form}
              setFormData={setForm}
              handleChange={handleChange}
              errors={errors}
            />
          </VStack>
        )}

        {currentStep === "final-step" && (
          <OtherInformation
            formData={form}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        {currentStep === "submitted" && (
          <Center>
            <VStack gap={6} textAlign="center" py={8}>
              <Box
                css={{ animation: `${bounce} 1s ease-out` }}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{
                    color: "#059C02",
                    fontSize: "4rem",
                  }}
                />
              </Box>
              <VStack gap={4}>
                <Text
                  fontSize="32px"
                  fontFamily="'Syne', sans-serif"
                  fontWeight="bold"
                  color="green.600"
                  textTransform="uppercase"
                >
                  Registration Successful!
                </Text>
                <Text
                  fontSize="16px"
                  color="gray.700"
                  lineHeight="1.6"
                  maxW="400px"
                >
                  Thank you for registering! Please join our WhatsApp community to get updates and connect with other participants.
                </Text>
              </VStack>
              
              <Box
                p={4}
                bg="rgba(5, 156, 2, 0.05)"
                borderRadius="12px"
                border="1px solid rgba(5, 156, 2, 0.2)"
                w="full"
                maxW="400px"
              >
                <Text fontSize="14px" color="gray.600" mb={3}>
                  Join our WhatsApp community:
                </Text>
                <Link
                  href="https://chat.whatsapp.com/HnE85RIWrGGH0itPpVgUcW"
                  target="_blank"
                  display="inline-block"
                  bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
                  color="white"
                  px={6}
                  py={3}
                  borderRadius="full"
                  fontFamily="'Syne', sans-serif"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  fontSize="14px"
                  textDecoration="none"
                  position="relative"
                  overflow="hidden"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(5, 156, 2, 0.4)',
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  <Box
                    position="absolute"
                    top="0"
                    left="-100%"
                    width="100%"
                    height="100%"
                    background="linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)"
                    animation={`${shimmer} 2s ease-in-out infinite`}
                  />
                  <Text position="relative" zIndex={1}>
                    Join WhatsApp
                  </Text>
                </Link>
              </Box>

              <Button
                bg="rgba(5, 156, 2, 0.1)"
                color="green.600"
                border="1px solid rgba(5, 156, 2, 0.3)"
                px={8}
                py={6}
                borderRadius="full"
                fontFamily="'Syne', sans-serif"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wide"
                _hover={{
                  bg: "rgba(5, 156, 2, 0.2)",
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(5, 156, 2, 0.2)',
                  transition: 'all 0.3s ease-in-out'
                }}
                onClick={() => {
                  setCurrentStep("step-one");
                  setForm(formData);
                  setErrors({});
                }}
              >
                Register Another Child
              </Button>
              
              {/* <Text fontSize="12px" color="gray.500" fontStyle="italic" maxW="300px">
                Your information has been saved. You only need to add the new candidate's details.
              </Text> */}
            </VStack>
          </Center>
        )}
      </Box>

      {/* Navigation Buttons */}
      {currentStep !== "submitted" && (
        <Flex justify="space-between" align="center" mt={8}>
          {currentStep === "final-step" ? (
            <Button
              type="button"
              onClick={prevStep}
              py={6}
              px={8}
              bg="rgba(255, 255, 255, 0.8)"
              border="1px solid rgba(0, 0, 0, 0.1)"
              borderRadius="full"
              color="gray.700"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
              animation={`${slideInLeft} 0.8s ease-out`}
              _hover={{
                bg: "rgba(255, 255, 255, 0.9)",
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <FontAwesomeIcon icon={faLongArrowLeft} />
              <Text ml={2} fontSize="14px">
                Previous
              </Text>
            </Button>
          ) : (
            <Box />
          )}

          {currentStep === "step-one" && (
            <Button
              type="button"
              onClick={nextStep}
              py={6}
              px={8}
              bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
              color="white"
              borderRadius="full"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
              animation={`${slideInRight} 0.8s ease-out`}
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(5, 156, 2, 0.4)',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <Box
                position="absolute"
                top="0"
                left="-100%"
                width="100%"
                height="100%"
                background="linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)"
                animation={`${shimmer} 2s ease-in-out infinite`}
              />
              <Text position="relative" zIndex={1} fontSize="14px">
                Next
              </Text>
              <FontAwesomeIcon icon={faLongArrowRight} style={{ marginLeft: "8px" }} />
            </Button>
          )}

          {currentStep === "final-step" && (
            <Button
              type="submit"
              py={6}
              px={8}
              bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
              color="white"
              borderRadius="full"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
              isLoading={isLoading}
              loadingText="Submitting..."
              animation={`${slideInRight} 0.8s ease-out`}
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(5, 156, 2, 0.4)',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              {isLoading ? (
                <Spinner size="sm" mr={2} />
              ) : (
                <Box
                  position="absolute"
                  top="0"
                  left="-100%"
                  width="100%"
                  height="100%"
                  background="linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)"
                  animation={`${shimmer} 2s ease-in-out infinite`}
                />
              )}
              <Text position="relative" zIndex={1} fontSize="14px">
                Submit Registration
              </Text>
            </Button>
          )}
        </Flex>
      )}
    </Box>
  );
};

export default BootcampForm;
