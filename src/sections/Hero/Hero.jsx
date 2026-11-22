import profileImage from "../../assets/images/profile.png";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
// Lucide icons
import {
  ArrowRight,
  Download,
  Landmark,
  Folder,
  Wrench,
  Mouse,
} from "lucide-react";

// Social media icons
import {
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Hero.css";

const Hero = () => {
  return (
    <Box id="home" className="hero-section">

      <Box className="hero-background">
        {/* Architectural background and lighting */}
      </Box>

<Box className="hero-inner">

  {/* Left: Introduction */}
  <Box className="hero-content">
    <Text className="hero-label">
      <span className="hero-label-line"></span>
      CIVIL ENGINEER
    </Text>

    <Text className="hero-title">
      SAIF ULLAH
      <br />
      <span>SAIFUL</span>
    </Text>

    <Text className="hero-description">
      Specialized in FTTH and OSP design,
      permit drawings, architectural drafting,
      construction documentation, and 3D visualization.
    </Text>

    <Flex className="hero-actions">
      <Button className="hero-primary-btn">
        Explore My Projects <ArrowRight size={17} />
      </Button>

      <Button className="hero-secondary-btn">
        <Download size={17} /> Download CV
      </Button>
    </Flex>
  </Box>

  {/* Right: Profile Portrait */}
  <Box className="hero-portrait">
    <Box className="portrait-frame">
      <img
        src={profileImage}
        alt="Saifullah Saiful - Civil Engineer"
        className="portrait-image"
      />
    </Box>
  </Box>

  {/* Architectural Background */}
  <Box className="hero-building">
    <Box className="building-overlay" />
  </Box>

</Box>

      {/* Bottom statistics */}
      <Flex className="hero-bottom">

        <Box className="hero-scroll">
          <Mouse size={19} />
          <Text>Scroll Down</Text>
        </Box>

        <Flex className="hero-stats">
          <Box className="stat-item">
            <Landmark />
            <Box>
              <Text className="stat-number">3+</Text>
              <Text className="stat-label">Years of Experience</Text>
            </Box>
          </Box>

          <Box className="stat-item">
            <Folder />
            <Box>
              <Text className="stat-number">6</Text>
              <Text className="stat-label">Featured Projects</Text>
            </Box>
          </Box>

          <Box className="stat-item">
            <Wrench />
            <Box>
              <Text className="stat-number">8+</Text>
              <Text className="stat-label">Software Expertise</Text>
            </Box>
          </Box>
        </Flex>

        {/* Social links */}

        <Flex className="hero-socials">
          <a href="mailto:saifullahkds@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/saifullah-saiful"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </Flex>


      </Flex>
    </Box>
  );
};

export default Hero;
