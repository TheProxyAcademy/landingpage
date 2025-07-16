import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Text, Container, VStack, HStack, Badge } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import BootcampForm from "./BootcampForm";

// Keyframes for animations
const floatUp = keyframes`
  0% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-25px) rotate(180deg); opacity: 0.6; }
  100% { transform: translateY(0px) rotate(360deg); opacity: 0.3; }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const slideInLeft = keyframes`
  0% { transform: translateX(-80px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const slideInRight = keyframes`
  0% { transform: translateX(80px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const slideInUp = keyframes`
  0% { transform: translateY(60px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const sparkle = keyframes`
  0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { transform: scale(1) rotate(180deg); opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(5, 156, 2, 0.3); }
  50% { box-shadow: 0 0 40px rgba(5, 156, 2, 0.6); }
`;

const BootcampHero = ({ onFormInteraction, onFormSubmission }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger section animations
            const sections = ['title', 'content', 'form'];
            sections.forEach((section, index) => {
              setTimeout(() => {
                setVisibleSections(prev => [...prev, section]);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={heroRef}
      bg="linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)"
      position="relative"
      overflow="hidden"
      minH="100vh"
      pt={20}
    >
      {/* Floating Background Elements */}
      <Box
        position="absolute"
        top="15%"
        left="8%"
        fontSize="16px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.15)"
        animation={`${floatUp} 8s ease-in-out infinite`}
        fontFamily="'Syne', sans-serif"
      >
        &lt;bootcamp&gt;
      </Box>
      <Box
        position="absolute"
        top="25%"
        right="12%"
        fontSize="14px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.15)"
        animation={`${floatUp} 6s ease-in-out infinite 2s`}
        fontFamily="'Syne', sans-serif"
      >
        SUMMER
      </Box>
      <Box
        position="absolute"
        bottom="30%"
        left="10%"
        fontSize="18px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.15)"
        animation={`${floatUp} 7s ease-in-out infinite 1s`}
        fontFamily="'Syne', sans-serif"
      >
        TECH
      </Box>
      <Box
        position="absolute"
        bottom="15%"
        right="15%"
        fontSize="15px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.15)"
        animation={`${floatUp} 9s ease-in-out infinite 3s`}
        fontFamily="'Syne', sans-serif"
      >
        &lt;/register&gt;
      </Box>

      {/* Sparkle Effects */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Box
          key={i}
          position="absolute"
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          width="3px"
          height="3px"
          borderRadius="50%"
          bg="rgba(5, 156, 2, 0.4)"
          animation={`${sparkle} 4s ease-in-out infinite ${Math.random() * 4}s`}
        />
      ))}

      <Container maxW="1440px" mx="auto" pb={{base: 5, lg: 10}} px={{ base: 5, lg: 20 }}>
        <Flex 
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          gap={12}
          minH="80vh"
        >
          {/* Left Content Section */}
          <Box 
            w={{ base: "full", lg: "50%" }}
            position="relative"
            opacity={visibleSections.includes('content') ? 1 : 0}
            animation={visibleSections.includes('content') ? `${slideInLeft} 1s ease-out` : 'none'}
          >
            <VStack align="start" spacing={8} h="full" mt={4}>
              {/* Title with Enhanced Styling */}
              <VStack align="start" spacing={6}>
                <HStack spacing={4} wrap="wrap">
                  <Badge
                    bg="rgba(5, 156, 2, 0.1)"
                    color="green.600"
                    px={4}
                    py={2}
                    borderRadius="full"
                    fontFamily="'Syne', sans-serif"
                    fontWeight="bold"
                    fontSize="12px"
                    textTransform="uppercase"
                    letterSpacing="wide"
                    border="1px solid rgba(5, 156, 2, 0.3)"
                  >
                    🚀 Limited Time Offer
                  </Badge>
                  <Badge
                    bg="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                    color="white"
                    px={4}
                    py={2}
                    borderRadius="full"
                    fontFamily="'Syne', sans-serif"
                    fontWeight="bold"
                    fontSize="12px"
                    textTransform="uppercase"
                    letterSpacing="wide"
                    animation={`${glow} 2s ease-in-out infinite`}
                  >
                    5% OFF
                  </Badge>
                </HStack>

                <Text
                  as="h1"
                  fontSize={{ base: "32px", md: "40px", lg: "48px" }}
                  fontFamily="'Syne', sans-serif"
                  fontWeight="bold"
                  lineHeight="1.1"
                  background="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
                  backgroundClip="text"
                  color="transparent"
                  textTransform="uppercase"
                  letterSpacing="tight"
                  opacity={visibleSections.includes('title') ? 1 : 0}
                  animation={visibleSections.includes('title') ? `${slideInUp} 1s ease-out` : 'none'}
                >
                  Summer Tech Bootcamp 4.0
                </Text>

                <Box
                  w="80px"
                  h="4px"
                  bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
                  borderRadius="2px"
                  opacity={visibleSections.includes('title') ? 1 : 0}
                  animation={visibleSections.includes('title') ? `${slideInRight} 1s ease-out 0.5s both` : 'none'}
                />
              </VStack>

              {/* Enhanced Content */}
              <VStack align="start" spacing={6} mt={4}>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color="gray.700"
                  lineHeight="1.7"
                  fontWeight="500"
                >
                  Give your kids a worthwhile summer experience with our &nbsp;
                  <Text as="span" color="green.600" fontWeight="bold">
                    ONLINE SUMMER TECH BOOTCAMP
                  </Text>&nbsp;
                  for children aged 5-17. Our classes will be held thrice a week with flexible scheduling options.
                </Text>

                {/* Feature Highlights */}
                <VStack align="start" spacing={4} w="full" mt={4}>
                  {[
                    { icon: "📅", text: "August 2 - September 6, 2025" },
                    { icon: "👥", text: "Ages 5-17 Welcome" },
                    { icon: "💻", text: "100% Online Learning" },
                  ].map((item, index) => (
                    <HStack
                      key={index}
                      spacing={3}
                      opacity={visibleSections.includes('content') ? 1 : 0}
                      animation={visibleSections.includes('content') ? `${slideInLeft} 0.8s ease-out ${index * 0.1}s both` : 'none'}
                    >
                      <Box
                        fontSize="20px"
                        w="40px"
                        h="40px"
                        bg="rgba(5, 156, 2, 0.1)"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        border="1px solid rgba(5, 156, 2, 0.2)"
                      >
                        {item.icon}
                      </Box>
                      <Text fontSize="16px" color="gray.700" fontWeight="500">
                        {item.text}
                      </Text>
                    </HStack>
                  ))}
                </VStack>

                {/* Special Offer Box */}
                <Box
                  p={6}
                  bg="rgba(5, 156, 2, 0.05)"
                  borderRadius="16px"
                  border="1px solid rgba(5, 156, 2, 0.2)"
                  backdropFilter="blur(10px)"
                  position="relative"
                  overflow="hidden"
                  w="full"
                  animation={`${pulse} 3s ease-in-out infinite`}
                  mt={4}
                >
                  {/* Shimmer Effect */}
                  <Box
                    position="absolute"
                    top="0"
                    left="-100%"
                    width="100%"
                    height="100%"
                    background="linear-gradient(90deg, transparent, rgba(5, 156, 2, 0.1), transparent)"
                    animation={`${shimmer} 3s ease-in-out infinite`}
                  />
                  
                  <VStack align="start" spacing={3} position="relative">
                    <Text
                      fontSize="18px"
                      fontFamily="'Syne', sans-serif"
                      fontWeight="bold"
                      color="green.600"
                      textTransform="uppercase"
                    >
                      🎉 Special Offer
                    </Text>
                    <Text fontSize="16px" color="gray.700" lineHeight="1.6">
                      Enroll your children and get a whopping&nbsp;
                      <Text as="span" fontSize="20px" fontWeight="bold" color="green.600">
                        5% OFF
                      </Text>&nbsp;
                      the original Bootcamp fee of&nbsp;
                      <Text as="span" textDecoration="line-through" color="gray.500">
                        ₦45,000
                      </Text>&nbsp;
                      <Text as="span" fontSize="20px" fontWeight="bold" color="green.600">
                        ₦42,750
                      </Text>
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            </VStack>
          </Box>
          
          {/* Right Form Section */}
          <Box 
            w={{ base: "full", lg: "50%" }}
            opacity={visibleSections.includes('form') ? 1 : 0}
            animation={visibleSections.includes('form') ? `${slideInRight} 1s ease-out` : 'none'}
          >
            <Box
              bg="rgba(255, 255, 255, 0.8)"
              backdropFilter="blur(10px)"
              borderRadius="24px"
              p={8}
              border="1px solid rgba(255, 255, 255, 0.3)"
              boxShadow="0 20px 40px rgba(0, 0, 0, 0.1)"
              position="relative"
              overflow="hidden"
              h="full"
              _hover={{
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transform: "translateY(-2px)",
                transition: "all 0.3s ease-in-out"
              }}
            >
              {/* Form Header */}
              {/* <VStack spacing={4} mb={8}>
                <Text
                  fontSize="24px"
                  fontFamily="'Syne', sans-serif"
                  fontWeight="bold"
                  textAlign="center"
                  background="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
                  backgroundClip="text"
                  color="transparent"
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  Register Now
                </Text>
                <Text
                  fontSize="14px"
                  color="gray.600"
                  textAlign="center"
                  lineHeight="1.5"
                >
                  Secure your child's spot in our exclusive summer bootcamp
                </Text>
              </VStack> */}

              {/* Form Component */}
              <BootcampForm
                onFormInteraction={onFormInteraction}
                onFormSubmission={onFormSubmission}
              />
              
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default BootcampHero;
