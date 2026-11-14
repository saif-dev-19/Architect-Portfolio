
import { Box, Flex, Text } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import "./Skills.css";

const technicalSkills = [
  {
    id: 1,
    title: "Engineering & Drafting",
    skills: [
      "AutoCAD 2D & 3D",
      "Architectural Floor Plan Design",
      "Building Layout Planning",
      "Construction Drawings",
      "OSP Design & Drafting",
      "Permit Drawings",
    ],
  },
  {
    id: 2,
    title: "3D Design & Visualization",
    skills: [
      "3D Interior, Exterior Design & Rendering",
      "Architectural Visualization",
      "Material & Lighting Setup",
    ],
  },
];

const software = [
  {
    id: 1,
    name: "AutoCAD",
    logo: "/logos/autocad.svg",
    category: "Engineering & Drafting",
  },
  {
    id: 2,
    name: "Revit Architecture",
    logo: "/logos/revit.svg",
    category: "Building Information Modeling",
  },
  {
    id: 3,
    name: "SketchUp",
    logo: "/logos/sketchup.svg",
    category: "3D Modeling",
  },
  {
    id: 4,
    name: "3ds Max",
    logo: "/logos/3ds-max.svg",
    category: "3D Modeling",
  },
  {
    id: 5,
    name: "V-Ray",
    logo: "/logos/vray.svg",
    category: "Rendering",
  },
  {
    id: 6,
    name: "Adobe Photoshop",
    logo: "/logos/photoshop.svg",
    category: "Image Editing",
  },
  {
    id: 7,
    name: "MS Project",
    logo: "/logos/ms-project.svg",
    category: "Project Management",
  },
  {
    id: 8,
    name: "Microsoft Word",
    logo: "/logos/word.svg",
    category: "Office Application",
  },
  {
    id: 9,
    name: "Microsoft Excel",
    logo: "/logos/excel.svg",
    category: "Office Application",
  },
  {
    id: 10,
    name: "Microsoft PowerPoint",
    logo: "/logos/powerpoint.svg",
    category: "Office Application",
  },
];

const Skills = () => {
  return (
    <Box id="skills" className="skills-section">
      <Box className="skills-container">

        {/* Section Heading */}
        <Box className="skills-heading">
          <Text className="section-label">
            TECHNICAL EXPERTISE
          </Text>

          <Text className="skills-title">
            Skills & <span>Software.</span>
          </Text>

          <Text className="skills-subtitle">
            Engineering knowledge and professional tools
            used to create detailed designs and realistic
            architectural visualizations.
          </Text>
        </Box>

        {/* Technical Skills */}
        <Box className="skills-group">
          <Text className="skills-group-title">
            Technical Skills
          </Text>

          <Flex className="technical-skills-grid">
            {technicalSkills.map((group) => (
              <Box
                key={group.id}
                className="technical-skill-card"
              >
                <Text className="technical-skill-number">
                  0{group.id}
                </Text>

                <Text className="technical-skill-title">
                  {group.title}
                </Text>

                <Box className="technical-skill-list">
                  {group.skills.map((skill) => (
                    <Flex
                      key={skill}
                      className="technical-skill-item"
                      align="center"
                    >
                      <span className="skill-bullet">•</span>
                      <Text>{skill}</Text>
                    </Flex>
                  ))}
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Software */}
        <Box className="skills-group software-group">
          <Text className="skills-group-title">
            Software
          </Text>

          <Text className="skills-group-description">
            Professional software used for drafting,
            modeling, rendering and project management.
          </Text>

          <Flex className="software-grid">
            {software.map((item) => (
              <Box
                key={item.id}
                className="software-card"
              >
                <Box className="software-logo">
                  <img
                    src={item.logo}
                    alt={`${item.name} logo`}
                  />
                </Box>

                <Box className="software-info">
                  <Text className="software-name">
                    {item.name}
                  </Text>

                  <Text className="software-category">
                    {item.category}
                  </Text>
                </Box>

                <ArrowUpRight
                  className="software-arrow"
                  size={18}
                />
              </Box>
            ))}
          </Flex>
        </Box>

      </Box>
    </Box>
  );
};

export default Skills;
