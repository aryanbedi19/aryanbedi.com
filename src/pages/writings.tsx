import { Box, Heading, Text, SimpleGrid, LinkBox, LinkOverlay, HStack, Image, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";

interface Article {
  title: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  link: string;
}

const articles: Article[] = [
  /*{
    title: "My SYDE 1A Experience",
    date: "March 12, 2025",
    readTime: "10 min read",
    summary: "Reflecting on my first semester in the Systems Design Engineering program at the University of Waterloo, discussing challenges, projects, and lessons learned.",
    image: "/assets/main.jpg",
    link: "#",
  },*/
];

const Writings = () => {
  const { colorMode } = useColorMode();
  return (
    <Box maxW="900px" mx="auto" px={4} py={10}>
      <Heading as="h1" size="lg" mb={2} color={colorMode === "light" ? "#2D3748" : "white"}>
        Blogs
      </Heading>
      <Text mb={8} color={colorMode === "light" ? "gray.600" : "gray.300"}>
        Thoughts, ideas, and reflections on technology, software development, real estate and my personal journey through life.
      </Text>
      <Text mb={8} color={colorMode === "light" ? "gray.600" : "gray.300"}>
        Coming soon ...
      </Text>
      <SimpleGrid columns={1} spacing={6}>
        {articles.map((article, idx) => (
          <LinkBox
            as="article"
            key={idx}
            bg={colorMode === "light" ? "white" : "#18181b"}
            borderRadius="lg"
            boxShadow={colorMode === "light" ? "md" : "dark-lg"}
            p={6}
            display="flex"
            alignItems="center"
            transition="box-shadow 0.2s, transform 0.2s"
            _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
          >
            <Box flex="1">
              <HStack spacing={3} mb={1} alignItems="center">
                <Text fontSize="xs" color={colorMode === "light" ? "gray.500" : "gray.400"}>{article.date}</Text>
                <Text fontSize="xs" color="red.400">•</Text>
                <Text fontSize="xs" color="red.400">{article.readTime}</Text>
              </HStack>
              <Heading as="h2" size="md" mb={1} color={colorMode === "light" ? "#2D3748" : "white"}>
                <LinkOverlay as={NextLink} href={article.link} _hover={{ textDecoration: "underline" }}>
                  {article.title}
                </LinkOverlay>
              </Heading>
              <Text fontSize="sm" color={colorMode === "light" ? "gray.700" : "gray.300"} mb={2}>
                {article.summary}
              </Text>
              <Text as={NextLink} href={article.link} fontWeight="bold" fontSize="sm" color={colorMode === "light" ? "#6B46C1" : "#A78BFA"} _hover={{ textDecoration: "underline" }}>
                Read more &rarr;
              </Text>
            </Box>
            <Box ml={6} minW="100px" maxW="120px" borderRadius="md" overflow="hidden" boxShadow="md" display={{ base: "none", sm: "block" }}>
              <Image src={article.image} alt={article.title} objectFit="cover" w="100%" h="80px" />
            </Box>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Writings; 