import { Box, Heading, Text, SimpleGrid, Image, Button, HStack, useColorMode } from "@chakra-ui/react";

const projects = [
  {
    title: "Blanc AI Quoting Tool",
    year: "2025",
    description: "Built a SaaS solution for contractors that automatically sources materials and generates quotes. Used by contractors for 5000+ quotes.",
    image: "/assets/blanc.png",
    viewLink: "https://www.youtube.com/watch?v=d_4CJmvCbWo",
    tryLink: "https://blancai.ca",
  },
];

const Projects = () => {
  const { colorMode } = useColorMode();
  return (
    <Box maxW="1200px" mx="auto" px={4} py={10}>
      <Heading as="h1" size="lg" mb={2} color={colorMode === "light" ? "#2D3748" : "white"}>
        Projects
      </Heading>
      <Text mb={8} color={colorMode === "light" ? "gray.600" : "gray.300"}>
        A collection of my work spanning hardware, software, and design. Each project represents a unique challenge and solution.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {projects.map((project, idx) => (
          <Box
            key={idx}
            bg={colorMode === "light" ? "white" : "#18181b"}
            borderRadius="lg"
            overflow="hidden"
            boxShadow={colorMode === "light" ? "md" : "dark-lg"}
            transition="box-shadow 0.2s, transform 0.2s"
            _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
            display="flex"
            flexDirection="column"
          >
            <Image src={project.image} alt={project.title} w="100%" h="220px" objectFit="cover" bg={colorMode === "light" ? "gray.100" : "gray.800"} />
            <Box p={6} flex="1">
              <Heading as="h2" size="md" mb={1} color={colorMode === "light" ? "#2D3748" : "white"} fontWeight="bold">
                {project.title} <Text as="span" color={colorMode === "light" ? "gray.500" : "gray.300"} fontWeight="normal">— {project.year}</Text>
              </Heading>
              <Text fontSize="sm" color={colorMode === "light" ? "gray.600" : "gray.400"} mb={3}>
                {project.description}
              </Text>
              <HStack spacing={3} mt={4}>
                <Button as="a" href={project.viewLink} size="sm" colorScheme={colorMode === "light" ? "purple" : undefined} variant={colorMode === "light" ? "outline" : "ghost"} borderColor={colorMode === "light" ? "purple.500" : "whiteAlpha.400"} color={colorMode === "light" ? "purple.600" : "white"} _hover={{ bg: colorMode === "light" ? "purple.50" : "whiteAlpha.200" }} target="_blank" rel="noopener noreferrer">
                  View Project
                </Button>
                <Button as="a" href={project.tryLink} size="sm" colorScheme="purple" bg={colorMode === "light" ? "purple.500" : "purple.400"} color={colorMode === "light" ? "white" : "black"} _hover={{ bg: colorMode === "light" ? "purple.600" : "purple.300" }} target="_blank" rel="noopener noreferrer">
                  Try Now
                </Button>
              </HStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects; 