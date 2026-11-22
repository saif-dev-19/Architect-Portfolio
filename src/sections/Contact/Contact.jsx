
import { Box, Text } from "@chakra-ui/react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";

import "./Contact.css";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Address",
    value: "saifullahkds@gmail.com",
    link: "mailto:saifullahkds@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "+88 01637001339",
    link: "tel:+8801637001339",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mirpur, Dhaka, Bangladesh",
    link: null,
  },
];

// const socialLinks = [
//   {
//     icon: Linkedin,
//     label: "LinkedIn",
//     url: "https://www.linkedin.com/",
//   },
//   {
//     icon: Github,
//     label: "GitHub",
//     url: "https://github.com/",
//   },
// ];

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoLink = `mailto:saifullahkds@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <Box id="contact" className="contact-section">
      <Box className="contact-container">

        {/* Section Heading */}
        <Box className="contact-heading">
          <Text className="section-label">
            GET IN TOUCH
          </Text>

          <Text className="contact-title">
            Let's Work <span>Together.</span>
          </Text>

          <Text className="contact-subtitle">
            Have a project in mind or need professional
            architectural design services? Feel free to
            get in touch.
          </Text>
        </Box>

        {/* Contact Content */}
        <Box className="contact-content">

          {/* Left: Contact Information */}
          <Box className="contact-info">
            <Text className="contact-info-title">
              Contact Information
            </Text>

            <Text className="contact-info-description">
              Reach out through any of the following
              channels. I'll be happy to discuss your
              project requirements.
            </Text>

            <Box className="contact-info-list">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <Box
                    key={item.label}
                    className="contact-info-item"
                  >
                    <Box className="contact-info-icon">
                      <Icon size={21} strokeWidth={1.6} />
                    </Box>

                    <Box className="contact-info-text">
                      <Text className="contact-info-label">
                        {item.label}
                      </Text>

                      {item.link ? (
                        <a href={item.link}>
                          {item.value}
                        </a>
                      ) : (
                        <Text>{item.value}</Text>
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Box>

            {/* Social Links */}
            {/* <Box className="contact-social">
              <Text className="contact-social-title">
                FOLLOW ME
              </Text>

              <Box className="contact-social-links">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon size={19} />
                    </a>
                  );
                })}
              </Box>
            </Box> */}
          </Box>

          {/* Right: Contact Form */}
          <Box className="contact-form-wrapper">
            <Text className="contact-form-title">
              Send a Message
            </Text>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <Box className="contact-form-row">
                <Box className="contact-field">
                  <label htmlFor="contact-name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </Box>

                <Box className="contact-field">
                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </Box>
              </Box>

              <Box className="contact-field">
                <label htmlFor="contact-subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="What is your project about?"
                  required
                />
              </Box>

              <Box className="contact-field">
                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                />
              </Box>

              <button
                type="submit"
                className="contact-submit-button"
              >
                Send Message
                <Send size={17} />
              </button>
            </form>
          </Box>

        </Box>

      </Box>
    </Box>
  );
};

export default Contact;
