import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, VStack, Text, SimpleGrid, Container } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

// Animation keyframes
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(1deg); }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0px); }
`;

const slideInLeft = keyframes`
  0% { opacity: 0; transform: translateX(-40px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
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
    animation={`${float} 5s ease-in-out infinite`}
    animationDelay={delay}
    opacity={0.5}
    zIndex={1}
  />
);

function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger card animations
          setTimeout(() => setVisibleCards([0]), 200);
          setTimeout(() => setVisibleCards([0, 1]), 400);
          setTimeout(() => setVisibleCards([0, 1, 2]), 600);
          setTimeout(() => setVisibleCards([0, 1, 2, 3]), 800);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "World-Class Curriculum",
      description: "We operate with curriculums and models that have been tested and proven effective by experts around the world.",
      gradient: "linear-gradient(135deg, #059C02, #047F01)",
      textColor: "white"
    },
    {
      title: "Flexibility",
      description: "We operate with strict adherence to constant practice and learning, while considering the wellbeing and psychological factors of our students.",
      gradient: "linear-gradient(135deg, #FFD700, #FFA500)",
      textColor: "gray.800"
    },
    {
      title: "Adaptive Learning",
      description: "We value quality delivery and offer one-on-one sessions as well as group classes to understand each student and move at their pace.",
      gradient: "linear-gradient(135deg, #4FD1C7, #3182CE)",
      textColor: "white"
    },
    {
      title: "Personalized Support",
      description: "Our dedicated instructors provide individual attention and customized learning paths to ensure every child reaches their full potential.",
      gradient: "linear-gradient(135deg, #EC4899, #BE185D)",
      textColor: "white"
    }
  ];

  return (
    <Box
      ref={sectionRef}
      bg="linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"
      position="relative"
      overflow="hidden"
      py={{ base: 20, lg: 32 }}
      id="why-us"
    >
      {/* Background gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="linear-gradient(135deg, rgba(5, 156, 2, 0.02) 0%, rgba(4, 127, 1, 0.03) 100%)"
        zIndex={0}
      />

      {/* Floating particles */}
      <Particle delay="0s" left="8%" top="15%" size="8px" color="rgba(5, 156, 2, 0.2)" />
      <Particle delay="2s" left="92%" top="25%" size="6px" color="rgba(4, 127, 1, 0.3)" />
      <Particle delay="4s" left="15%" top="85%" size="10px" color="rgba(5, 156, 2, 0.2)" />
      <Particle delay="6s" left="85%" top="75%" size="7px" color="rgba(4, 127, 1, 0.3)" />

      {/* Floating tech elements */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        color="rgba(5, 156, 2, 0.15)"
        fontSize="18px"
        fontFamily="'Courier New', monospace"
        animation={`${float} 6s ease-in-out infinite`}
        animationDelay="1s"
        zIndex={1}
      >
        {"<academy>"}
      </Box>
      
      <Box
        position="absolute"
        top="80%"
        right="5%"
        color="rgba(4, 127, 1, 0.15)"
        fontSize="16px"
        fontFamily="'Courier New', monospace"
        animation={`${float} 5s ease-in-out infinite`}
        animationDelay="3s"
        zIndex={1}
      >
        {"</excellence>"}
      </Box>

      <Container maxW="1440px" p={{ base: 5, lg: 20 }} position="relative" zIndex={2}>
      <Flex 
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
          align="flex-start"
          gap={12}
      >
          {/* Enhanced Content Section */}
          <Box 
            w={{ base: "full", lg: "45%" }}
            opacity={isVisible ? 1 : 0}
            transform={isVisible ? "translateX(0)" : "translateX(-40px)"}
            transition="all 1s ease-out"
            transitionDelay="0.2s"
          >
            <VStack align={{ base: "center", lg: "flex-start" }} spacing={6}>
              {/* Enhanced Title */}
              <Box position="relative" w="full">
          <Text
                  fontFamily="'Syne', sans-serif"
            textTransform="uppercase"
                  fontSize={{ base: "2xl", lg: "4xl" }}
            color="green.600"
            fontWeight="bold"
                  lineHeight="1.2"
            textAlign={{ base: "center", lg: "left" }}
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-12px",
                    left: { base: "50%", lg: 0 },
                    transform: { base: "translateX(-50%)", lg: "none" },
                    width: "100px",
                    height: "4px",
                    bg: "linear-gradient(45deg, #FFD700, #FFA500)",
                    borderRadius: "full",
                  }}
          >
            What's so special about The Proxy Academy?
          </Text>
        </Box>
        
              {/* Enhanced Description */}
              <Text
                mt={6}
                color="gray.700"
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "md", lg: "lg" }}
                lineHeight="1.7"
                maxW="95%"
              >
                We recognize the gap in the educational system that doesn't quite cater for the development of kids. 
                We are bridging this gap by facilitating digital skills knowledge in ways kids can easily relate with - 
                <Text as="span" fontWeight="bold" color="green.600"> fun and interactive</Text> - 
                to effectively function in a world that has gone largely digital.
              </Text>

              {/* Statistics Section */}
              <Box
                bg="rgba(255, 255, 255, 0.8)"
                backdropFilter="blur(10px)"
                borderRadius="xl"
                p={6}
                border="1px solid rgba(255, 255, 255, 0.2)"
                shadow="lg"
                w="full"
                mt={6}
              >
                <SimpleGrid columns={3} gap={4} textAlign="center">
                  <Box>
                    <Text fontSize="2xl" fontWeight="bold" color="green.600">500+</Text>
                    <Text fontSize="sm" color="gray.600">Students Trained</Text>
                  </Box>
                  <Box>
                    <Text fontSize="2xl" fontWeight="bold" color="green.600">15+</Text>
                    <Text fontSize="sm" color="gray.600">Countries Reached</Text>
                  </Box>
                  <Box>
                    <Text fontSize="2xl" fontWeight="bold" color="green.600">98%</Text>
                    <Text fontSize="sm" color="gray.600">Success Rate</Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </VStack>
            </Box>
            
          {/* Enhanced Feature Cards */}
          <Box w={{ base: "full", lg: "50%" }} mt={{ base: 10, lg: 0 }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              {features.map((feature, index) => (
                <Box
                  key={index}
                  bg="rgba(255, 255, 255, 0.9)"
                  backdropFilter="blur(10px)"
                  borderRadius="xl"
                  p={6}
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  shadow="lg"
                  position="relative"
                  overflow="hidden"
                  opacity={visibleCards.includes(index) ? 1 : 0}
                  transform={visibleCards.includes(index) ? "translateY(0)" : "translateY(30px)"}
                  transition="all 0.6s ease-out"
                  transitionDelay={`${index * 0.1}s`}
                  _hover={{
                    transform: "translateY(-8px) scale(1.02)",
                    shadow: "xl",
                    transition: "all 0.3s ease",
                  }}
                  cursor="pointer"
                >
                  {/* Gradient border overlay */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    h="4px"
                    bg={feature.gradient}
                    borderRadius="xl xl 0 0"
                  />

                  {/* Shimmer effect */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
                    animation={`${shimmer} 4s ease-in-out infinite`}
                    animationDelay={`${index * 0.5}s`}
                  />

                  <VStack align="flex-start" spacing={3} position="relative" zIndex={2}>
                    {/* Feature title */}
                    <Text
                      fontFamily="'Syne', sans-serif"
                      fontWeight="bold"
                      fontSize={{ base: "lg", lg: "xl" }}
                      textTransform="uppercase"
                      bgGradient={feature.gradient}
                      bgClip="text"
                      lineHeight="1.2"
                    >
                      {feature.title}
              </Text>

                    {/* Feature description */}
                    <Text
                      fontSize={{ base: "sm", lg: "md" }}
                      color="gray.700"
                      lineHeight="1.6"
                    >
                      {feature.description}
              </Text>
                  </VStack>

                  {/* Floating icon background */}
                  <Box
                    position="absolute"
                    top="10px"
                    right="15px"
                    w="40px"
                    h="40px"
                    bg={feature.gradient}
                    borderRadius="full"
                    opacity={0.1}
                    animation={`${pulse} 3s ease-in-out infinite`}
                    animationDelay={`${index * 0.3}s`}
                  />
            </Box>
              ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Container>
    </Box>
  );
}

export default WhyUs;
