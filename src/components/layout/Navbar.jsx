
import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box as="nav" className="navbar">
      <Flex className="navbar-container" align="center" justify="space-between">
        <Text className="navbar-logo">
          ENG<span>.</span>
        </Text>

        <HStack className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </HStack>

        <Button className="navbar-contact" asChild>
          <a href="#contact">Contact Me</a>
        </Button>

        <IconButton
          className="navbar-menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          variant="ghost"
        >
          {menuOpen ? <X /> : <Menu />}
        </IconButton>
      </Flex>

      {menuOpen && (
        <Box className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact Me
          </a>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;

