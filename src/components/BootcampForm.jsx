import React, { Fragment, useEffect, useRef, useState } from "react";
import { 
  Box, 
  VStack, 
  Text, 
  Button, 
  Flex, 
  Spinner, 
  Center, 
  Link as ChakraLink 
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ParentInfo from "./FormSteps/ParentInfo";
import ApplicantInfo from "./FormSteps/ApplicantInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faLongArrowLeft,
  faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import OtherInformation from "./FormSteps/OtherInformation";

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

function BootcampForm({ onFormInteraction, onFormSubmission }) {
  const [currentStep, setCurrentStep] = useState("step-one");
  const [form, setForm] = useState(formData);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
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

    setIsLoading(true);
    onFormInteraction?.();
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setCurrentStep("submitted");
      onFormSubmission?.();
      
      // Reset form
      setForm(formData);
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      as="form"
      onFocus={onFormInteraction}
      ref={formRef}
      maxH="100vh"
      overflow="auto"
      onSubmit={handleSubmit}
    >
      {currentStep === "step-one" && (
        <Fragment>
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
        </Fragment>
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
          <VStack spacing={4} textAlign="center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{
                color: "#059C02",
                fontSize: "3.5rem",
                animation: "bounce 2s infinite",
              }}
            />
            <Text fontSize="4xl" fontWeight="bold" color="gray.800">
              Form Submitted Successfully!
            </Text>
            <Text color="gray.600">
              Please join our discord channel{" "}
              <ChakraLink
                as={Link}
                to="https://discord.gg/gAHAFqgXf3"
                target="_blank"
                color="primary.500"
                fontWeight="semibold"
                textDecoration="underline"
              >
                here
              </ChakraLink>{" "}
              to get further information.
            </Text>
            <Button
              bg="primary.500"
              color="white"
              px={5}
              py={2}
              borderRadius="lg"
              mt={3}
              onClick={() => {
                setCurrentStep("step-one");
                setForm(formData);
                setErrors({});
              }}
            >
              Click here to register another candidate
            </Button>
            <Text mt={3} fontWeight="semibold" fontSize="sm" color="gray.600">
              <Text as="em">
                Please note that your information is already stored, you only need
                to add the candidate's details
              </Text>
            </Text>
          </VStack>
        </Center>
      )}

      {currentStep !== "submitted" && (
        <Flex justify="space-between" align="center" mt={6}>
          {currentStep === "final-step" && (
            <Button
              type="button"
              onClick={prevStep}
              py={2}
              px={5}
              border="1px"
              borderColor="gray.300"
              borderRadius="lg"
              bg="white"
              color="gray.700"
              _hover={{
                bg: "gray.50",
              }}
            >
              <FontAwesomeIcon icon={faLongArrowLeft} />
              <Text ml={2} fontSize="sm">
                Previous
              </Text>
            </Button>
          )}

          <Box flex={1} />

          {currentStep === "step-one" && (
            <Button
              type="button"
              onClick={nextStep}
              borderRadius="md"
              bg="primary.500"
              color="white"
              px={4}
              py={2}
              _hover={{
                bg: "primary.600",
              }}
            >
              Next
              <FontAwesomeIcon icon={faLongArrowRight} style={{ marginLeft: "8px" }} />
            </Button>
          )}

          {currentStep === "final-step" && (
            <Button
              type="submit"
              borderRadius="md"
              bg="primary.500"
              color="white"
              px={4}
              py={2}
              isLoading={isLoading}
              loadingText="Submitting..."
              _hover={{
                bg: "primary.600",
              }}
            >
              {isLoading ? (
                <Spinner size="sm" mr={2} />
              ) : null}
              Submit
            </Button>
          )}
        </Flex>
      )}
    </Box>
  );
}

export default BootcampForm;
