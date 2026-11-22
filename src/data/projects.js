
import project1 from "../assets/images/projects/Residential Villa/3d-exterior/classical villa.jpg";
import project2 from "../assets/images/projects/Residential Complete Project/3d-exterior/VIEW 1.jpeg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";
import project6 from "../assets/images/project6.jpg";

// Project 1 images
// import project1_2d from "../assets/images/projects/Residential Villa/2d-detailing/project1-2d-1.jpg";
import project1_exterior_1 from "../assets/images/projects/Residential Villa/3d-exterior/back view.jpg";
import project1_exterior_2 from "../assets/images/projects/Residential Villa/3d-exterior/classical villa.jpg";
import project1_exterior_3 from "../assets/images/projects/Residential Villa/3d-exterior/right side view.jpg";
import project1_exterior_4 from "../assets/images/projects/Residential Villa/3d-exterior/side view.jpg";
import project1_exterior_5 from "../assets/images/projects/Residential Villa/3d-exterior/top view.jpg";
// import project1_interior from "../assets/images/projects/Residential Villa/2d-detailing/project1-2d-1.jpg";



// Project 2 images
import project2_exterior_1 from "../assets/images/projects/Residential Complete Project/3d-exterior/VIEW 1.jpeg";
import project2_exterior_2 from "../assets/images/projects/Residential Complete Project/3d-exterior/VIEW 2.jpeg";
import project2_exterior_3 from "../assets/images/projects/Residential Complete Project/3d-exterior/VIEW 5.jpeg";
import project2_exterior_4 from "../assets/images/projects/Residential Complete Project/3d-exterior/VIEW 4.jpeg";

import project2_interior_1 from "../assets/images/projects/Residential Complete Project/3d-interior/Bed1.jpeg";
import project2_interior_2 from "../assets/images/projects/Residential Complete Project/3d-interior/Bed2.png";
import project2_interior_3 from "../assets/images/projects/Residential Complete Project/3d-interior/Bed3.png";
import project2_interior_4 from "../assets/images/projects/Residential Complete Project/3d-interior/Living room.png";

import project2_2d_1 from "../assets/images/projects/Residential Complete Project/2d-detailing/2d_1.png";
import project2_2d_2 from "../assets/images/projects/Residential Complete Project/2d-detailing/2d_2.png";
import project2_2d_3 from "../assets/images/projects/Residential Complete Project/2d-detailing/2d_3.png";
import project2_2d_4 from "../assets/images/projects/Residential Complete Project/2d-detailing/2d_4.png";
import project2_2d_5 from "../assets/images/projects/Residential Complete Project/2d-detailing/2d_5.png";
import project2_2d_6 from "../assets/images/projects/Residential Complete Project/2d-detailing/2d_6.png";
import project2_2d_7 from "../assets/images/projects/Residential Complete Project/2d-detailing/2d_7.png";
import project2_2d_8 from "../assets/images/projects/Residential Complete Project/2d-detailing/2d_8.png";
import project2_2d_9 from "../assets/images/projects/Residential Complete Project/2d-detailing/2d_9.png";
import project2_2d_10 from "../assets/images/projects/Residential Complete Project/2d-detailing/2d_10.png";
import project2_2d_11 from "../assets/images/projects/Residential Complete Project/2d-detailing/2d_11.png";




// Project 3 images
// import project3_2d from "../assets/images/projects/commercial-building-design/2d-detailing/project1-2d-1.jpg";

// Project 4 images
// import project4_2d from "../assets/images/projects/residential-floor-plan/2d-detailing/project1-2d-1.jpg";

// Project 5 images
// import project5_2d from "../assets/images/projects/3d-exterior-visualization/2d-detailing/project1-2d-1.jpg";

// Project 6 images
// import project6_2d from "../assets/images/projects/structural-drawing/2d-detailing/project1-2d-1.jpg";

const projects = [
    {
    id: 1,
    title: "Residential Villa",
    category: "Architectural",
    image: project1,

    categoryImages: {
      "2D Detailing": [],
      "3D Exterior": [project1_exterior_1, project1_exterior_2, project1_exterior_3, project1_exterior_4, project1_exterior_5],
    },

    software: ["AutoCAD", "3ds Max", "V-Ray"],
    description:
      "A modern G+2 / 3-storey residential villa with contemporary design, architectural planning, exterior modeling, material and color selection, and realistic visualization.",
    slug: "residential-villa",
  },
  {
    id: 2,
    title: "Residential Complete Project",
    category: "Architectural",
    image: project2,

    categoryImages: {
      "2D Detailing": [project2_2d_1, project2_2d_2, project2_2d_3, project2_2d_4, project2_2d_5, project2_2d_6, project2_2d_7, project2_2d_8, project2_2d_9, project2_2d_10, project2_2d_11],
      "3D Exterior": [project2_exterior_1, project2_exterior_2, project2_exterior_3, project2_exterior_4],
      "3D Interior": [project2_interior_1, project2_interior_2, project2_interior_3, project2_interior_4],
    },

    // pdf: "/project-pdfs/residential-building.pdf",
    software: ["AutoCAD", "SketchUp", "V-Ray"],
    description:
      "A functional and modern residential shed house in Nanggolkot, Cumilla, with architectural planning, structural and detailed drafting, 3D modeling, and exterior visualization.",
    slug: "detail-work",
  },

  // {
  //   id: 3,
  //   title: "Duplex Exterior",
  //   category: "3D Visualization",
  //   image: project3,

  //   categoryImages: {
  //     "2D Detailing": [],
  //   },

  //   software: ["AutoCAD", "SketchUp", "V-Ray"],
  //   description:
  //     "A contemporary two-storey residential duplex exterior with a minimalist facade, open terraces, spacious balconies, glazing, landscaping, and privacy-focused boundary design.",
  //   slug: "duplex-exterior",
  // },

  // {
  //   id: 4,
  //   title: "Commercial Interior",
  //   category: "Interior",
  //   image: project4,

  //   categoryImages: {
  //     "2D Detailing": [],
  //   },

  //   software: ["AutoCAD", "3ds Max", "V-Ray"],
  //   description:
  //     "A modern commercial facility featuring functional classroom, conference room, reception, and office interiors for an efficient professional environment.",
  //   slug: "commercial-interior",
  // },

  // {
  //   id: 5,
  //   title: "Residential Interior",
  //   category: "Interior",
  //   image: project5,

  //   categoryImages: {
  //     "2D Detailing": [],
  //   },

  //   software: ["AutoCAD", "3ds Max", "V-Ray"],
  //   description:
  //     "A warm and modern residential interior for a child bedroom and living room, including space planning, furniture layout, storage, ceiling and lighting design.",
  //   slug: "residential-interior",
  // },

  // {
  //   id: 6,
  //   title: "Govt. Post Office",
  //   category: "Architectural",
  //   image: project6,

  //   categoryImages: {
  //     "2D Detailing": [],
  //   },

  //   software: ["AutoCAD", "Revit", "3D Visualization"],
  //   description:
  //     "A contemporary government post office in Agargaon, Dhaka, featuring architectural planning, floor plans, elevation, facade development, landscape design, materials, and 3D visualization.",
  //   slug: "govt-post-office",
  // },
];

export default projects;
