import React, { useState, useEffect, useRef } from "react";
import { Box, VStack, Text, SimpleGrid, Container, Link as ChakraLink, Wrap, WrapItem, Icon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCodeMerge, faChartSimple, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "@emotion/react";
import { FaDownload, FaRegCalendarAlt, FaWallet } from "react-icons/fa";

// Keyframes for animations
const floatUp = keyframes`
  0% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-20px) rotate(180deg); opacity: 0.6; }
  100% { transform: translateY(0px) rotate(360deg); opacity: 0.3; }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(5, 156, 2, 0.3); }
  50% { box-shadow: 0 0 40px rgba(5, 156, 2, 0.6); }
`;

const sparkle = keyframes`
  0%, 100% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1); opacity: 1; }
`;

const slideInLeft = keyframes`
  0% { transform: translateX(-100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const slideInRight = keyframes`
  0% { transform: translateX(100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const slideInUp = keyframes`
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

function OurProgrammes() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger card animations
            const cards = [0, 1, 2, 3];
            cards.forEach((cardIndex) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, cardIndex]);
              }, cardIndex * 200);
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

  const programmes = [
    {
      icon: faCode,
      title: "Introduction to Coding",
      description: "Designed for beginners, this engaging 3-months programme teaches the fundamentals of coding through fun, interactive lessons. Using kid-friendly programming languages and tools, students will create their own projects and develop essential problem-solving skills.",
      gradient: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
      iconColor: "#059C02",
      textColor: "green.600",
      animation: slideInLeft,
      glowColor: "rgba(5, 156, 2, 0.3)"
    },
    {
      icon: faCodeMerge,
      title: "Web Development",
      description: "Students learn to create stunning websites from scratch, mastering essential languages like HTML, CSS, and JavaScript. Through hands-on projects, participants will develop the skills to design, build, and launch their own web pages, gaining a solid foundation in both front-end and back-end development.",
      gradient: "linear-gradient(135deg, #1a202c 0%, #2d3748 100%)",
      iconColor: "#FFFFFF",
      textColor: "white",
      animation: slideInRight,
      glowColor: "rgba(255, 255, 255, 0.3)"
    },
    {
      icon: faChartSimple,
      title: "Data Analysis",
      description: "Designed to equip young learners with skills in data interpretation and decision-making. Through engaging, hands-on projects, students will explore the fundamentals of data collection, visualization, and analysis using industry-standard tools.",
      gradient: "linear-gradient(135deg, #059C02 0%, #0b7f03 100%)",
      iconColor: "#FFFFFF",
      textColor: "white",
      animation: slideInLeft,
      glowColor: "rgba(5, 156, 2, 0.3)"
    },
    {
      icon: faPenNib,
      title: "Digital Design",
      description: "This engaging array of courses introduces young learners to the exciting world of digital arts, including graphic design, animation, and product design. Whether it's creating eye-catching graphics, dynamic animations, or innovative digital projects, our Digital Design programme nurtures artistic talent and technical proficiency.",
      gradient: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
      iconColor: "#059C02",
      textColor: "green.600",
      animation: slideInRight,
      glowColor: "rgba(5, 156, 2, 0.3)"
    }
  ];

  const resourceLinks = [
    {
      title: "Curriculum Overview",
      description: "Age groups, module breakdown and learning outcomes.",
      href: "/assets/resources/curriculum-overview.pdf",
      icon: FaDownload,
    },
    {
      title: "Sample Weekly Timetable",
      description: "See how we blend live sessions, practice time and mentoring.",
      href: "/assets/resources/sample-timetable.pdf",
      icon: FaRegCalendarAlt,
    },
    {
      title: "Tuition & Payment Guide",
      description: "Tuition tiers, instalment options and available discounts.",
      href: "/assets/resources/tuition-guide.pdf",
      icon: FaWallet,
    },
  ];

  return (
    <Box 
      ref={sectionRef}
      p={{ base: 5, lg: 20 }} 
      bg="linear-gradient(135deg, #DFF8D5 0%, #f0fdf4 50%, #DFF8D5 100%)"
      position="relative"
      overflow="hidden"
      id="our-programmes"
    >
      {/* Floating Background Elements */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        fontSize="14px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.15)"
        animation={`${floatUp} 6s ease-in-out infinite`}
        fontFamily="'Syne', sans-serif"
      >
        &lt;skills&gt;
      </Box>
      <Box
        position="absolute"
        top="20%"
        right="10%"
        fontSize="12px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.15)"
        animation={`${floatUp} 8s ease-in-out infinite 2s`}
        fontFamily="'Syne', sans-serif"
      >
        CREATIVITY
      </Box>
      <Box
        position="absolute"
        bottom="30%"
        left="15%"
        fontSize="16px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.15)"
        animation={`${floatUp} 7s ease-in-out infinite 1s`}
        fontFamily="'Syne', sans-serif"
      >
        INNOVATION
      </Box>
      <Box
        position="absolute"
        bottom="10%"
        right="20%"
        fontSize="14px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.15)"
        animation={`${floatUp} 5s ease-in-out infinite 3s`}
        fontFamily="'Syne', sans-serif"
      >
        &lt;/learning&gt;
      </Box>

      {/* Sparkle Effects */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Box
          key={i}
          position="absolute"
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          width="4px"
          height="4px"
          borderRadius="50%"
          bg="rgba(5, 156, 2, 0.6)"
          animation={`${sparkle} 3s ease-in-out infinite ${Math.random() * 3}s`}
        />
      ))}

      <Container maxW="1440px">
        <VStack textAlign="center" spacing={4}>
          <Text
            fontFamily="'Syne', sans-serif"
            textTransform="uppercase"
            fontSize={{ base: "28px", lg: "36px" }}
            fontWeight="bold"
            lineHeight="1.1"
            background="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
            backgroundClip="text"
            color="transparent"
            animation={isVisible ? `${slideInUp} 1s ease-out` : 'none'}
            position="relative"
            _after={{
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(135deg, #059C02 0%, #0b7f03 100%)',
              borderRadius: '2px',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out 0.5s'
            }}
          >
            Our Programmes
          </Text>
          <Text
            w={{ base: "full", lg: "60%" }}
            fontSize={{ base: "14px", lg: "18px" }}
            mx="auto"
            color="gray.700"
            lineHeight="1.6"
            animation={isVisible ? `${slideInUp} 1s ease-out 0.3s both` : 'none'}
            mt={4}
          >
            The Proxy Academy offers a diverse range of tech programmes designed
            to inspire and empower young minds. Our courses are hands-on,
            interactive, and tailored to various age groups and skill levels.
            Discover the perfect path for your child's tech journey today!
          </Text>
        </VStack>
        
        <Wrap
          spacing={{ base: 4, md: 6 }}
          mt={10}
          justify="center"
          id="programme-resources"
        >
          {resourceLinks.map((resource) => (
            <WrapItem key={resource.title}>
              <Box
                maxW="280px"
                bg="white"
                borderRadius="16px"
                p={5}
                boxShadow="0 18px 40px rgba(15, 23, 42, 0.08)"
                border="1px solid rgba(226, 232, 240, 0.6)"
                display="flex"
                flexDirection="column"
                gap={3}
              >
                <Box
                  w="48px"
                  h="48px"
                  borderRadius="12px"
                  bg="rgba(5, 156, 2, 0.12)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={resource.icon} boxSize={6} color="green.600" />
                </Box>
                <Text fontWeight="bold" fontSize="lg" color="gray.800">
                  {resource.title}
                </Text>
                <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                  {resource.description}
                </Text>
                <ChakraLink
                  href={resource.href}
                  download
                  color="green.600"
                  fontWeight="semibold"
                  fontSize="sm"
                  _hover={{ color: "green.700", textDecoration: "underline" }}
                >
                  Download PDF
                </ChakraLink>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
        
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={6}
          mt={16}
        >
          {programmes.map((programme, index) => (
            <Box
              key={index}
              position="relative"
              opacity={visibleCards.includes(index) ? 1 : 0}
              animation={visibleCards.includes(index) ? `${programme.animation} 0.8s ease-out` : 'none'}
              _hover={{
                transform: 'translateY(-10px) scale(1.02)',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <Box
                background={programme.gradient}
                w="full"
                h={{base:"280px", lg:"380px"}}
                borderRadius="20px"
                p={6}
                position="relative"
                overflow="hidden"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                boxShadow="0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
                _hover={{
                  boxShadow: `0 25px 50px rgba(0, 0, 0, 0.15), 0 0 30px ${programme.glowColor}`,
                  transform: 'translateY(-5px)',
                  transition: 'all 0.3s ease-in-out'
                }}
                cursor="pointer"
              >
                {/* Shimmer Effect */}
                <Box
                  position="absolute"
                  top="0"
                  left="-100%"
                  width="100%"
                  height="100%"
                  background="linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)"
                  animation={`${shimmer} 3s ease-in-out infinite ${index * 0.5}s`}
                />

                {/* Card Content */}
                <VStack spacing={4} height="100%" justify="space-between">
                  <Box textAlign="center">
                    <Box
                      p={4}
                      borderRadius="50%"
                      bg="rgba(255, 255, 255, 0.1)"
                      backdropFilter="blur(10px)"
                      border="1px solid rgba(255, 255, 255, 0.2)"
                      display="inline-block"
                      mb={4}
                      _hover={{
                        transform: 'rotate(360deg) scale(1.1)',
                        transition: 'all 0.5s ease-in-out'
                      }}
                    >
                      <FontAwesomeIcon
                        icon={programme.icon}
                        style={{
                          color: programme.iconColor,
                          fontSize: "28px"
                        }}
                      />
                    </Box>
                    <Text
                      fontWeight="bold"
                      fontFamily="'Syne', sans-serif"
                      color={programme.textColor}
                      fontSize={{ base: "16px", xl: "20px" }}
                      textTransform="uppercase"
                      letterSpacing="wide"
                      mb={3}
                    >
                      {programme.title}
                    </Text>
                  </Box>
                  <Text
                    fontSize={{ base: "12px", xl: "14px" }}
                    color={programme.textColor}
                    lineHeight="1.5"
                    textAlign="center"
                    opacity={0.9}
                  >
                    {programme.description}
                  </Text>
                </VStack>

                {/* Floating Badge */}
                <Box
                  position="absolute"
                  top="15px"
                  right="15px"
                  bg="rgba(5, 156, 2, 0.8)"
                  color="white"
                  px={3}
                  py={1}
                  borderRadius="12px"
                  fontSize="10px"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="wide"
                  animation={`${floatUp} 4s ease-in-out infinite ${index * 0.3}s`}
                  fontFamily="'Syne', sans-serif"
                >
                  Popular
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* Call to Action */}
        {/* <Center mt={12}>
          <Box
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
            animation={isVisible ? `${slideInUp} 1s ease-out 1s both` : 'none'}
            _hover={{
              transform: 'translateY(-3px) scale(1.05)',
              boxShadow: '0 15px 30px rgba(5, 156, 2, 0.4)',
              transition: 'all 0.3s ease-in-out'
            }}
            position="relative"
            overflow="hidden"
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
              Explore All Programmes
            </Text>
          </Box>
        </Center> */}
      </Container>
    </Box>
  );
}

export default OurProgrammes;
