import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Text, HStack, Link, Icon, Flex, VStack, SimpleGrid, Input, Button } from "@chakra-ui/react";
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "@emotion/react";
import Logo from "../assets/icon.svg";

const quickLinks = [
  { name: "About Us", href: "#why-us" },
  { name: "Programs", href: "#our-programmes" },
  { name: "Bootcamp", href: "/summer-bootcamp" },
  { name: "Contact", href: "#" },
];

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

const slideInUp = keyframes`
  0% { transform: translateY(60px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const slideInLeft = keyframes`
  0% { transform: translateX(-60px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const slideInRight = keyframes`
  0% { transform: translateX(60px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const sparkle = keyframes`
  0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { transform: scale(1) rotate(180deg); opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const socialBounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

export default function Component() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger section animations
            const sections = ['logo', 'contact', 'social', 'copyright'];
            sections.forEach((section, index) => {
              setTimeout(() => {
                setVisibleSections(prev => [...prev, section]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <Box 
      as="footer" 
      ref={footerRef}
      bg="linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
      position="relative"
      overflow="hidden"
      // mt={20}
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
        &lt;connect&gt;
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
        CONTACT
      </Box>
      <Box
        position="absolute"
        bottom="30%"
        left="15%"
        fontSize="12px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.15)"
        animation={`${floatUp} 7s ease-in-out infinite 1s`}
        fontFamily="'Syne', sans-serif"
      >
        SUPPORT
      </Box>
      <Box
        position="absolute"
        bottom="15%"
        right="20%"
        fontSize="15px"
        fontWeight="bold"
        color="rgba(5, 156, 2, 0.15)"
        animation={`${floatUp} 9s ease-in-out infinite 3s`}
        fontFamily="'Syne', sans-serif"
      >
        &lt;/footer&gt;
      </Box>

      {/* Sparkle Effects */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Box
          key={i}
          position="absolute"
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          width="2px"
          height="2px"
          borderRadius="50%"
          bg="rgba(5, 156, 2, 0.6)"
          animation={`${sparkle} 4s ease-in-out infinite ${Math.random() * 4}s`}
        />
      ))}

      <Container maxW="7xl" py={16} px={{ base: 5, lg: 20 }} mx="auto">
        <VStack spacing={12} align="stretch">
          {/* Header Section */}
          <VStack 
            spacing={8}
            opacity={visibleSections.includes('logo') ? 1 : 0}
            animation={visibleSections.includes('logo') ? `${slideInUp} 1s ease-out` : 'none'}
          >
            <HStack spacing={4} justify="center">
              <Box
                as="img"
                src={Logo}
                alt="The Proxy Academy Logo"
                h={12}
                filter="drop-shadow(0 4px 8px rgba(5, 156, 2, 0.3))"
                animation={`${pulse} 3s ease-in-out infinite`}
              />
              <Text
                textTransform="uppercase"
                fontFamily="'Syne', sans-serif"
                fontSize={{ base: "24px", lg: "32px" }}
                fontWeight="bold"
                background="linear-gradient(135deg, #059C02 0%, #0b7f03 100%)"
                backgroundClip="text"
                color="transparent"
                letterSpacing="wide"
              >
                The Proxy Academy
              </Text>
            </HStack>
            <Text
              textAlign={{base: "left", md: "center"}}
              fontSize={{ base: "14px", lg: "16px" }}
              color="gray.300"
              maxW="600px"
              lineHeight="1.6"
            >
              Empowering the next generation of tech innovators with world-class education and hands-on learning experiences.
            </Text>
          </VStack>

          {/* Main Content Grid */}
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }} 
            gap={8}
            opacity={visibleSections.includes('contact') ? 1 : 0}
            animation={visibleSections.includes('contact') ? `${slideInUp} 1s ease-out 0.3s both` : 'none'}
            mt={8}
          >
            {/* Contact Information */}
            <VStack align="start" spacing={6} mt={6}>
              <Text
                fontFamily="'Syne', sans-serif"
                fontSize="18px"
                fontWeight="bold"
                color="white"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Get in Touch
              </Text>
              <VStack align="start" spacing={4}>
                <HStack spacing={3}>
                  <Box
                    p={2}
                    borderRadius="8px"
                    bg="rgba(5, 156, 2, 0.2)"
                    color="green.400"
                  >
                    <FontAwesomeIcon icon={faPhone} size="sm" />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Text fontSize="14px" color="gray.300">
                      +2348174453349
                    </Text>
                    <Text fontSize="14px" color="gray.300">
                      +2349152811014
                    </Text>
                  </VStack>
                </HStack>
                <HStack spacing={3}>
                  <Box
                    p={2}
                    borderRadius="8px"
                    bg="rgba(5, 156, 2, 0.2)"
                    color="green.400"
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="sm" />
                  </Box>
                  <Text fontSize="14px" color="gray.300">
                    support@theproxyacademy.com
                  </Text>
                </HStack>
              </VStack>
            </VStack>

            {/* Quick Links */}
            <VStack align="start" spacing={6}>
              <Text
                fontFamily="'Syne', sans-serif"
                fontSize="18px"
                fontWeight="bold"
                color="white"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Quick Links
              </Text>
              <VStack align="start" spacing={3}>
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    fontSize="14px"
                    color="gray.300"
                    _hover={{
                      color: "green.400",
                      transform: 'translateX(5px)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </VStack>
            </VStack>

            {/* Programs */}
            <VStack align="start" spacing={6}>
              <Text
                fontFamily="'Syne', sans-serif"
                fontSize="18px"
                fontWeight="bold"
                color="white"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Programmes
              </Text>
              <VStack align="start" spacing={3}>
                {['Web Development', 'Data Analysis', 'Digital Design', 'Cyber Security'].map((program, index) => (
                  <Link
                    key={index}
                    href="#"
                    fontSize="14px"
                    color="gray.300"
                    _hover={{
                      color: "green.400",
                      transform: 'translateX(5px)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {program}
                  </Link>
                ))}
              </VStack>
            </VStack>
          </SimpleGrid>

          {/* Social Media Section */}
          <VStack 
            spacing={8}
            opacity={visibleSections.includes('social') ? 1 : 0}
            animation={visibleSections.includes('social') ? `${slideInUp} 1s ease-out 0.6s both` : 'none'}
          >
            <Box h="1px" bg="rgba(255, 255, 255, 0.1)" w="full" />
            <VStack spacing={6}>
              <Text
                fontFamily="'Syne', sans-serif"
                fontSize="20px"
                fontWeight="bold"
                color="white"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Connect With Us
              </Text>
              <HStack spacing={6}>
                {[
                  { icon: BsFacebook, href: "https://www.facebook.com/theproxyacademy", color: "#1877F2" },
                  { icon: BsInstagram, href: "https://www.instagram.com/theproxyacademy/", color: "#E4405F" },
                  { icon: BsTwitter, href: "https://x.com/theproxyacademy", color: "#1DA1F2" },
                  { icon: BsLinkedin, href: "https://www.linkedin.com/company/the-proxy-academy/", color: "#0A66C2" }
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    isExternal
                    _hover={{ transform: 'scale(1.1)' }}
                    transition="all 0.3s ease"
                  >
                    <Box
                      p={4}
                      borderRadius="full"
                      bg="rgba(255, 255, 255, 0.1)"
                      backdropFilter="blur(10px)"
                      border="1px solid rgba(255, 255, 255, 0.2)"
                      _hover={{
                        bg: social.color,
                        transform: 'translateY(-3px)',
                        boxShadow: `0 8px 25px ${social.color}40`,
                        animation: `${socialBounce} 0.6s ease-in-out`
                      }}
                    >
                      <Icon as={social.icon} boxSize={6} color="white" />
                    </Box>
                  </Link>
                ))}
              </HStack>
            </VStack>
          </VStack>

          {/* Copyright */}
          <VStack
            spacing={4}
            pt={8}
            opacity={visibleSections.includes('copyright') ? 1 : 0}
            animation={visibleSections.includes('copyright') ? `${slideInUp} 1s ease-out 0.9s both` : 'none'}
          >
            <Box h="1px" bg="rgba(255, 255, 255, 0.1)" w="full" />
            <Text
              textAlign="center"
              fontSize="14px"
              color="gray.400"
              fontFamily="'Syne', sans-serif"
            >
              © 2025 The Proxy Academy Ltd. All rights reserved. | Empowering Future Tech Leaders
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
