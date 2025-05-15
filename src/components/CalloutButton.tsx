import {
  Box,
  Flex,
  Stack,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";

interface CalloutButtonProps {
  link: string;
  text: string;
}

const CalloutButton: React.FC<CalloutButtonProps> = ({ link, text }) => {
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isHovered, setIsHovered] = useState(false);

  const buttonBgColor = colorMode === "light" ? "#6B46C1" : "#A78BFA";
  const textColor = colorMode === "light" ? "white" : "purple.800"; // Change to dark green color

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Box
        bg={buttonBgColor}
        color={textColor}
        py={3}
        textAlign="center"
        fontSize={{ base: "sm", md: "md" }}
        fontWeight="bold"
        borderRadius="10px"
        mt={4} // Adjust margin-top as needed
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition="transform 0.2s ease-in-out"
        transform={isHovered ? "scale(1.05)" : "scale(1)"}
      >
        <Box
          position="absolute"
          top="4"
          right="2"
          fontSize="xs"
          color="white"
          zIndex="2"
        >
          <FaExternalLinkAlt />
        </Box>
        {isMobile ? (
          <Stack spacing={1} align="center" justify="center">
            <Flex align="center">
              <Box as={FiAlertCircle} size="1.5em" mr={1} />
              <Box as="span">{text}</Box>
            </Flex>
          </Stack>
        ) : (
          <Flex align="center" justify="center">
            <Box as={FiAlertCircle} mr={1} />
            {text} <Box as="span" ml={1}></Box>
          </Flex>
        )}
      </Box>
    </a>
  );
};

export default CalloutButton;
