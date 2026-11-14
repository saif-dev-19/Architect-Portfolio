
import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import projects from "../../data/projects";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    setSelectedImage(0);
    setLightboxOpen(false);
  }, [slug]);

  const images = project?.images?.length
    ? project.images
    : [project?.image].filter(Boolean);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      }

      if (event.key === "ArrowRight") {
        setSelectedImage((current) => (current + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage(
          (current) => (current - 1 + images.length) % images.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, images.length]);

  const handleBackToProjects = () => {
    if (location.state?.fromProjects) {
      navigate("/", {
        state: { scrollToProjects: true },
      });
    } else {
      navigate("/#projects");
    }
  };

  const showPreviousImage = () => {
    setSelectedImage(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  const showNextImage = () => {
    setSelectedImage(
      (current) => (current + 1) % images.length
    );
  };

  if (!project) {
    return (
      <Box className="project-not-found">
        <Text className="section-label">
          404 — PROJECT NOT FOUND
        </Text>

        <Text className="projects-title">
          Project not found.
        </Text>

        <button
          type="button"
          className="project-back-link"
          onClick={handleBackToProjects}
        >
          <ArrowLeft size={17} />
          Back to Projects
        </button>
      </Box>
    );
  }

  return (
    <Box className="project-details-page">
      <Box className="project-details-container">

        {/* Back to Projects */}
        <button
          type="button"
          className="project-back-link"
          onClick={handleBackToProjects}
        >
          <ArrowLeft size={17} />
          Back to Projects
        </button>

        {/* Project Heading */}
        <Box className="project-details-heading">
          <Text className="section-label">
            {project.category}
          </Text>

          <Text className="project-details-title">
            {project.title}
          </Text>

          <Text className="project-details-description">
            {project.description}
          </Text>
        </Box>

        {/* Project Gallery */}
        <Box className="project-gallery-viewer">

          {/* Main Image */}
          <Box className="project-gallery-main">
            <img
              src={images[selectedImage]}
              alt={`${project.title} - Image ${selectedImage + 1}`}
              onClick={() => setLightboxOpen(true)}
            />

            {/* Image Counter */}
            <Box className="gallery-image-counter">
              {String(selectedImage + 1).padStart(2, "0")}
              {" / "}
              {String(images.length).padStart(2, "0")}
            </Box>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="gallery-nav gallery-nav-prev"
                  onClick={showPreviousImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  type="button"
                  className="gallery-nav gallery-nav-next"
                  onClick={showNextImage}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* View Full Image Hint */}
            <Box className="gallery-zoom-hint">
              Click image to enlarge
            </Box>
          </Box>

          {/* Thumbnail Gallery */}
          {images.length > 1 && (
            <Box className="project-gallery-thumbnails">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={`${image}-${index}`}
                  className={`gallery-thumbnail ${
                    selectedImage === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={selectedImage === index}
                >
                  <img
                    src={image}
                    alt={`${project.title} thumbnail ${index + 1}`}
                  />

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </Box>
          )}
        </Box>

        {/* Project Information */}
        <Box className="project-details-info">

          <Box className="project-info-block">
            <Text className="project-info-label">
              PROJECT CATEGORY
            </Text>

            <Text className="project-info-value">
              {project.category}
            </Text>
          </Box>

          <Box className="project-info-block">
            <Text className="project-info-label">
              SOFTWARE USED
            </Text>

            <Box className="project-details-software">
              {project.software.map((software) => (
                <span key={software}>
                  {software}
                </span>
              ))}
            </Box>
          </Box>

        </Box>
      </Box>

      {/* Full Screen Lightbox */}
      {lightboxOpen && (
        <Box
          className="image-lightbox"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close image preview"
          >
            <X size={24} />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-arrow lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <img
            src={images[selectedImage]}
            alt={`${project.title} - Image ${selectedImage + 1}`}
            className="lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-arrow lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}

          <Text className="lightbox-counter">
            {selectedImage + 1} / {images.length}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default ProjectDetails;
