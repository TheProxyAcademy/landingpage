import React, { useState, useEffect } from "react";
import { Box, Flex, VStack, Text, Button, Image, Container } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import BoyIllustration from "../assets/boy.png";

// Keyframe animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0px); }
`;

const slideInRight = keyframes`
  0% { opacity: 0; transform: translateX(50px); }
  100% { opacity: 1; transform: translateX(0px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
`;

const Particle = ({ delay, left, top, size, color }) => (
  <Box
    position="absolute"
    left={left}
    top={top}
    w={size}
    h={size}
    bg={color}
    borderRadius="50%"
    animation={`${float} 3s ease-in-out infinite`}
    animationDelay={delay}
    opacity={0.7}
    zIndex={1}
  />
);

const SparkleIcon = ({ delay, left, top }) => (
  <Box
    position="absolute"
    left={left}
    top={top}
    w="12px"
    h="12px"
    color="yellow.400"
    animation={`${sparkle} 2s ease-in-out infinite`}
    animationDelay={delay}
    zIndex={2}
    _before={{
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "2px",
      height: "12px",
      bg: "currentColor",
    }}
    _after={{
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) rotate(90deg)",
      width: "2px",
      height: "12px",
      bg: "currentColor",
    }}
  />
);

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Leading Tech Classes ";
  
  useEffect(() => {
    setIsVisible(true);
    
    // Typing effect
    const typeText = () => {
      if (textIndex < fullText.length) {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        setIsTyping(false);
      }
    };

    const timer = setTimeout(typeText, 100);
    return () => clearTimeout(timer);
  }, [textIndex, fullText]);

  return (
    <Box
      h="100vh"
      w="full"
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent={{ base: "flex-start", md: "center" }}
      overflow="hidden"
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    >
      {/* Animated Background Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.3}
      />
      
      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="linear-gradient(135deg, rgba(5, 156, 2, 0.8) 0%, rgba(4, 127, 1, 0.9) 50%, rgba(2, 70, 1, 0.8) 100%)"
        zIndex={1}
      />

      {/* Floating Particles */}
      <Particle delay="0s" left="10%" top="20%" size="8px" color="rgba(255, 255, 255, 0.6)" />
      <Particle delay="0.5s" left="20%" top="60%" size="12px" color="rgba(255, 255, 255, 0.4)" />
      <Particle delay="1s" left="80%" top="30%" size="6px" color="rgba(255, 255, 255, 0.8)" />
      <Particle delay="1.5s" left="70%" top="70%" size="10px" color="rgba(255, 255, 255, 0.5)" />
      <Particle delay="2s" left="30%" top="80%" size="8px" color="rgba(255, 255, 255, 0.6)" />
      <Particle delay="2.5s" left="90%" top="50%" size="14px" color="rgba(255, 255, 255, 0.3)" />

      {/* Sparkle Effects */}
      <SparkleIcon delay="0s" left="15%" top="25%" />
      <SparkleIcon delay="1s" left="85%" top="35%" />
      <SparkleIcon delay="2s" left="25%" top="75%" />
      <SparkleIcon delay="3s" left="75%" top="15%" />

      <Container maxW="1440px" px={{ base: 10, lg: 20 }} zIndex={2} position="relative">
        <Box w={{ base: "full", md: "50%", xl: "55%" }} mb={5} pt={{ base: 24, md: 0 }}>
          <VStack align="flex-start" spacing={4}>
            {/* Subtitle with animation */}
            <Text
              fontFamily="'Inter', sans-serif"
              color="rgba(255, 255, 255, 0.9)"
              textTransform="uppercase"
              fontWeight="bold"
              lineHeight="1.2"
              fontSize={{ base: "14px", lg: "18px" }}
              letterSpacing="2px"
              opacity={isVisible ? 1 : 0}
              transform={isVisible ? "translateY(0)" : "translateY(20px)"}
              transition="all 0.8s ease-out"
              transitionDelay="0.2s"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-4px",
                left: 0,
                width: "60px",
                height: "2px",
                bg: "yellow.400",
                animation: `${pulse} 2s ease-in-out infinite`,
              }}
            >
              Empower the Future:
            </Text>

            {/* Main Title with typing effect */}
            <Box>
              <Text
                fontFamily="'Syne', sans-serif"
                color="white"
                textTransform="uppercase"
                fontWeight="bold"
                lineHeight="1.1"
                fontSize={{ base: "28px", lg: "76px" }}
                textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                opacity={isVisible ? 1 : 0}
                transform={isVisible ? "translateY(0)" : "translateY(30px)"}
                transition="all 1s ease-out"
                transitionDelay="0.4s"
              >
                {displayText}
                {isTyping && (
                  <Box as="span" 
                    animation={`${pulse} 1s ease-in-out infinite`}
                    color="yellow.400"
                  >
                    |
                  </Box>
                )}
                {!isTyping && (
                  <Box 
                    as="span" 
                    color="yellow.400" 
                    fontSize={{ base: "28px", lg: "76px" }}
                    textShadow="0 0 20px rgba(255, 255, 0, 0.5)"
                    display="inline-block"
                    animation={`${fadeInUp} 0.8s ease-out`}
                    animationDelay="0.3s"
                    animationFillMode="both"
                  >
                    for Kids
                  </Box>
                )}
              </Text>
            </Box>

            {/* Description with enhanced styling */}
            <Text 
              mt={6}
              fontSize={{ base: "14px", lg: "18px" }}
              color="rgba(255, 255, 255, 0.9)"
              lineHeight="1.6"
              maxW="90%"
              opacity={isVisible ? 1 : 0}
              transform={isVisible ? "translateY(0)" : "translateY(20px)"}
              transition="all 1s ease-out"
              transitionDelay="0.8s"
              textShadow="1px 1px 2px rgba(0,0,0,0.3)"
            >
              Join us in shaping the next generation of tech leaders and
              innovators. Start their journey to success today, no matter where
              you are in the world!
            </Text>
          </VStack>
        </Box>
        
        {/* Enhanced Button with animations */}
        <Box
          opacity={isVisible ? 1 : 0}
          transform={isVisible ? "translateY(0)" : "translateY(20px)"}
          transition="all 1s ease-out"
          transitionDelay="1s"
        >
          <Button
            as={Link}
            to="/register"
            px={10}
            py={4}
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="md"
            borderRadius="full"
            bg="linear-gradient(45deg, #FFD700, #FFA500)"
            color="gray.800"
            border="3px solid transparent"
            backgroundClip="padding-box"
            position="relative"
            _hover={{
              transform: "scale(1.08) translateY(-2px)",
              boxShadow: "0 10px 25px rgba(255, 215, 0, 0.4)",
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
            Enrol Now
          </Button>
        </Box>
      </Container>
      
      {/* Enhanced Boy Illustration */}
      <Image
        src={BoyIllustration}
        alt="Tech learning illustration"
        position="absolute"
        bottom="5%"
        h={{ base: "220px", lg: "450px", "2xl": "800px" }}
        right={{ base: "5%", "2xl": "-20%" }}
        zIndex={2}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateX(0)" : "translateX(100px)"}
        transition="all 1.2s ease-out"
        transitionDelay="0.6s"
        filter="drop-shadow(0 20px 40px rgba(0,0,0,0.3))"
        animation={`${float} 6s ease-in-out infinite`}
        _hover={{
          transform: "scale(1.05)",
          transition: "transform 0.3s ease",
        }}
      />
      
      {/* Floating Code Elements */}
      <Box
        position="absolute"
        top="20%"
        right="15%"
        color="rgba(255, 255, 255, 0.25)"
        fontSize="14px"
        fontFamily="'Courier New', monospace"
        animation={`${float} 4s ease-in-out infinite`}
        animationDelay="1s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="1.2s"
      >
        {"<code>"}
      </Box>
      
      <Box
        position="absolute"
        top="70%"
        right="25%"
        color="rgba(255, 255, 255, 0.25)"
        fontSize="16px"
        fontFamily="'Courier New', monospace"
        animation={`${float} 3s ease-in-out infinite`}
        animationDelay="2s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="1.4s"
      >
        {"</html>"}
      </Box>

      {/* Additional Tech Terms */}
      <Box
        position="absolute"
        top="15%"
        left="20%"
        color="rgba(255, 255, 255, 0.3)"
        fontSize="18px"
        fontFamily="'Syne', sans-serif"
        fontWeight="bold"
        animation={`${float} 5s ease-in-out infinite`}
        animationDelay="0.8s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="1.6s"
        textShadow="1px 1px 2px rgba(0,0,0,0.3)"
      >
        DESIGN
      </Box>

      <Box
        position="absolute"
        top="45%"
        left="10%"
        color="rgba(255, 255, 255, 0.25)"
        fontSize="16px"
        fontFamily="'Inter', sans-serif"
        fontWeight="semibold"
        animation={`${float} 6s ease-in-out infinite`}
        animationDelay="1.5s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="1.8s"
      >
        cyber security
      </Box>

      <Box
        position="absolute"
        top="60%"
        left="15%"
        color="rgba(255, 255, 255, 0.3)"
        fontSize="14px"
        fontFamily="'Syne', sans-serif"
        fontWeight="bold"
        animation={`${float} 4.5s ease-in-out infinite`}
        animationDelay="2.2s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="2s"
        textTransform="uppercase"
      >
        Animation
      </Box>

      <Box
        position="absolute"
        top="25%"
        right="30%"
        color="rgba(255, 255, 255, 0.25)"
        fontSize="15px"
        fontFamily="'Inter', sans-serif"
        animation={`${float} 3.5s ease-in-out infinite`}
        animationDelay="1.8s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="2.2s"
      >
        data analysis
      </Box>

      <Box
        position="absolute"
        top="80%"
        left="25%"
        color="rgba(255, 255, 255, 0.25)"
        fontSize="13px"
        fontFamily="'Courier New', monospace"
        animation={`${float} 5.5s ease-in-out infinite`}
        animationDelay="0.5s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="2.4s"
      >
        JavaScript
      </Box>

      <Box
        position="absolute"
        top="35%"
        right="20%"
        color="rgba(255, 255, 255, 0.3)"
        fontSize="16px"
        fontFamily="'Courier New', monospace"
        animation={`${float} 4s ease-in-out infinite`}
        animationDelay="3s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="2.6s"
      >
        Python
      </Box>

      <Box
        position="absolute"
        top="10%"
        right="40%"
        color="rgba(255, 255, 255, 0.25)"
        fontSize="20px"
        fontFamily="'Courier New', monospace"
        animation={`${float} 3s ease-in-out infinite`}
        animationDelay="2.5s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="2.8s"
      >
        {"{ }"}
      </Box>

      <Box
        position="absolute"
        top="50%"
        right="35%"
        color="rgba(255, 255, 255, 0.25)"
        fontSize="14px"
        fontFamily="'Syne', sans-serif"
        fontWeight="bold"
        animation={`${float} 6s ease-in-out infinite`}
        animationDelay="1.2s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="3s"
        textTransform="uppercase"
      >
        Web Dev
      </Box>

      <Box
        position="absolute"
        top="75%"
        right="10%"
        color="rgba(255, 255, 255, 0.3)"
        fontSize="18px"
        fontFamily="'Courier New', monospace"
        animation={`${float} 4.5s ease-in-out infinite`}
        animationDelay="0.8s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="3.2s"
      >
        CSS
      </Box>

      <Box
        position="absolute"
        top="65%"
        left="5%"
        color="rgba(255, 255, 255, 0.25)"
        fontSize="16px"
        fontFamily="'Courier New', monospace"
        animation={`${float} 3.8s ease-in-out infinite`}
        animationDelay="2.8s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="3.4s"
      >
        {"[ ]"}
      </Box>

      <Box
        position="absolute"
        top="85%"
        right="45%"
        color="rgba(255, 255, 255, 0.25)"
        fontSize="12px"
        fontFamily="'Inter', sans-serif"
        fontWeight="semibold"
        animation={`${float} 5s ease-in-out infinite`}
        animationDelay="1.5s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="3.6s"
      >
        scratch programming
      </Box>

      {/* Interactive floating emoji */}
      <Box
        position="absolute"
        top="40%"
        right="8%"
        fontSize="24px"
        animation={`${float} 5s ease-in-out infinite`}
        animationDelay="0.5s"
        zIndex={1}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? "translateY(0)" : "translateY(-20px)"}
        transition="all 1s ease-out"
        transitionDelay="1s"
        cursor="pointer"
        _hover={{
          transform: "scale(1.2) rotate(10deg)",
          transition: "transform 0.3s ease",
        }}
      >
        💻
      </Box>
    </Box>
  );
}

export default Hero;
