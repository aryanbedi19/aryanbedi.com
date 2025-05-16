import { Input, InputGroup, InputRightElement, Button, Box, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import type { SearchItem } from "../searchData";
import searchData from "../searchData"; // Will create this file

const SearchBar = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Live search as user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const value = e.target.value;
    if (value.trim() === "") {
      setResults([]);
      return;
    }
    const filtered = searchData.filter((item: SearchItem) =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.description.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      router.push(results[0].link);
    }
  };

  return (
    <Box as="form" onSubmit={handleSearch} w={{ base: "100%", md: "400px" }} maxW="100%" position="relative">
      <InputGroup size="md" boxShadow="0 2px 8px rgba(0,0,0,0.06)" bg="#F7FAFC" borderRadius={0}>
        <Input
          placeholder="Search for my other projects/blogs"
          value={searchTerm}
          onChange={handleInputChange}
          borderRadius={0}
          borderWidth="1px"
          borderColor="#E2E8F0"
          bg="transparent"
          fontSize="md"
          height="44px"
          pr="4.5rem"
          color={colorMode === "light" ? "black" : "white"}
          _dark={{ color: "white", bg: "gray.900" }}
          _placeholder={{ color: "gray.400", opacity: 1, fontSize: "xs" }}
          _hover={{ borderColor: "#B794F4", boxShadow: "0 4px 16px rgba(159,122,234,0.08)" }}
          _focus={{ borderColor: "#6B46C1", boxShadow: "0 0 0 2px #B794F4" }}
          transition="all 0.2s"
        />
        <InputRightElement width="auto" mr="0" height="100%" p={0}>
          <Button
            type="submit"
            borderRadius={0}
            color="white"
            bg="#6B46C1"
            _hover={{ bg: "#805AD5" }}
            height="44px"
            minW="90px"
            px={4}
            fontWeight="bold"
            fontSize="md"
            boxShadow="none"
            border="none"
            borderLeft="none"
            transition="background 0.2s"
            style={{ marginLeft: '-1px', borderLeft: 'none' }}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
      {/* Render search results as a dropdown */}
      {results.length > 0 && (
        <Box
          mt={2}
          maxH="300px"
          overflowY="auto"
          borderRadius="md"
          boxShadow="md"
          bg={colorMode === "light" ? "white" : "gray.800"}
          zIndex={10}
          position="absolute"
          width="100%"
        >
          {results.map((item, idx) => (
            <Box
              key={idx}
              p={2}
              bg={
                hoveredIdx === idx
                  ? (colorMode === "light" ? "purple.100" : "purple.700")
                  : (colorMode === "light" ? "gray.100" : "gray.700")
              }
              borderRadius="md"
              mb={2}
              cursor="pointer"
              onClick={() => router.push(item.link)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") router.push(item.link);
              }}
            >
              <strong>{item.title}</strong>
              <Box fontSize="sm" color="gray.500">{item.description}</Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar; 