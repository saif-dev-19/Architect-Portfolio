
import { Box, Flex, Text } from "@chakra-ui/react";
import "./Education.css";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science",
    subject: "Civil Engineering",
    institution: "University Name",
    period: "2022 – Present",
    status: "Currently Studying",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate",
    subject: "Science",
    institution: "College Name",
    period: "2019 – 2021",
    status: "Completed",
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    subject: "Science",
    institution: "School Name",
    period: "2017 – 2019",
    status: "Completed",
  },
];

const Education = () => {
  return (
    <Box id="education" className="education-section">
      <Box className="education-container">
        <Box className="education-heading">
          <Text className="section-label">
            MY ACADEMIC JOURNEY
          </Text>

          <Text className="education-title">
            Education &
            <br />
            <span>Qualifications.</span>
          </Text>

          <Text className="education-subtitle">
            My academic background and educational journey
            have shaped my foundation in engineering.
          </Text>
        </Box>

        <Flex className="education-list">
          {educationData.map((item) => (
            <Box key={item.id} className="education-card">
              <Box className="education-marker">
                <Box className="education-dot" />
              </Box>

              <Box className="education-card-content">
                <Flex className="education-card-top">
                  <Text className="education-period">
                    {item.period}
                  </Text>

                  <Text className="education-status">
                    {item.status}
                  </Text>
                </Flex>

                <Text className="education-degree">
                  {item.degree}
                </Text>

                <Text className="education-subject">
                  {item.subject}
                </Text>

                <Text className="education-institution">
                  {item.institution}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Education;
