
import { Box, Text } from "@chakra-ui/react";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box className="footer-section">
      <Box className="footer-container">

        {/* Footer Main Content */}
        <Box className="footer-main">

          {/* Brand */}
          <Box className="footer-brand">
            <Text className="footer-logo">
              ENGINEERING<span>.</span>
            </Text>

            <Text className="footer-description">
              Creating thoughtful architectural designs,
              precise technical drawings and realistic
              3D visualizations.
            </Text>
          </Box>

          {/* Quick Links */}
          <Box className="footer-navigation">
            <Text className="footer-heading">
              QUICK LINKS
            </Text>

            <Box className="footer-links">
              {quickLinks.map((item) => (
                item.href === "/" ? (
                  <Link key={item.label} to="/">
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                )
              ))}
            </Box>
          </Box>

          {/* Back to Top */}
          <Box className="footer-back-top">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>

            <Text>BACK TO TOP</Text>
          </Box>

        </Box>

        {/* Footer Bottom */}
        <Box className="footer-bottom">

          <Text className="footer-copyright">
            © {new Date().getFullYear()} All Rights Reserved.
          </Text>

          <Text className="footer-credit">
            Developed by{" "}
            <a
              href="https://www.mahfuzurrahmansaif.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mahfuz <ArrowUpRight size={13} />
            </a>
          </Text>

        </Box>

      </Box>
    </Box>
  );
};

export default Footer;
