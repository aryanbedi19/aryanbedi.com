import { Input, InputGroup, InputRightElement, Button, Box, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.toLowerCase() === "projects") {
      router.push("/work");
    } else if (searchTerm.toLowerCase() === "blogs") {
      router.push("/blogs");
    }
    // Add more search terms and routes as needed
  };

  return (
    <Box as="form" onSubmit={handleSearch} w={{ base: "100%", md: "400px" }} maxW="100%">
      <InputGroup size="md" boxShadow="0 2px 8px rgba(0,0,0,0.06)" bg="#F7FAFC" borderRadius={0}>
        <Input
          placeholder="Search for my other projects/blogs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          borderRadius={0}
          borderWidth="1px"
          borderColor="#E2E8F0"
          bg="transparent"
          fontSize="md"
          height="44px"
          pr="4.5rem"
          color={colorMode === "light" ? "black" : "white"}
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
    </Box>
  );
};

export default SearchBar; 