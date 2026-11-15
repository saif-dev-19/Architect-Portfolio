
import { Box, Text } from "@chakra-ui/react";
import {
  Ruler,
  PenTool,
  Building2,
  Sofa,
  FileCheck,
  Network,
  ArrowUpRight,
} from "lucide-react";

import "./Services.css";

const services = [
  {
    id: "01",
    title: "Architectural Floor Plan Design",
    description:
      "Functional and well-organized architectural floor plans designed with practical space planning and precision.",
    icon: Ruler,
  },
  {
    id: "02",
    title: "2D Technical Drafting",
    description:
      "Detailed technical drawings, building layouts, structural details and construction documentation.",
    icon: PenTool,
  },
  {
    id: "03",
    title: "3D Exterior Visualization",
    description:
      "Realistic exterior modeling and rendering that brings architectural concepts to life.",
    icon: Building2,
  },
  {
    id: "04",
    title: "3D Interior Design",
    description:
      "Creative interior layouts with carefully planned materials, lighting and realistic visualization.",
    icon: Sofa,
  },
  {
    id: "05",
    title: "Construction & Permit Drawings",
    description:
      "Technical drawing documentation prepared to support construction planning and permit requirements.",
    icon: FileCheck,
  },
  {
    id: "06",
    title: "OSP Design & Drafting",
    description:
      "Outside Plant design and drafting solutions with organized technical layouts and documentation.",
    icon: Network,
  },
];

const Services = () => {
  return (
    <Box id="services" className="services-section">
      <Box className="services-container">

        {/* Section Heading */}
        <Box className="services-heading">
          <Text className="section-label">
            WHAT I OFFER
          </Text>

          <Text className="services-title">
            Professional <span>Services.</span>
          </Text>

          <Text className="services-subtitle">
            Delivering thoughtful architectural design,
            precise technical drawings and realistic
            3D visualizations.
          </Text>
        </Box>

        {/* Services Grid */}
        <Box className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Box
                key={service.id}
                className="service-card"
              >
                <Box className="service-card-top">
                  <Text className="service-number">
                    {service.id}
                  </Text>

                  <Box className="service-icon">
                    <Icon size={27} strokeWidth={1.5} />
                  </Box>
                </Box>

                <Text className="service-title">
                  {service.title}
                </Text>

                <Text className="service-description">
                  {service.description}
                </Text>

                <Box className="service-card-bottom">
                  <Text>Professional Expertise</Text>
                  <ArrowUpRight size={17} />
                </Box>
              </Box>
            );
          })}
        </Box>

      </Box>
    </Box>
  );
};

export default Services;
