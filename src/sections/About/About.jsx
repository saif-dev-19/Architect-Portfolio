
import { Box, Flex, Text } from "@chakra-ui/react";
import { ArrowUpRight } from "lucide-react";
import "./About.css";
import { useState } from "react";
import aboutImages from "../../data/aboutImages";


const About = () => {
  

  const [activeImage, setActiveImage] = useState(aboutImages[0]);
  const handleNextImage = () => {
    const currentIndex = aboutImages.findIndex(
      (image) => image.id === activeImage.id
    );

    const nextIndex = (currentIndex + 1) % aboutImages.length;

    setActiveImage(aboutImages[nextIndex]);
  };

  return (
    <Box id="about" className="about-section">
      <Box className="about-container">

        <Box className="about-heading">
          <Text className="section-label">
            ABOUT ME
          </Text>

          <Text className="about-title">
            Turning Ideas Into
            <br />
            <span>Engineering Designs.</span>
          </Text>
        </Box>

        <Flex className="about-content">

        <Box className="about-visual">
          <Box className="about-image-placeholder">
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="about-main-image"
            onClick={handleNextImage}
          />

            <Text className="about-image-title">
              {activeImage.title}
            </Text>
          </Box>

          <Box className="about-image-frame" />

          <Flex className="about-image-thumbnails">
            {aboutImages.map((image) => (
              <Box
                key={image.id}
                className={`about-thumbnail ${
                  activeImage.id === image.id ? "active" : ""
                }`}
                onClick={() => setActiveImage(image)}
              >
                <img src={image.src} alt={image.alt} />
              </Box>
            ))}
          </Flex>
        </Box>

          <Box className="about-details">
            <Text className="about-intro">
              3+ Years in AutoCAD | Revit | SketchUp | 3ds Max | V-Ray.
Structural & Architectural Draftsman | 3D Visualizer.

            </Text>

            <Text className="about-description">
              Specialized in architectural & structural drafting, construction drawings, 3D exterior & interior visualization, and Revit modeling.
            </Text>

            <Text className="about-description">
              My portfolio includes residential buildings,
              commercial interiors, detailed structural work,
              and government building design. I value
              functionality, precision, and practical design
              in every project.
            </Text>

            <a href="#projects" className="about-link">
              Explore My Work
              <ArrowUpRight size={18} />
            </a>
          </Box>

        </Flex>
      </Box>
    </Box>
  );
};

export default About;
