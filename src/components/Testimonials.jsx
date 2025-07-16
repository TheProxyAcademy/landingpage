import React from "react";
import { Box, Text, Container, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  let settings = {
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    padding: "50px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container maxW="1440px" p={{ base: 5, lg: 20 }}>
      <Text
        as="h2"
        mb={3}
        fontSize={{ base: "lg", lg: "xl" }}
        fontFamily="'Syne', sans-serif"
        textTransform="uppercase"
        fontWeight="bold"
        color="gray.800"
      >
        Testimonials
      </Text>
      <Slider {...settings}>
        <Box px={2}>
          <Box bg="gray.100" minH="48" p={5} borderRadius="md">
            <Text
              color="dark"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "14px", lg: "18px" }}
              mb={2}
            >
              Taiwo Sunday, Nigeria
            </Text>
            <Text fontSize={{ base: "14px", lg: "16px" }}>
              "My second daughter said she is interested after hearing the
              introduction, initially she wasn't interested. But after seeing the
              scratch software, it tallies with what she wants."
            </Text>
          </Box>
        </Box>
        
        <Box px={2}>
          <Box bg="gray.100" minH="48" p={5} borderRadius="md">
            <Text
              color="dark"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "14px", lg: "18px" }}
              mb={2}
            >
              Marcellin Bantek, Ireland
            </Text>
            <Text fontSize={{ base: "14px", lg: "16px" }}>
              "Apart from keeping her busy and occupied, it stimulates some
              critical thinking and curiosity in her that I never thought she had.
              Learning to code has has really helped Emmanuella a lot."
            </Text>
          </Box>
        </Box>
        
        <Box px={2}>
          <Box bg="gray.100" minH="48" p={5} borderRadius="md">
            <Text
              color="dark"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "14px", lg: "18px" }}
              mb={2}
            >
              Taiwo Bukola, Nigeria
            </Text>
            <Text fontSize={{ base: "14px", lg: "16px" }}>
              "The tutor teaches excellently, If my child doesn't understand she
              explains again. My child also loves her classes, she always looks
              forward to them."
            </Text>
          </Box>
        </Box>
        
        <Box px={2}>
          <Box bg="gray.100" minH="48" p={5} borderRadius="md">
            <Text
              color="dark"
              fontFamily="'Syne', sans-serif"
              fontWeight="bold"
              fontSize={{ base: "14px", lg: "18px" }}
              mb={2}
            >
              Motunrayo Da-costa, Nigeria
            </Text>
            <Text fontSize={{ base: "14px", lg: "16px" }}>
              "The instructor is great. I was even scared my son won't be
              interested but i wanted him to try various fields. After the class he
              liked it and he was able to follow through and he is happy."
            </Text>
          </Box>
        </Box>
      </Slider>
    </Container>
  );
}

export default Testimonials;
