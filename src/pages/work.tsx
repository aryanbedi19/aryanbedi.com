import { Box, Heading, Text, Flex, VStack, HStack, useColorMode, Button, Icon } from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";

const sections = [
  {
    heading: "Work Experience",
    items: [
      {
        title: "Blanc AI Quoting Tool",
        org: "",
        date: "Nov 2024 – Present",
        desc: "Built a SaaS solution for contractors that automatically sources materials and generates quotes. Used by contractors for 5000+ quotes.",
      },
      {
        title: "Founder in Residence",
        org: "Morrissette Institute of Entrepreneurship",
        date: "Sept 2024 – Present",
        desc: "Select Group at UWO funded $12,000 to build a startup in 4 months",
      },
      {
        title: "Industry Analyst",
        org: "Western Real Estate Club",
        date: "Sept 2024 – Present",
        desc: "Analyze residential real estate trends and provide market insights to support club events and reports.",
      },
      {
        title: "Marketing",
        org: "BitSwap",
        date: "March 2021 - Aug 2021",
        desc: "Led a digital marketing campaign that grew the site from 0 to 10,000 monthly users.",
      },
    ],
  },
  {
    heading: "Education",
    items: [
      {
        title: "Computer Science",
        org: "University of Western Ontario",
        date: "2023 – 2027",
        desc: "HBSc in Computer Science with a minor in Mathematics",
      },
    ],
  },
  {
    heading: "Fellowships",
    items: [
      {
        title: "RIppleX Fellowship",
        org: "Ripple Ventures",
        date: "Jan 2025 – Apr 2025",
        desc: "Participated in the RIppleXFellowship, collaborating with peers and mentors to develop leadership and entrepreneurial skills.",
      },
      {
        title: "Western Accelerator",
        org: "Morrissette Institute of Entrepreneurship",
        date: "Jan 2025 – Apr 2025",
        desc: "Selected as a founder at the Western Accelerator, working on startup development and networking with industry professionals.",
      },
    ],
  },
  {
    heading: "Awards & Achievements",
    items: [
      {
        title: "1st Place – ES1050 Design Showcase",
        org: "",
        date: "April 2024",
        desc: "Built a gear reminder app for athletes with disabilities; awarded top design and retained by client.",
      },
      {
        title: "2nd Place – Western Accelerator Pitch Competition",
        org: "",
        date: "Apr 2025",
        desc: "Placed 2nd among top startups from the Western Accelerator; pitched to investors and industry judges.",
      },
    ],
  },
];

const Work = () => {
  const { colorMode } = useColorMode();
  return (
    <Box maxW="800px" mx="auto" px={4} py={10}>
      {sections.map((section, sIdx) => (
        <Box key={sIdx} mb={10}>
          <Flex align="center" justify="space-between" mb={4}>
            <Heading as="h2" size="md" color={colorMode === "light" ? "#2D3748" : "white"}
              >
              {section.heading}
            </Heading>
            {section.heading === "Work Experience" && (
              <Button
                as="a"
                href="/assets/AryanBedi_Resume.pdf"
                download
                colorScheme="purple"
                leftIcon={<Icon as={FiDownload} />}
                variant="solid"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>
            )}
          </Flex>
          <VStack align="stretch" spacing={6}>
            {section.items.map((item, iIdx) => (
              <Box
                key={iIdx}
                bg={colorMode === "light" ? "white" : "#18181b"}
                borderRadius="2xl"
                boxShadow={colorMode === "light" ? "md" : "dark-lg"}
                p={5}
                transition="box-shadow 0.2s, transform 0.2s"
                _hover={{ boxShadow: "xl", transform: "translateY(-2px)" }}
              >
                <Flex justify="space-between" align="flex-start" wrap="wrap">
                  <Box flex="1 1 60%">
                    <Text fontWeight="bold" fontSize="lg" color={colorMode === "light" ? "#2D3748" : "white"}>
                      {item.title}
                    </Text>
                    <Text fontSize="sm" color={colorMode === "light" ? "gray.600" : "gray.300"} fontStyle="italic" mb={1}>
                      {item.org}
                    </Text>
                    <Text fontSize="sm" color={colorMode === "light" ? "gray.700" : "gray.400"}>
                      {item.desc}
                    </Text>
                  </Box>
                  <Box minW="140px" textAlign="right" mt={{ base: 2, md: 0 }}>
                    <Text fontSize="sm" color={colorMode === "light" ? "gray.500" : "gray.400"}>
                      {item.date}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </VStack>
        </Box>
      ))}
    </Box>
  );
};

export default Work; 