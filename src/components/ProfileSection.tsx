import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import CalloutButton from "./CalloutButton";
import { TypeAnimation } from "react-type-animation";
import SearchBar from "./SearchBar";

const ProfileSection = () => {
  const { colorMode } = useColorMode();

  const [isHovered, setIsHovered] = useState(false); // Add this line

  const profileSectionStyles = {
    color: colorMode === "light" ? "black" : "white",
  };

  const linkStyles = {
    color: colorMode === "light" ? "#6B46C1" : "white",
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", md: "center" }}
      justify="center"
      maxHeight={{ base: "auto", md: "75vh", lg: "90vh" }}
      p={{ base: 4, md: 0 }}
      mb={{ base: 8, md: 0, lg: "20px" }} // Adjust bottom margin for smaller screens
      mt={{
        base: 8,
        md: 0,
        lg: "20px", // Set a maximum margin value for larger screens
      }}
      {...profileSectionStyles}
    >
      {/* Left Column */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        flex={{ base: "none", md: 2 }}
        mb={{ base: 4, md: 0 }}
        mt={{ base: 4, sm: 6, md: 6, lg: 6 }}
        w="100%"
        px={2}
      >
        <Box
          width={{ base: "100%", sm: "100%", md: "auto" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            width={{ base: "110px", sm: "130px", md: "180px" }}
            height={{ base: "110px", sm: "130px", md: "180px" }}
            maxWidth={{ base: "110px", sm: "130px", md: "180px" }}
            maxHeight={{ base: "110px", sm: "130px", md: "180px" }}
            borderRadius="50%"
            boxShadow="lg"
            overflow="hidden"
            position="relative"
            mx="auto"
            display="block"
            className="profile-image"
          >
            <Image
              src="/assets/main.jpg"
              alt="Aryan's Profile"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Box>
        <Box
          mt={4}
          display="flex"
          alignItems="center"
          fontWeight="bold"
          fontSize="md"
          bgGradient={
            colorMode === "light"
              ? "linear(to-r, #6B46C1, #205AD5)"
              : "linear(to-r, #A78BFA, #9F7AEA)" // Adjust the color values as needed
          }
          bgClip="text"
        >
          {" "}
          {/* Container for icon and text */}
          <TiLocation
            style={{
              color: "#6B46C1",
            }}
          />{" "}
          {/* Location icon */}
          <Box ml={1}>
            {" "}
            {/* Text for location */}
            London, ON
          </Box>
        </Box>
        <HStack spacing={4} mt={4}>
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            fontSize="xl"
            size="sm"
            as={Link}
            href="https://www.linkedin.com/in/aryan-bedi/"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{
              color: "#604AC4",
              position: "relative",
              top: "-2px",
            }}
          />
          <IconButton
            aria-label="X"
            icon={
              <svg width="20" height="20" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1199.97 0.013916H950.684L599.985 464.527L249.316 0.013916H0.0297852L483.684 630.527L0 1226.99H249.316L599.985 762.527L950.684 1226.99H1199.97L716.316 630.527L1199.97 0.013916ZM872.632 1120.99L599.985 755.527L327.368 1120.99H124.632L599.985 505.527L1075.37 1120.99H872.632Z" fill="currentColor"/>
              </svg>
            }
            fontSize="xl"
            size="sm"
            as={Link}
            href="https://https://x.com/aryan_bedi_"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{
              color: "#604AC4",
              position: "relative",
              top: "-2px",
            }}
          />
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            fontSize="xl"
            size="sm"
            as={Link}
            href="https://github.com/aryanbedi19"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{
              color: "#604AC4",
              position: "relative",
              top: "-2px",
            }}
          />
          <IconButton
            aria-label="Email"
            icon={<FaEnvelope />}
            fontSize="xl"
            size="sm"
            as={Link}
            href="mailto:apbedi19@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{
              color: "#604AC4",
              position: "relative",
              top: "-2px",
            }}
          />
        </HStack>
      </Flex>

      <Box
        flex={{ base: 1, md: 8 }}
        ml={{ base: 0, md: "lg" }}
        mt={{
          base: "lg",
          md: "16px",
          lg: "16px", // Set a maximum margin value for larger screens
        }}
        mb={{
          base: "16px",
          md: "24px",
          lg: "48px", // Set a maximum margin value for larger screens
        }}
      >
        <Heading as="h1" size="xl" mb={4}>
          <Box
            as="span"
            bgGradient={
              colorMode === "light"
                ? "linear(to-r, #6B46C1, #205AD5)"
                : "linear(to-r, #A78BFA, #9F7AEA)" // Adjust the color values as needed
            }
            bgClip="text"
            display="inline"
          >
            Hey, I&apos;m Aryan.
          </Box>
        </Heading>
        <Text fontSize="sm" color="gray.500" mt="5px" mb="2px">
          Welcome to my digital space.
        </Text>
        <Text fontSize="lg">
          <TypeAnimation
            sequence={[
              "I'm currently studying Computer Science at Western University. Previously, I co-founded Blanc AI and am alum at RippleXFellowship, TKS and the Western Accelerator.",
              1000,
            ]}
            wrapper="span"
            speed={80}
            style={{ display: "inline-block" }}
            repeat={0}
          />
        </Text>

        <Text
          mt={4}
          mb={4}
          fontSize="md"
          color={colorMode === "light" ? "#6B46C1" : "#A78BFA"}
        >
          👇
        </Text>

        <SearchBar />

        <Text fontSize="xs" color="gray.500" mt={4}>
          Hint: type &quot;projects&quot; or &quot;blogs&quot; in the search bar to see them all
        </Text>
      </Box>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
        }

        .wave {
          display: inline-block;
          animation-name: wave-animation;
          animation-duration: 1.5s;
          animation-iteration-count: infinite;
        }

        @keyframes wave-animation {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(10deg);
          }
          50% {
            transform: rotate(0deg);
          }
          75% {
            transform: rotate(-10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </Flex>
  );
};

export default ProfileSection;
