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
  // Bootcamp season is over, so hide the section for now.
  return null;
}

export default Bootcamp;
