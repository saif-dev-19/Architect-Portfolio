
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";
import project6 from "../assets/images/project6.jpg";

// Project 1 images
import project1_2d from "../assets/images/projects/modern-residential-building/2d-detailing/project1-2d-1.jpg";
import project1_exterior from "../assets/images/project1-exterior-1.jpg";
import project1_interior from "../assets/images/project1-interior-1.jpg";

// Project 2 images
import project2_2d from "../assets/images/projects/contemporary-interior-design/2d-detailing/project1-2d-1.jpg";

// Project 3 images
import project3_2d from "../assets/images/projects/commercial-building-design/2d-detailing/project1-2d-1.jpg";

// Project 4 images
import project4_2d from "../assets/images/projects/residential-floor-plan/2d-detailing/project1-2d-1.jpg";

// Project 5 images
import project5_2d from "../assets/images/projects/3d-exterior-visualization/2d-detailing/project1-2d-1.jpg";

// Project 6 images
import project6_2d from "../assets/images/projects/structural-drawing/2d-detailing/project1-2d-1.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Residential Building",
    category: "Architectural",
    image: project1,

    categoryImages: {
      "2D Detailing": [project1_2d],
      "3D Exterior": [project1_exterior],
      "3D Interior": [project1_interior],
    },

    pdf: "/project-pdfs/residential-building.pdf",
    software: ["AutoCAD", "SketchUp", "V-Ray"],
    description:
      "A modern residential building design with detailed architectural planning and visualization.",
    slug: "modern-residential-building",
  },

  {
    id: 2,
    title: "Contemporary Interior Design",
    category: "Interior",
    image: project2,

    categoryImages: {
      "2D Detailing": [project2_2d],
    },

    software: ["AutoCAD", "3ds Max", "V-Ray"],
    description:
      "A contemporary interior design project focused on space planning and realistic visualization.",
    slug: "contemporary-interior-design",
  },

  {
    id: 3,
    title: "Commercial Building Design",
    category: "Architectural",
    image: project3,

    categoryImages: {
      "2D Detailing": [project3_2d],
    },

    software: ["AutoCAD", "Revit Architecture"],
    description:
      "A commercial building project with functional layouts and architectural drawings.",
    slug: "commercial-building-design",
  },

  {
    id: 4,
    title: "Residential Floor Plan",
    category: "Architectural",
    image: project4,

    categoryImages: {
      "2D Detailing": [project4_2d],
    },

    software: ["AutoCAD"],
    description:
      "A residential floor plan designed with practical space allocation and detailed drafting.",
    slug: "residential-floor-plan",
  },

  {
    id: 5,
    title: "3D Exterior Visualization",
    category: "3D Visualization",
    image: project5,

    categoryImages: {
      "2D Detailing": [project5_2d],
    },

    software: ["SketchUp", "3ds Max", "V-Ray"],
    description:
      "A 3D exterior visualization showcasing architectural form, materials and lighting.",
    slug: "3d-exterior-visualization",
  },

  {
    id: 6,
    title: "Structural Drawing",
    category: "Structural",
    image: project6,

    categoryImages: {
      "2D Detailing": [project6_2d],
    },

    software: ["AutoCAD", "Revit Architecture"],
    description:
      "A structural drawing project with detailed technical documentation.",
    slug: "structural-drawing",
  },
];

export default projects;
