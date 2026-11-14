// import profileImage from "../../assets/images/profile.png";
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
  FaFacebookF,
} from "react-icons/fa";

import "./Hero.css";

const Hero = () => {
  return (
    <Box id="home" className="hero-section">

      <Box className="hero-background">
        {/* Architectural background and lighting */}
      </Box>

      <Box className="hero-inner">

        {/* Left: Replaceable portrait */}
        <Box className="hero-portrait">
          <Box className="portrait-frame">
            <img
              src=''
              alt="Civil Engineer"
              className="portrait-image"
            />
          </Box>
        </Box>

        {/* Center: Introduction */}
        <Box className="hero-content">
          <Text className="hero-label">
            CIVIL ENGINEER
          </Text>

          <Text className="hero-title">
            Designing a
            <br />
            <span>Stronger Tomorrow</span>
          </Text>

          <Text className="hero-description">
            I'm a Civil Engineer specializing in modern
            architectural and structural design using
            advanced engineering software.
          </Text>

          <Flex className="hero-actions">
            <Button className="hero-primary-btn">
              View My Projects <ArrowRight size={17} />
            </Button>

            <Button className="hero-secondary-btn">
              <Download size={17} /> Download CV
            </Button>
          </Flex>
        </Box>

        {/* Right: Architectural building */}
        <Box className="hero-building">
          {/* Building visual goes here */}
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
              <Text className="stat-label">Years of Learning</Text>
            </Box>
          </Box>

          <Box className="stat-item">
            <Folder />
            <Box>
              <Text className="stat-number">20+</Text>
              <Text className="stat-label">Projects Completed</Text>
            </Box>
          </Box>

          <Box className="stat-item">
            <Wrench />
            <Box>
              <Text className="stat-number">5+</Text>
              <Text className="stat-label">Software Expertise</Text>
            </Box>
          </Box>
        </Flex>

        {/* Social links */}

        <Flex className="hero-socials">
          <a href="mailto:your@email.com" aria-label="Email">
            <FaEnvelope />
          </a>

          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </Flex>


      </Flex>
    </Box>
  );
};

export default Hero;
