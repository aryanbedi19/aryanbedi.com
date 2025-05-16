import { Box, Flex, Heading, Link, Text, useColorMode } from "@chakra-ui/react";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Heading as="h1" size="lg" mb={4} mt={8}>
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
          Featured Stuff
        </Box>
      </Heading>
      <Text fontSize="sm" color="gray.500" mt={-2} mb="2px">
        some things ive done over the years.
      </Text>
      <Flex direction="column" mt={10} w="100%">
        {/* First Row */}
        <Flex direction={{ base: "column", md: "row" }} mb={1} w="100%">
          <Box flex="1" mb={6} mr={{ base: 0, md: 6 }} w="100%" maxW="350px" mx="auto">
            <ProjectCard
              title="Blanc AI"
              description="Quoting/Bidding Automation for Construction Enterprises."
              demoUrl="https://blancai.ca"
              tag="Active"
            />
          </Box>
          <Box flex="1" mb={{ base: 6, md: 0 }} w="100%" maxW="350px" mx="auto">
            <ProjectCard
              title="Entrepreneur Profile"
              description="Article on what drives me to be an entrepreneur."
              demoUrl="https://entrepreneurship.uwo.ca/news/2025/04/Accelerator-Profile-Aryan-Bedi-of-Blanc-AI/"
              tag="Featured"
            />
          </Box>
        </Flex>
      </Flex>
      <Flex justify="flex-end" mb={8}>
        <Link color="gray.500" href="https://github.com/aryanbedi19">
          [ View All Projects ]
        </Link>
      </Flex>
    </Box>
  );
};

export default Projects;
