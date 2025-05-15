import { Box, Heading, Text } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Box>
      <Heading as="h1" size="lg" mb={4}>
        <Box
          as="span"
          bgGradient="linear(to-r, #6B46C1, #205AD5)"
          bgClip="text"
          display="inline"
        >
          Now
        </Box>
      </Heading>
      <Text fontSize="sm" color="gray.500" mt={-3} mb={7}>
        🥊 main focus...
      </Text>
      <ul style={{ paddingLeft: "1.5rem" }}>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </li>
      </ul>
    </Box>
  );
};

export default AboutSection;
