import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import projects from "../../data/projects";

import "./Projects.css";

const categories = [
  "All",
  "Architectural",
  "Structural",
  "Interior",
  "3D Visualization",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <Box id="projects" className="projects-section">
      <Box className="projects-container">

        <Box className="projects-heading">
          <Text className="section-label">SELECTED WORKS</Text>

          <Text className="projects-title">
            Project <span>Gallery.</span>
          </Text>

          <Text className="projects-subtitle">
            A collection of architectural designs, technical drawings
            and 3D visualizations.
          </Text>
        </Box>

        {/* Category Filters */}
        <Box className="projects-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`project-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </Box>

        {/* Project Grid */}
        <Box className="projects-grid">
          {filteredProjects.map((project) => (
                <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                state={{ fromProjects: true }}
                className="project-card"
                >
              <Box className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <Box className="project-overlay">
                  <span className="project-view">
                    View Project
                    <ArrowUpRight size={18} />
                  </span>
                </Box>
              </Box>

              <Box className="project-content">
                <Text className="project-category">
                  {project.category}
                </Text>

                <Text className="project-title">
                  {project.title}
                </Text>

                <Box className="project-software">
                  {project.software.map((software) => (
                    <span key={software}>{software}</span>
                  ))}
                </Box>
              </Box>
            </Link>
          ))}
        </Box>

      </Box>
    </Box>
  );
};

export default Projects;