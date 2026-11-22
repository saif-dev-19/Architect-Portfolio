
import { useRef } from "react";
import { Box, Text } from "@chakra-ui/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
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
  { id: 1, name: "AutoCAD", logo: "/logos/autocad.jpg", category: "Engineering & Drafting" },
  { id: 2, name: "Revit Architecture", logo: "/logos/revit.jpg", category: "BIM Software" },
  { id: 3, name: "SketchUp", logo: "/logos/sketchup.jpg", category: "3D Modeling" },
  { id: 4, name: "3ds Max", logo: "/logos/3ds-max.jpg", category: "3D Modeling" },
];

const tools = [
  { id: 1, name: "V-Ray", logo: "/logos/vray.jpg", category: "Rendering" },
  { id: 2, name: "Adobe Photoshop", logo: "/logos/photoshop.svg", category: "Image Editing" },
  { id: 3, name: "MS Project", logo: "/logos/ms-project.svg", category: "Project Management" },
  { id: 4, name: "Microsoft Word", logo: "/logos/word.svg", category: "Office Application" },
  { id: 5, name: "Microsoft Excel", logo: "/logos/excel.svg", category: "Office Application" },
  { id: 6, name: "Microsoft PowerPoint", logo: "/logos/powerpoint.svg", category: "Office Application" },
];

const SoftwareCarousel = ({ items, showExplore = false }) => {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (!trackRef.current) return;

    trackRef.current.scrollBy({
      left: direction * 290,
      behavior: "smooth",
    });
  };

  return (
    <Box className="skills-carousel">
      <Box className="carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          aria-label="Scroll left"
          onClick={() => scroll(-1)}
        >
          <ChevronLeft size={21} />
        </button>

        <button
          type="button"
          className="carousel-arrow"
          aria-label="Scroll right"
          onClick={() => scroll(1)}
        >
          <ChevronRight size={21} />
        </button>
      </Box>

      <Box className="skills-carousel-track" ref={trackRef}>
        {items.map((item) => (
          <Box
            key={item.id}
            className="software-card"
            as={showExplore ? "a" : "div"}
            href={showExplore ? "#projects" : undefined}
          >
            <Box className="software-logo">
              <img src={item.logo} alt={`${item.name} logo`} />
            </Box>

            <Box className="software-info">
              <Text className="software-name">{item.name}</Text>
              <Text className="software-category">{item.category}</Text>

              {showExplore && (
                <Box className="software-action">
                  <Text>Explore Projects</Text>
                  <ArrowUpRight size={15} />
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Skills = () => {
  return (
    <Box id="skills" className="skills-section">
      <Box className="skills-container">

        <Box className="skills-heading">
          <Text className="section-label">TECHNICAL EXPERTISE</Text>

          <Text className="skills-title">
            Skills & <span>Software.</span>
          </Text>

          <Text className="skills-subtitle">
            Engineering knowledge and professional software
            used to create detailed designs and architectural
            visualizations.
          </Text>
        </Box>

        {/* Technical Skills */}
        <Box className="skills-group">
          <Text className="skills-group-title">Technical Skills</Text>

          <Box className="technical-skills-grid">
            {technicalSkills.map((group) => (
              <Box key={group.id} className="technical-skill-card">
                <Text className="technical-skill-number">0{group.id}</Text>
                <Text className="technical-skill-title">{group.title}</Text>

                <Box className="technical-skill-list">
                  {group.skills.map((skill) => (
                    <Box key={skill} className="technical-skill-item">
                      <span className="skill-bullet">•</span>
                      <Text>{skill}</Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Software Carousel */}
        <Box className="skills-group software-group">
          <Text className="skills-group-title">Software</Text>
          <Text className="skills-group-description">
            Design and engineering software used to develop
            architectural and structural projects.
          </Text>

          <SoftwareCarousel items={software} showExplore />
        </Box>

        {/* Tools Carousel */}
        <Box className="skills-group tools-group">
          <Text className="skills-group-title">Tools & Applications</Text>
          <Text className="skills-group-description">
            Tools used for rendering, image editing,
            project management and office productivity.
          </Text>

          <SoftwareCarousel items={tools} />
        </Box>

      </Box>
    </Box>
  );
};

export default Skills;
