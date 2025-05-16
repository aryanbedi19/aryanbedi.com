import theme from "@/styles/theme";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import UpdateBanner from "./UpdateBanner";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleToggleColorMode = () => {
    if (colorMode === "light") {
      document.body.style.backgroundImage =
        "url('/assets/background-dark.png')";
    } else {
      document.body.style.backgroundImage =
        "url('/assets/background-light.png')";
    }
    toggleColorMode();
  };

  // // Set initial background image based on initial colorMode
  // useEffect(() => {
  //   if (colorMode === "light") {
  //     document.body.style.backgroundImage =
  //       "url('/assets/background-light.png')";
  //   } else {
  //     document.body.style.backgroundImage =
  //       "url('/assets/background-dark.png')";
  //   }
  // }, []);

  const headerBg =
    colorMode === "light"
      ? "rgba(255, 255, 255, 0.8)" // Semi-transparent white
      : "rgba(9, 14, 17, 0.8)"; // Semi-transparent dark

  const headerStyles = {
    bg: headerBg,
    color: colorMode === "light" ? "black" : "white",
    borderRadius: "10px",
    _hover: {
      bg: colorMode === "light" ? "white" : "#020301",
    },
  };

  const navLinks = [
    { label: "About", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Projects", href: "/projects" },
    { label: "Writings", href: "/writings" },
    { label: "Photos", href: "/photos" },
  ];

  return (
    <Box
      mt={10}
      textAlign="center"
      fontSize="sm"
      fontWeight="bold"
      position="sticky"
      top={0}
      zIndex="sticky"
      w="100%"
      {...headerStyles}
    >
      <Flex
        as="header"
        align="center"
        p={4}
        bg={headerStyles.bg}
        boxShadow="md"
        borderRadius="10px"
        w="100%"
      >
        <Flex direction="row" alignItems="center">
          {/* Your logo or brand */}
          <Link
            as={NextLink}
            href="/"
            fontSize={{ base: "lg", md: "xl" }} // Define font sizes for different screen sizes
            fontWeight="bold"
            _hover={{
              textDecoration: "none",
            }}
          >
            Aryan Bedi
          </Link>
        </Flex>
        <Spacer />
        {/* Desktop Nav Links */}
        <Box display={{ base: "none", md: "block" }}>
          <Flex alignItems="center" gap={6}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                as={NextLink}
                href={link.href}
                fontWeight="bold"
                _hover={{ color: "#9F7AEA", transform: "translateY(-2px)" }}
                display="flex"
                alignItems="center"
              >
                {link.label}
              </Link>
            ))}
          </Flex>
        </Box>
        {/* Mobile Hamburger */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            aria-label="Open menu"
            icon={<FiMenu />}
            variant="ghost"
            onClick={onOpen}
            fontSize="2xl"
            ml={2}
          />
        </Box>
        <Box ml={4}>
          {/* Toggle dark mode */}
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={
              colorMode === "light" ? (
                <FiMoon color="#6B46C1" fill="#6B46C1" />
              ) : (
                <FiSun color="#6B46C1" fill="#6B46C1" />
              )
            }
            onClick={handleToggleColorMode}
          />
        </Box>
      </Flex>
      {/* Mobile Drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent bg={colorMode === "light" ? "white" : "#23232a"} boxShadow="2xl">
          <DrawerBody p={0} display="flex" flexDirection="column" h="100%">
            <Flex align="center" justify="space-between" p={6} borderBottom="1px solid" borderColor={colorMode === "light" ? "gray.200" : "gray.700"}>
              <Heading as="h3" size="md" color={colorMode === "light" ? "#6B46C1" : "#A78BFA"} letterSpacing="wide">
                Aryan Bedi
              </Heading>
              <IconButton
                aria-label="Close menu"
                icon={<FiX />}
                variant="ghost"
                onClick={onClose}
                fontSize="2xl"
              />
            </Flex>
            <VStack spacing={8} align="flex-start" justify="center" flex="1" px={8} py={10}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  as={NextLink}
                  href={link.href}
                  fontWeight="bold"
                  fontSize="2xl"
                  color={colorMode === "light" ? "#2D3748" : "white"}
                  _hover={{ color: "#9F7AEA", textDecoration: "underline" }}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
