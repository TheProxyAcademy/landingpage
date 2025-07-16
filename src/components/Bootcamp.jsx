import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Text, Button, Image, Container, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import Illustration from "../assets/summer-img.jpg";

// Animation keyframes
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
`;

const slideInLeft = keyframes`
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  0% { opacity: 0; transform: translateX(50px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
`;

// Floating particle component
const Particle = ({ delay, left, top, size, color }) => (
  <Box
    position="absolute"
    left={left}
    top={top}
    w={size}
    h={size}
    bg={color}
    borderRadius="50%"
    animation={`${float} 4s ease-in-out infinite`}
    animationDelay={delay}
    opacity={0.6}
    zIndex={1}
  />
);

// Sparkle effect component
const SparkleEffect = ({ delay, left, top }) => (
  <Box
    position="absolute"
    left={left}
    top={top}
    w="8px"
    h="8px"
    color="yellow.400"
    animation={`${sparkle} 3s ease-in-out infinite`}
    animationDelay={delay}
    zIndex={2}
    _before={{
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "2px",
      height: "8px",
      bg: "currentColor",
    }}
    _after={{
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) rotate(90deg)",
      width: "2px",
      height: "8px",
      bg: "currentColor",
    }}
  />
);

function Bootcamp() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Functional countdown timer with real target date
  useEffect(() => {
    const calculateTimeLeft = () => {
      // Target date: August 3rd, 2025 at 11am WAT (UTC+1)
      const targetDate = new Date('2025-08-03T11:00:00+01:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Countdown finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      ref={sectionRef}
      bg="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
      position="relative"
      overflow="hidden"
      py={{ base: 20, lg: 32 }}
    >
      {/* Background gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="linear-gradient(135deg, rgba(5, 156, 2, 0.03) 0%, rgba(4, 127, 1, 0.05) 100%)"
        zIndex={0}
      />

      {/* Floating particles */}
      <Particle delay="0s" left="10%" top="20%" size="6px" color="rgba(5, 156, 2, 0.3)" />
      <Particle delay="1s" left="85%" top="30%" size="8px" color="rgba(4, 127, 1, 0.4)" />
      <Particle delay="2s" left="20%" top="80%" size="5px" color="rgba(5, 156, 2, 0.3)" />
      <Particle delay="3s" left="80%" top="70%" size="7px" color="rgba(4, 127, 1, 0.4)" />

      {/* Sparkle effects */}
      <SparkleEffect delay="0s" left="15%" top="25%" />
      <SparkleEffect delay="2s" left="75%" top="15%" />
      <SparkleEffect delay="4s" left="25%" top="85%" />

      {/* Floating tech elements */}
      <Box
        position="absolute"
        top="15%"
        left="8%"
        color="rgba(5, 156, 2, 0.2)"
        fontSize="16px"
        fontFamily="'Courier New', monospace"
        animation={`${float} 5s ease-in-out infinite`}
        animationDelay="1s"
        zIndex={1}
      >
        {"<summer>"}
      </Box>
      
      <Box
        position="absolute"
        top="70%"
        right="8%"
        color="rgba(4, 127, 1, 0.2)"
        fontSize="14px"
        fontFamily="'Courier New', monospace"
        animation={`${float} 4s ease-in-out infinite`}
        animationDelay="2s"
        zIndex={1}
      >
        {"</bootcamp>"}
      </Box>

      <Container maxW="1440px" px={{ base: 5, lg: 20 }} position="relative" zIndex={2}>
        <Flex 
          direction={{ base: "column-reverse", lg: "row" }}
          justify="space-between"
          align="center"
          gap={12}
        >
          {/* Enhanced Image Section */}
          <Box 
            w={{ base: "90%", lg: "45%" }} 
            position="relative"
            opacity={isVisible ? 1 : 0}
            transform={isVisible ? "translateX(0)" : "translateX(-50px)"}
            transition="all 1s ease-out"
            transitionDelay="0.2s"
          >
            {/* Multiple shadow layers for depth */}
            <Box
              position="absolute"
              bg="linear-gradient(135deg, #059C02, #047F01)"
              w="full"
              h="full"
              borderRadius="2xl"
              right="8"
              top="8"
              zIndex={-3}
              opacity={0.6}
              filter="blur(8px)"
            />
            <Box
              position="absolute"
              bg="linear-gradient(45deg, #FFD700, #FFA500)"
              w="full"
              h="full"
              right="4"
              top="4"
              borderRadius="2xl"
              zIndex={-2}
              opacity={0.8}
            />
            <Box
              position="absolute"
              bg="linear-gradient(135deg, #667eea, #764ba2)"
              w="full"
              h="full"
              right="2"
              top="2"
              borderRadius="2xl"
              zIndex={-1}
              opacity={0.3}
            />
            
            {/* Main image with enhanced effects */}
            <Box position="relative" overflow="hidden" borderRadius="2xl">
              <Image
                src={Illustration}
                alt="Summer Tech Bootcamp Illustration"
                w="full"
                h="auto"
                borderRadius="2xl"
                zIndex={0}
                filter="brightness(1.1) contrast(1.1)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                  filter: "brightness(1.2) contrast(1.2)",
                }}
              />
              
              {/* Shimmer effect overlay */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
                animation={`${shimmer} 3s ease-in-out infinite`}
                animationDelay="2s"
              />
              
              {/* Gradient overlay */}
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                h="40%"
                bg="linear-gradient(transparent, rgba(5, 156, 2, 0.1))"
                borderRadius="0 0 2xl 2xl"
              />
            </Box>

            {/* Floating badge */}
            <Box
              position="absolute"
              top="-10px"
              right="-10px"
              bg="linear-gradient(45deg, #FFD700, #FFA500)"
              color="gray.800"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              shadow="lg"
              animation={`${pulse} 2s ease-in-out infinite`}
              zIndex={3}
            >
              🔥 Limited Time
            </Box>
          </Box>
          
          {/* Enhanced Content Section */}
          <Box 
            w={{ base: "full", lg: "50%" }}
            textAlign={{ base: "center", lg: "left" }}
            opacity={isVisible ? 1 : 0}
            transform={isVisible ? "translateX(0)" : "translateX(50px)"}
            transition="all 1s ease-out"
            transitionDelay="0.4s"
          >
            <VStack align={{ base: "center", lg: "flex-start" }} spacing={6}>
              {/* Enhanced Title - Fixed visibility */}
              <Box position="relative"> 
                <Text
                  as="h2"
                  fontFamily="'Syne', sans-serif"
                  textTransform="uppercase"
                  fontWeight="bold"
                  color="green.600"
                  fontSize={{ base: "2xl", lg: "4xl" }}
                  lineHeight="1.2"
                  textShadow="2px 2px 4px rgba(0,0,0,0.1)"
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-8px",
                    left: { base: "50%", lg: 0 },
                    transform: { base: "translateX(-50%)", lg: "none" },
                    width: "80px",
                    height: "3px",
                    bg: "linear-gradient(45deg, #FFD700, #FFA500)",
                    borderRadius: "full",
                  }}
                >
                  Summer Tech Bootcamp
                </Text>
                <Text
                  fontSize={{ base: "lg", lg: "xl" }}
                  color="gray.600"
                  mt={2}
                  fontWeight="semibold"
                >
                  Kids Aged 5-17
                </Text>
              </Box>

              {/* Functional Countdown Timer */}
              <Box
                bg="rgba(255, 255, 255, 0.9)"
                backdropFilter="blur(10px)"
                borderRadius="xl"
                mt={4}
                p={6}
                border="1px solid rgba(255, 255, 255, 0.2)"
                shadow="lg"
                w="full"
                maxW="350px"
              >
                <Text
                  fontSize="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="gray.600"
                  textAlign="center"
                  mb={4}
                >
                  ⏰ Registration Closes In:
                </Text>
                <Flex justify="center" gap={4}>
                  <Box textAlign="center">
                    <Text fontSize="3xl" fontWeight="bold" color="green.600">
                      {timeLeft.days}
                    </Text>
                    <Text fontSize="xs" color="gray.500" fontWeight="semibold">Days</Text>
                  </Box>
                  <Box textAlign="center">
                    <Text fontSize="3xl" fontWeight="bold" color="green.600">
                      {timeLeft.hours}
                    </Text>
                    <Text fontSize="xs" color="gray.500" fontWeight="semibold">Hours</Text>
                  </Box>
                  <Box textAlign="center">
                    <Text fontSize="3xl" fontWeight="bold" color="green.600">
                      {timeLeft.minutes}
                    </Text>
                    <Text fontSize="xs" color="gray.500" fontWeight="semibold">Minutes</Text>
                  </Box>
                  <Box textAlign="center">
                    <Text fontSize="3xl" fontWeight="bold" color="green.600">
                      {timeLeft.seconds}
                    </Text>
                    <Text fontSize="xs" color="gray.500" fontWeight="semibold">Seconds</Text>
                  </Box>
                </Flex>
                <Text
                  fontSize="xs"
                  color="gray.500"
                  textAlign="center"
                  mt={3}
                  fontStyle="italic"
                >
                  August 3rd, 2025 at 11:00 AM WAT
                </Text>
              </Box>

              {/* Enhanced Description */}
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="gray.700"
                lineHeight="1.7"
                textAlign={{ base: "center", lg: "left" }}
                maxW="90%"
                mt={4}
              >
                Don't miss out on our <Text as="span" fontWeight="bold" color="green.600">Online Summer Tech Bootcamp</Text>, 
                where young innovators dive into the world of technology and creativity! 
                Register now to secure your spot and give your child a summer of learning, fun, and future-ready skills!
              </Text>

              {/* Feature highlights */}
              <Box w="full">
                <Flex
                  direction={{ base: "column", sm: "row" }}
                  gap={4}
                  justify={{ base: "center", lg: "flex-start" }}
                  wrap="wrap"
                  mt={4}
                >
                  <Box
                    bg="rgba(5, 156, 2, 0.1)"
                    px={3}
                    py={2}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="green.700"
                  >
                    💻 Online Learning
                  </Box>
                  <Box
                    bg="rgba(5, 156, 2, 0.1)"
                    px={3}
                    py={2}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="green.700"
                  >
                    🎯 Ages 5-17
                  </Box>
                  <Box
                    bg="rgba(5, 156, 2, 0.1)"
                    px={3}
                    py={2}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="semibold"
                    color="green.700"
                  >
                    🏆 Certificate
                  </Box>
                </Flex>
              </Box>

              {/* Enhanced Button */}
              <Box
                opacity={isVisible ? 1 : 0}
                transform={isVisible ? "translateY(0)" : "translateY(20px)"}
                transition="all 1s ease-out"
                transitionDelay="0.8s"
                mt={4}
              >
                <Button
                  as={Link}
                  to="/summerbootcamp"
                  size="lg"
                  px={10}
                  py={6}
                  bg="linear-gradient(45deg, #FFD700, #FFA500)"
                  color="gray.800"
                  borderRadius="full"
                  textTransform="uppercase"
                  fontSize="md"
                  fontWeight="bold"
                  border="3px solid transparent"
                  backgroundClip="padding-box"
                  position="relative"
                  _hover={{
                    transform: "scale(1.05) translateY(-2px)",
                    boxShadow: "0 15px 30px rgba(255, 215, 0, 0.4)",
                    bg: "linear-gradient(45deg, #FFA500, #FFD700)",
                  }}
                  _active={{
                    transform: "scale(1.02) translateY(0px)",
                  }}
                  transition="all 0.3s ease"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: "-3px",
                    left: "-3px",
                    right: "-3px",
                    bottom: "-3px",
                    background: "linear-gradient(45deg, #FFD700, #FFA500, #FFD700)",
                    borderRadius: "full",
                    zIndex: -1,
                    animation: `${pulse} 2s ease-in-out infinite`,
                  }}
                >
                  Register for Bootcamp
                </Button>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Bootcamp;
