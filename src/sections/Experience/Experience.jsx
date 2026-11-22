
import { Box, Flex, Text } from "@chakra-ui/react";
import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";
import "./Experience.css";

const experiences = [
  {
    role: "OSP Design & Drafting Specialist",
    company: "Skarion Engineering Services",
    location: "Remote, USA",
    period: "Jan 2026 — Present",
    type: "Full-time",
    description:"",
    responsibilities: [
      "Design FTTH fiber optic networks and OSP infrastructure.",
      "Prepare permit drawings and engineering documentation",
      "Maintain project documentation and quality standards.",
      "Support telecommunications infrastructure projects.",
      "Drawing Revision & QA/QC", 
    ],
  },
  {
    role: "AutoCAD Operator (Draughtsman)",
    company: "Universal Engineering & Architect",
    location: "Feni, Bangladesh",
    period: "Dec 2023 — Dec 2025",
    type: "Full-time",
    description:
      "Worked on structural design coordination, construction planning, material estimation, and project documentation for residential and commercial developments.",
    responsibilities: [
      "Prepared detailed architectural floor plans, elevations, sections, layouts, and construction documentation for residential and commercial projects using AutoCAD.",
      "Assisted in building planning, space optimization, and drawing revisions.",
      "Coordinated with engineers and architects to ensure drawing accuracy and project compliance.",
      "Assisted with site supervision and incorporated field changes into construction drawings."
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-header">
          <Text className="experience-eyebrow">
            <BriefcaseBusiness size={16} />
            PROFESSIONAL JOURNEY
          </Text>

          <h2 className="experience-title">
            Experience & <span>Expertise</span>
          </h2>

          <p className="experience-subtitle">
            A journey of building expertise, delivering projects,
            and creating structures with precision.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-timeline-marker">
                <div className="experience-marker-dot" />
              </div>

              <div className="experience-card">
                <Flex
                  className="experience-card-top"
                  justify="space-between"
                  align="flex-start"
                  wrap="wrap"
                  gap={4}
                >
                  <Box className="experience-heading">
                    <Text className="experience-role">
                      {experience.role}
                    </Text>

                    <Text className="experience-company">
                      {experience.company}
                    </Text>

                    <Text className="experience-location">
                      {experience.location}
                    </Text>
                  </Box>

                  <div className="experience-meta">
                    <span className="experience-period">
                      {experience.period}
                    </span>

                    <span className="experience-type">
                      {experience.type}
                    </span>
                  </div>
                </Flex>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-responsibilities">
                  {experience.responsibilities.map(
                    (responsibility, itemIndex) => (
                      <div
                        className="experience-responsibility"
                        key={itemIndex}
                      >
                        <ArrowUpRight size={15} />
                        <span>{responsibility}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
