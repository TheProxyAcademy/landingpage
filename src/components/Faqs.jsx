import React, { useState, useEffect, useRef } from "react";
import { 
  Accordion, 
  Box, 
  Text,
  Container,
  VStack
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

// Keyframes for animations
const floatUp = keyframes`
  0% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
  50% { transform: translateY(-30px) rotate(180deg); opacity: 0.4; }
  100% { transform: translateY(0px) rotate(360deg); opacity: 0.2; }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const slideInUp = keyframes`
  0% { transform: translateY(60px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const slideInLeft = keyframes`
  0% { transform: translateX(-60px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const sparkle = keyframes`
  0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { transform: scale(1) rotate(180deg); opacity: 1; }
`;

const expandDown = keyframes`
  0% { 
    max-height: 0;
    opacity: 0;
    transform: translateY(-20px);
  }
  100% { 
    max-height: 200px;
    opacity: 1;
    transform: translateY(0);
  }
`;

function Faqs() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleFaqs, setVisibleFaqs] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger FAQ animations
            const faqCount = 6;
            Array.from({ length: faqCount }).forEach((_, index) => {
              setTimeout(() => {
                setVisibleFaqs(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const faqData = [
    {
      question: "What programs do you offer?",
      answer: "We offer various tech skills including scratch, web development, data analysis, cyber security, Animation, Graphics Design, and more are coming."
    },
    {
      question: "When does the summer camp start?",
      answer: "Our summer camp is usually between July and August."
    },
    {
      question: "Do you teach outside of summer holidays?",
      answer: "Yes. Our program is all year round. We also offer personalised and group classes outside of our summer program"
    },
    {
      question: "What would my child need to prepare?",
      answer: "They only need a laptop and internet connection"
    },
    {
      question: "My child doesn't want to code, can they learn something else?",
      answer: "Absolutely! We believe every child has unique interest and we tailor their needs with other non-coding courses like data analysis, design, animation e.t.c"
    },
    {
      question: "My child already does IT in school, why do they need this?",
      answer: "Tech is a rather broad space that has evolved beyond microsoft word, excel and powerpoint. In other for them not to be left behind, they need to learn more advanced skills like coding, design, data analysis e.t.c"
    }
  ];

  return (
    <Box 
      ref={sectionRef}
      p={{ base: 5, lg: 20 }} 
      bg="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)"
      position="relative"
      overflow="hidden"
      minH="100vh"
    >
      {/* Floating Background Elements */}
      <Box
        position="absolute"
        top="15%"
        left="8%"
        fontSize="16px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.12)"
        animation={`${floatUp} 8s ease-in-out infinite`}
        fontFamily="'Syne', sans-serif"
      >
        FAQ
      </Box>
      <Box
        position="absolute"
        top="25%"
        right="12%"
        fontSize="14px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.12)"
        animation={`${floatUp} 6s ease-in-out infinite 2s`}
        fontFamily="'Syne', sans-serif"
      >
        &lt;answers&gt;
      </Box>
      <Box
        position="absolute"
        bottom="40%"
        left="10%"
        fontSize="18px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.12)"
        animation={`${floatUp} 7s ease-in-out infinite 1s`}
        fontFamily="'Syne', sans-serif"
      >
        QUESTIONS
      </Box>
      <Box
        position="absolute"
        bottom="15%"
        right="15%"
        fontSize="15px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.12)"
        animation={`${floatUp} 9s ease-in-out infinite 3s`}
        fontFamily="'Syne', sans-serif"
      >
        &lt;/help&gt;
      </Box>

      {/* Sparkle Effects */}
      {Array.from({ length: 12 }).map((_, i) => (
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

      <Container maxW="900px" mx="auto">
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <VStack spacing={6} textAlign="center">
            <Text
              as="h2"
              fontFamily="'Syne', sans-serif"
              textTransform="uppercase"
              fontWeight="bold"
              fontSize={{ base: "28px", lg: "40px" }}
              lineHeight="1.1"
              background="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
              backgroundClip="text"
              color="transparent"
              animation={isVisible ? `${slideInUp} 1s ease-out` : 'none'}
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(135deg, #059C02 0%, #0b7f03 100%)',
                borderRadius: '2px',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out 0.5s'
              }}
            >
              Frequently Asked Questions
            </Text>
            <Text
              fontSize={{ base: "14px", lg: "18px" }}
              color="gray.600"
              maxW="600px"
              lineHeight="1.6"
              animation={isVisible ? `${slideInUp} 1s ease-out 0.3s both` : 'none'}
              mt={4}
            >
              Got questions? We've got answers! Find everything you need to know about our programs, schedules, and how to get started.
            </Text>
          </VStack>

          {/* FAQ Accordion */}
          <Box
            animation={isVisible ? `${slideInUp} 1s ease-out 0.6s both` : 'none'}
            mt={4}
          >
            <Accordion.Root defaultValue={["0"]} multiple>
              {faqData.map((faq, index) => (
                <Box
                  key={index}
                  mb={4}
                  opacity={visibleFaqs.includes(index) ? 1 : 0}
                  animation={visibleFaqs.includes(index) ? `${slideInLeft} 0.6s ease-out` : 'none'}
                >
                  <Accordion.Item
                    value={index.toString()}
                    bg="rgba(255, 255, 255, 0.8)"
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(255, 255, 255, 0.3)"
                    borderRadius="16px"
                    overflow="hidden"
                    boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                      transition: 'all 0.3s ease-in-out'
                    }}
                    position="relative"
                  >
                    {/* Shimmer Effect */}
                    <Box
                      position="absolute"
                      top="0"
                      left="-100%"
                      width="100%"
                      height="100%"
                      background="linear-gradient(90deg, transparent, rgba(5, 156, 2, 0.1), transparent)"
                      animation={`${shimmer} 4s ease-in-out infinite ${index * 0.3}s`}
                      pointerEvents="none"
                    />

                    <Accordion.ItemTrigger
                      p={6}
                      fontFamily="'Syne', sans-serif"
                      fontWeight="600"
                      fontSize={{ base: "16px", lg: "18px" }}
                      color="gray.700"
                      bg="transparent"
                      _hover={{ 
                        bg: "rgba(5, 156, 2, 0.05)",
                        color: "green.600",
                        _before: { opacity: 1 }
                      }}
                      transition="all 0.3s ease"
                      textAlign="left"
                      position="relative"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        bottom: '0',
                        width: '4px',
                        background: 'linear-gradient(135deg, #059C02 0%, #0b7f03 100%)',
                        borderRadius: '0 2px 2px 0',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                    >
                      {faq.question}
                      <Accordion.ItemIndicator
                        color="green.500"
                        fontSize="20px"
                        transition="transform 0.3s ease"
                      />
                    </Accordion.ItemTrigger>

                    <Accordion.ItemContent
                      bg="rgba(248, 250, 252, 0.9)"
                    >
                      <Accordion.ItemBody p={6} pt={0}>
                        <Text
                          color="gray.600"
                          fontSize={{ base: "14px", lg: "16px" }}
                          lineHeight="1.6"
                          pl={4}
                          borderLeft="2px solid rgba(5, 156, 2, 0.3)"
                          bg="rgba(255, 255, 255, 0.6)"
                          p={4}
                          borderRadius="8px"
                          backdropFilter="blur(5px)"
                        >
                          {faq.answer}
                        </Text>
                      </Accordion.ItemBody>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                </Box>
              ))}
            </Accordion.Root>
          </Box>

          {/* Bottom CTA */}
          <VStack 
            spacing={6} 
            textAlign="center" 
            mt={12}
            animation={isVisible ? `${slideInUp} 1s ease-out 1.2s both` : 'none'}
          >
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color="gray.600"
              fontWeight="500"
            >
              Still have questions?
            </Text>
            <Box
              as="a"
              href="mailto:support@theproxyacademy.com"
              bg="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
              color="white"
              px={8}
              py={4}
              borderRadius="50px"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "14px", lg: "16px" }}
              textTransform="uppercase"
              letterSpacing="wide"
              cursor="pointer"
              position="relative"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-3px) scale(1.05)',
                boxShadow: '0 15px 30px rgba(5, 156, 2, 0.4)',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <Box
                position="absolute"
                top="0"
                left="-100%"
                width="100%"
                height="100%"
                background="linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)"
                animation={`${shimmer} 2s ease-in-out infinite`}
              />
              <Text position="relative" zIndex={1}>
                Contact Us
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default Faqs;
