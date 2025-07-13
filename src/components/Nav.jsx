import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Button, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/icon.svg";

function Nav() {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass("fixed")
        : setStickyClass("relative");
    }
  };

  return (
    <Box
      position={stickyClass}
      top={stickyClass === "fixed" ? 0 : "auto"}
      left={stickyClass === "fixed" ? 0 : "auto"}
      zIndex={10}
      w="full"
      bg={stickyClass === "fixed" ? "white" : "transparent"}
      bgBlendMode={stickyClass === "fixed" ? "multiply" : "normal"}
      backdropFilter={stickyClass === "fixed" ? "blur(16px)" : "none"}
      shadow={stickyClass === "fixed" ? "md" : "none"}
      transition="all 0.5s ease-in-out"
    >
      <Container maxW="1440px" px={{ base: 10, lg: 20 }} py={2}>
        <Flex justify="space-between" align="center">
          <Link to="/">
            <Image
              src={Logo}
              alt="Proxy Academy's Logo icon"
              h="50px"
            />
          </Link>
          <Button
            as={Link}
            to="/register"
            px={8}
            py={3}
            textTransform="uppercase"
            fontWeight="semibold"
            fontSize="xs"
            borderRadius="full"
            bg="green.600"
            color="white"
            _hover={{
              shadow: "md",
              transform: "scale(1.1)",
            }}
            transition="all 0.3s ease-linear"
          >
            Enrol
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default Nav;
