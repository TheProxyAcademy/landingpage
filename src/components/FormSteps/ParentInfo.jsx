import React from "react";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text, VStack, Box, Input } from "@chakra-ui/react";

const ParentInfo = ({ handleChange, formData, errors }) => {
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
        Parent/Guardian Information
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
            Parent's or Guardian's Full Name
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
            name="parentFullname"
            value={formData.parentFullname}
            onChange={handleChange("parentFullname")}
            placeholder="Enter full name"
            bg="rgba(255, 255, 255, 0.8)"
            border={errors.parentFullname ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
            borderRadius="12px"
            py={6}
            px={4}
            fontSize="16px"
            _placeholder={{
              color: "gray.400",
              fontSize: "14px"
            }}
            _hover={{
              borderColor: errors.parentFullname ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
              bg: "rgba(255, 255, 255, 0.9)"
            }}
            _focus={{
              borderColor: errors.parentFullname ? "#e53e3e" : "green.500",
              boxShadow: errors.parentFullname ? "0 0 0 3px rgba(229, 62, 62, 0.1)" : "0 0 0 3px rgba(5, 156, 2, 0.1)",
              bg: "white"
            }}
            transition="all 0.3s ease"
          />
          {errors.parentFullname && (
            <Text fontSize="12px" color="red.500" mt={1}>
              {errors.parentFullname}
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
            Email Address
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
            type="email"
            name="parentEmail"
            value={formData.parentEmail}
            onChange={handleChange("parentEmail")}
            placeholder="Enter email address"
            bg="rgba(255, 255, 255, 0.8)"
            border={errors.parentEmail ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
            borderRadius="12px"
            py={6}
            px={4}
            fontSize="16px"
            _placeholder={{
              color: "gray.400",
              fontSize: "14px"
            }}
            _hover={{
              borderColor: errors.parentEmail ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
              bg: "rgba(255, 255, 255, 0.9)"
            }}
            _focus={{
              borderColor: errors.parentEmail ? "#e53e3e" : "green.500",
              boxShadow: errors.parentEmail ? "0 0 0 3px rgba(229, 62, 62, 0.1)" : "0 0 0 3px rgba(5, 156, 2, 0.1)",
              bg: "white"
            }}
            transition="all 0.3s ease"
          />
          {errors.parentEmail && (
            <Text fontSize="12px" color="red.500" mt={1}>
              {errors.parentEmail}
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
            Phone Number
            <FontAwesomeIcon
              icon={faAsterisk}
              style={{
                color: "#e53e3e",
                fontSize: "8px",
                marginLeft: "6px"
              }}
            />
          </Text>
          <Text fontSize="12px" color="gray.500" mb={2}>
            Feel free to add more than one and separate with a comma
          </Text>
          <Input
            type="text"
            name="parentPhoneNumber"
            value={formData.parentPhoneNumber}
            onChange={handleChange("parentPhoneNumber")}
            placeholder="Enter phone number(s)"
            bg="rgba(255, 255, 255, 0.8)"
            border={errors.parentPhoneNumber ? "1px solid #e53e3e" : "1px solid rgba(0, 0, 0, 0.1)"}
            borderRadius="12px"
            py={6}
            px={4}
            fontSize="16px"
            _placeholder={{
              color: "gray.400",
              fontSize: "14px"
            }}
            _hover={{
              borderColor: errors.parentPhoneNumber ? "#e53e3e" : "rgba(5, 156, 2, 0.3)",
              bg: "rgba(255, 255, 255, 0.9)"
            }}
            _focus={{
              borderColor: errors.parentPhoneNumber ? "#e53e3e" : "green.500",
              boxShadow: errors.parentPhoneNumber ? "0 0 0 3px rgba(229, 62, 62, 0.1)" : "0 0 0 3px rgba(5, 156, 2, 0.1)",
              bg: "white"
            }}
            transition="all 0.3s ease"
          />
          {errors.parentPhoneNumber && (
            <Text fontSize="12px" color="red.500" mt={1}>
              {errors.parentPhoneNumber}
            </Text>
          )}
        </Box>
      </VStack>
    </VStack>
  );
};

export default ParentInfo;
