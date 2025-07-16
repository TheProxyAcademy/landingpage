import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Text, VStack, Box, Input, HStack, SimpleGrid } from "@chakra-ui/react";

const ApplicantInfo = ({ formData, handleChange, errors }) => {
  const courses = [
    "Introduction to Coding with Scratch",
    "Web Development",
    "Graphics Design",
    "Data Analysis",
    "Cyber Security",
    "Animation",
    "Illustration Design"
  ];

  return (
    <VStack gap={6} w="full">
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
        Applicant Information
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
            Full Name
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
            name="applicantFullname"
            value={formData.applicantFullname}
            onChange={handleChange("applicantFullname")}
            placeholder="Enter applicant's full name"
            bg="rgba(255, 255, 255, 0.8)"
            border={errors.applicantFullname ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
            borderRadius="12px"
            py={6}
            px={4}
            fontSize="16px"
            _placeholder={{
              color: "gray.400",
              fontSize: "14px"
            }}
            _hover={{
              borderColor: errors.applicantFullname ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
              bg: "rgba(255, 255, 255, 0.9)"
            }}
            _focus={{
              borderColor: errors.applicantFullname ? "#e53e3e" : "green.500",
              boxShadow: errors.applicantFullname ? "0 0 0 3px rgba(229, 62, 62, 0.1)" : "0 0 0 3px rgba(5, 156, 2, 0.1)",
              bg: "white"
            }}
            transition="all 0.3s ease"
          />
          {errors.applicantFullname && (
            <Text fontSize="12px" color="red.500" mt={1}>
              {errors.applicantFullname}
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
            Age
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
            name="applicantAge"
            value={formData.applicantAge}
            onChange={handleChange("applicantAge")}
            placeholder="Enter age"
            bg="rgba(255, 255, 255, 0.8)"
            border={errors.applicantAge ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
            borderRadius="12px"
            py={6}
            px={4}
            fontSize="16px"
            _placeholder={{
              color: "gray.400",
              fontSize: "14px"
            }}
            _hover={{
              borderColor: errors.applicantAge ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
              bg: "rgba(255, 255, 255, 0.9)"
            }}
            _focus={{
              borderColor: errors.applicantAge ? "#e53e3e" : "green.500",
              boxShadow: errors.applicantAge ? "0 0 0 3px rgba(229, 62, 62, 0.1)" : "0 0 0 3px rgba(5, 156, 2, 0.1)",
              bg: "white"
            }}
            transition="all 0.3s ease"
          />
          {errors.applicantAge && (
            <Text fontSize="12px" color="red.500" mt={1}>
              {errors.applicantAge}
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
            Applicant's Email
            <Box as="span" fontSize="12px" color="gray.500" ml={2} fontWeight="normal">
              (Optional)
            </Box>
          </Text>
          <Input
            type="email"
            name="applicantEmail"
            value={formData.applicantEmail}
            onChange={handleChange("applicantEmail")}
            placeholder="Enter applicant's email (optional)"
            bg="rgba(255, 255, 255, 0.8)"
            border={errors.applicantEmail ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
            borderRadius="12px"
            py={6}
            px={4}
            fontSize="16px"
            _placeholder={{
              color: "gray.400",
              fontSize: "14px"
            }}
            _hover={{
              borderColor: errors.applicantEmail ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
              bg: "rgba(255, 255, 255, 0.9)"
            }}
            _focus={{
              borderColor: errors.applicantEmail ? "#e53e3e" : "green.500",
              boxShadow: errors.applicantEmail ? "0 0 0 3px rgba(229, 62, 62, 0.1)" : "0 0 0 3px rgba(5, 156, 2, 0.1)",
              bg: "white"
            }}
            transition="all 0.3s ease"
          />
          {errors.applicantEmail && (
            <Text fontSize="12px" color="red.500" mt={1}>
              {errors.applicantEmail}
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
            mb={4}
          >
            Course of Interest
            <FontAwesomeIcon
              icon={faAsterisk}
              style={{
                color: "#e53e3e",
                fontSize: "8px",
                marginLeft: "6px"
              }}
            />
          </Text>
          <VStack gap={3} align="stretch">
            {courses.map((course, index) => (
              <Box
                key={index}
                bg="rgba(255, 255, 255, 0.8)"
                border={errors.applicantCourse ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
                borderRadius="12px"
                p={4}
                transition="all 0.3s ease"
                _hover={{
                  bg: "rgba(255, 255, 255, 0.9)",
                  borderColor: errors.applicantCourse ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                }}
                cursor="pointer"
                onClick={() => handleChange("applicantCourse")({ target: { value: course } })}
              >
                                    <HStack gap={3}>
                  <Box
                    width="20px"
                    height="20px"
                    borderRadius="50%"
                    border="2px solid"
                    borderColor={formData.applicantCourse === course ? "#059C02" : "#d1d5db"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg={formData.applicantCourse === course ? "#059C02" : "transparent"}
                    transition="all 0.3s ease"
                  >
                    {formData.applicantCourse === course && (
                      <Box
                        width="8px"
                        height="8px"
                        borderRadius="50%"
                        bg="white"
                      />
                    )}
                  </Box>
                  <Text
                    fontSize="14px"
                    fontWeight="500"
                    color="gray.700"
                    lineHeight="1.4"
                  >
                    {course}
                  </Text>
                </HStack>
              </Box>
            ))}
          </VStack>
          {errors.applicantCourse && (
            <Text fontSize="12px" color="red.500" mt={1}>
              {errors.applicantCourse}
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
            Applicant's Phone Number
            <Box as="span" fontSize="12px" color="gray.500" ml={2} fontWeight="normal">
              (Optional)
            </Box>
          </Text>
          <Input
            type="text"
            name="applicantPhoneNumber"
            value={formData.applicantPhoneNumber}
            onChange={handleChange("applicantPhoneNumber")}
            placeholder="Enter applicant's phone number (optional)"
            bg="rgba(255, 255, 255, 0.8)"
            border={errors.applicantPhoneNumber ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
            borderRadius="12px"
            py={6}
            px={4}
            fontSize="16px"
            _placeholder={{
              color: "gray.400",
              fontSize: "14px"
            }}
            _hover={{
              borderColor: errors.applicantPhoneNumber ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
              bg: "rgba(255, 255, 255, 0.9)"
            }}
            _focus={{
              borderColor: errors.applicantPhoneNumber ? "#e53e3e" : "green.500",
              boxShadow: errors.applicantPhoneNumber ? "0 0 0 3px rgba(229, 62, 62, 0.1)" : "0 0 0 3px rgba(5, 156, 2, 0.1)",
              bg: "white"
            }}
            transition="all 0.3s ease"
          />
          {errors.applicantPhoneNumber && (
            <Text fontSize="12px" color="red.500" mt={1}>
              {errors.applicantPhoneNumber}
            </Text>
          )}
        </Box>
      </VStack>
    </VStack>
  );
};

export default ApplicantInfo;
