import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  demoUrl: string;
  tag: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  demoUrl,
  tag,
}) => {
  const { colorMode } = useColorMode();
  const [isHovered, setIsHovered] = useState(false);

  const tagColors: { [key: string]: string } = {
    Stealth: "linear-gradient(to right, #9EFF9C, #9AFEDC)",
    Active: "linear-gradient(to right, #D3A4FF, #F2A5FD)",
    Featured: "linear-gradient(to right, #FED79C, #FDEBA8)",
    Sold: "linear-gradient(to right, #FF9C9C, #FFB8B8)",
  };

  const tagTextColor: { [key: string]: string } = {
    Stealth: "#056602",
    Active: "#390B66",
    Featured: "#653E02",
    Sold: "#660202",
  };

  const backgroundGradient = tagColors[tag] || "transparent";
  const textColor = tagTextColor[tag] || "black";

  const descriptionTextColor = colorMode === "light" ? "gray.500" : "gray.400";

  return (
    <a
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Card
        className="project-card"
        width={{ base: "100%", sm: "100%", md: "100%" }}
        minWidth={0}
        borderRadius="lg"
        overflow="hidden"
        p={{ base: 2, sm: 3, md: 4 }}
        m={{ base: 0, sm: 0, md: 0 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tag and Icon Row */}
        <Box display="flex" justifyContent="flex-end" alignItems="center" mb={2} gap={2}>
          <Text
            fontSize={{ base: "xs", sm: "sm" }}
            color={textColor}
            bg={backgroundGradient}
            borderRadius="md"
            px={2}
            py={1}
            fontWeight="bold"
            zIndex="1"
            whiteSpace="nowrap"
            display="inline-flex"
            alignItems="center"
          >
            {tag}
            <Box as="span" ml={1} fontSize="xs" color={textColor}>
              <FaExternalLinkAlt />
            </Box>
          </Text>
        </Box>
        <CardBody>
          <Heading as="h4" size={{ base: "sm", sm: "md" }} mb={2}>
            {title}
          </Heading>
          <Text fontSize={{ base: "xs", sm: "sm" }} color={descriptionTextColor} mb={1}>
            {description}
          </Text>
        </CardBody>
      </Card>
    </a>
  );
};

export default ProjectCard;
