import {
  Box,
  Link as ChakraLink,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const MyStorySection = () => {
  const { colorMode } = useColorMode();

  const myStorySectionStyles = {
    color: colorMode === "light" ? "black" : "white",
  };

  const linkStyles = {
    color: colorMode === "light" ? "#9F7AEA" : "white",
    _hover: {
      color: colorMode === "light" ? "purple" : "white",
      position: "relative",
      top: "-2px",
    },
  };

  return (
    <Box py={8} {...myStorySectionStyles}>
      <Box>
        {/* <Heading as="h1" size="lg" mb={4}>
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
            My Story
          </Box>
        </Heading>
        
        <Text fontSize="sm" color="gray.500" mt={-3} mb={7}>
          🪄 where it all began...
        </Text>
        */}
      <Text fontSize="md" mb={4}>
        I'm a 19-year-old Computer Science student at Western University, based in Toronto. I'm interested in how tech, startups, and real estate can come together in new ways.
      </Text>

      <Text fontSize="md" mb={4}>
        This past year, I co-built my first startup,{" "}
        <ChakraLink href="https://www.blancai.ca" isExternal color="#9F7AEA" fontWeight="bold">
          Blanc AI
        </ChakraLink>
        , a tool that helped construction teams automate quoting and estimating. We{" "}
        <ChakraLink href="https://entrepreneurship.uwo.ca/news/2025/04/Accelerator-Profile-Aryan-Bedi-of-Blanc-AI/" isExternal color="#9F7AEA" fontWeight="bold">
          placed in Western’s Accelerator
        </ChakraLink>
        , joined the{" "}
        <ChakraLink href="https://www.fellowship.rippleventures.com/" isExternal color="#9F7AEA" fontWeight="bold">
          Ripple Ventures Fellowship
        </ChakraLink>
        , and learned a lot about building, listening to users, and when to pivot.
      </Text>

      <Text fontSize="md" mb={4}>
        Right now, I'm working on my real estate license, building some side projects, and getting back into basketball after some health setbacks.
      </Text>

      <Text fontSize="md" mb={4}>
        I wrote a short reflection on the Blanc AI journey —{" "}
        <ChakraLink href="https://www.blancai.ca" isExternal color="#9F7AEA" fontWeight="bold">
          check it out here.
        </ChakraLink>
      </Text>
      </Box>
    </Box>
  );
};

export default MyStorySection;
