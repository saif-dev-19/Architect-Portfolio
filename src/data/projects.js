
const projects = [
  {
    id: 1,
    title: "Modern Residential Building",
    category: "Architectural",
    image: "/src/assets/images/project1.jpg",

    categoryImages: {
      "2D Detailing": [
        "/src/assets/images/projects/modern-residential-building/2d-detailing/project1-2d-1.jpg",
        "/src/assets/images/projects/modern-residential-building/2d-detailing/project1-2d-2.jpg",
      ],

      "3D Exterior": [
        "/src/assets/images/projects/modern-residential-building/3d-exterior/project1-exterior-1.jpg",
        "/src/assets/images/projects/modern-residential-building/3d-exterior/project1-exterior-2.jpg",
      ],

      "3D Interior": [
        "/src/assets/images/projects/modern-residential-building/3d-interior/project1-interior-1.jpg",
        "/src/assets/images/projects/modern-residential-building/3d-interior/project1-interior-2.jpg",
      ],
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
    image: "/src/assets/images/project2.jpg",

    categoryImages: {
      "2D Detailing": [
        "/src/assets/images/projects/contemporary-interior-design/2d-detailing/project2-2d-1.jpg",
        "/src/assets/images/projects/contemporary-interior-design/2d-detailing/project2-2d-2.jpg",
      ],

      "3D Exterior": [
        "/src/assets/images/projects/contemporary-interior-design/3d-exterior/project2-exterior-1.jpg",
        "/src/assets/images/projects/contemporary-interior-design/3d-exterior/project2-exterior-2.jpg",
      ],

      "3D Interior": [
        "/src/assets/images/projects/contemporary-interior-design/3d-interior/project2-interior-1.jpg",
        "/src/assets/images/projects/contemporary-interior-design/3d-interior/project2-interior-2.jpg",
      ],
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
    image: "/src/assets/images/project3.jpg",

    categoryImages: {
      "2D Detailing": [
        "/src/assets/images/projects/commercial-building-design/2d-detailing/project3-2d-1.jpg",
        "/src/assets/images/projects/commercial-building-design/2d-detailing/project3-2d-2.jpg",
      ],

      "3D Exterior": [
        "/src/assets/images/projects/commercial-building-design/3d-exterior/project3-exterior-1.jpg",
        "/src/assets/images/projects/commercial-building-design/3d-exterior/project3-exterior-2.jpg",
      ],

      "3D Interior": [
        "/src/assets/images/projects/commercial-building-design/3d-interior/project3-interior-1.jpg",
        "/src/assets/images/projects/commercial-building-design/3d-interior/project3-interior-2.jpg",
      ],
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
    image: "/src/assets/images/project4.jpg",

    categoryImages: {
      "2D Detailing": [
        "/src/assets/images/projects/residential-floor-plan/2d-detailing/project4-2d-1.jpg",
        "/src/assets/images/projects/residential-floor-plan/2d-detailing/project4-2d-2.jpg",
      ],

      "3D Exterior": [
        "/src/assets/images/projects/residential-floor-plan/3d-exterior/project4-exterior-1.jpg",
        "/src/assets/images/projects/residential-floor-plan/3d-exterior/project4-exterior-2.jpg",
      ],

      "3D Interior": [
        "/src/assets/images/projects/residential-floor-plan/3d-interior/project4-interior-1.jpg",
        "/src/assets/images/projects/residential-floor-plan/3d-interior/project4-interior-2.jpg",
      ],
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
    image: "/src/assets/images/project5.jpg",

    categoryImages: {
      "2D Detailing": [
        "/src/assets/images/projects/3d-exterior-visualization/2d-detailing/project5-2d-1.jpg",
        "/src/assets/images/projects/3d-exterior-visualization/2d-detailing/project5-2d-2.jpg",
      ],

      "3D Exterior": [
        "/src/assets/images/projects/3d-exterior-visualization/3d-exterior/project5-exterior-1.jpg",
        "/src/assets/images/projects/3d-exterior-visualization/3d-exterior/project5-exterior-2.jpg",
      ],

      "3D Interior": [
        "/src/assets/images/projects/3d-exterior-visualization/3d-interior/project5-interior-1.jpg",
        "/src/assets/images/projects/3d-exterior-visualization/3d-interior/project5-interior-2.jpg",
      ],
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
    image: "/src/assets/images/project6.jpg",

    categoryImages: {
      "2D Detailing": [
        "/src/assets/images/projects/structural-drawing/2d-detailing/project6-2d-1.jpg",
        "/src/assets/images/projects/structural-drawing/2d-detailing/project6-2d-2.jpg",
      ],

      "3D Exterior": [
        "/src/assets/images/projects/structural-drawing/3d-exterior/project6-exterior-1.jpg",
        "/src/assets/images/projects/structural-drawing/3d-exterior/project6-exterior-2.jpg",
      ],

      "3D Interior": [
        "/src/assets/images/projects/structural-drawing/3d-interior/project6-interior-1.jpg",
        "/src/assets/images/projects/structural-drawing/3d-interior/project6-interior-2.jpg",
      ],
    },

    software: ["AutoCAD", "Revit Architecture"],
    description:
      "A structural drawing project with detailed technical documentation.",
    slug: "structural-drawing",
  },
];

export default projects;
