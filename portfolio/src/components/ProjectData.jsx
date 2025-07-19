const projects = [
  {
    id: 1,
    title: "HavenHue",
    description: "Full‑stack e‑commerce for home décor using React, Tailwind & Django REST. Shop products, manage cart & orders, with admin panel.",
    imgSrc: [
      "/Project-images/HavenHue landing page.png",
    ],
    repo: "https://github.com/banju-che/HavenHue",
    details: "This fullstack app includes JWT auth, product listings, shopping cart, order management, and admin panel built with DRF and React.",
    techStack: ["React", "TailwindCSS", "Django", "Django REST Framework", "JWT", "SQLite"],
    features: [
      "User authentication (JWT)",
      "Product listings",
      "Shopping cart operations",
      "Order management",
      "Admin panel"
    ]
  },
  {
    id: 2,
    title: "Inkspire Library",
    description: "Library management app with user roles, book borrow/return features, built with React frontend + Django backend.",
    imgSrc: ["/Project-images/inkspire/hero.png"],
    repo: "https://github.com/banju-che/Inkspire-library",
    details: "Manages book catalog, borrowing system, and users with different roles. Uses DRF for backend APIs and React for the interface.",
    techStack: ["React", "Django", "Django REST Framework", "JWT"],
    features: [
      "Book catalog",
      "User roles",
      "Borrow and return flow",
      "Admin panel for managing users and books"
    ]
  },
  {
    id: 3,
    title: "Grocery Web App",
    description: "Vanilla JS grocery store interface with product listing and cart functionality — simple e‑commerce demo.",
    imgSrc: ["/Project-images/Password generator.png"],
    repo: "https://github.com/banju-che/Grocery",
    details: "Static project for practice with DOM manipulation. Demonstrates add-to-cart and quantity adjustment using pure JS.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Add to cart",
      "Update quantity",
      "Responsive layout"
    ]
  },
  {
    id: 4,
    title: "Count Down Timer",
    description: "A simple and elegant countdown timer built with React, ideal for events or reminders.",
    imgSrc: ["/Project-images/CountDown.png"],
    repo: "https://github.com/banju-che/count-down-timer",
    details: "This React-based app allows users to set a future date and time to count down to, updating dynamically. Designed for simplicity and clean UI.",
    techStack: ["React", "CSS"],
    features: [
      "Set target date and time",
      "Real-time countdown display",
      "Responsive design"
    ]
  },
  {
    id: 5,
    title: "Vibin - Instagram Clone",
    description: "A full-featured Instagram clone with TikTok-style video feed integration, built for sharing photos, reels, and interacting via likes and comments.",
    imgSrc: [
      "/Project-images/vibin/vibin-home.png",
    ], 
    repo: "https://github.com/banju-che/vibin",
    details: "Vibin is a social media app that mimics Instagram's UI and functionality, enhanced with a TikTok-like video section. It supports image/video uploads, real-time interactions, and user authentication.",
    techStack: ["Django", "React", "Tailwind", "Framer Motion", "JWT", "Cloudinary"],
    features: [
      "Upload and display images & videos",
      "Reels with infinite scroll and autoplay",
      "Like, comment, and share functionality",
      "JWT-based user authentication system",
      "Mobile-responsive design",
      "Interactive UI with Framer Motion animations",
      "Profile and sidebar navigation system",
      "Media handling using Cloudinary"
    ]
  },
  
  {
    id: 6,
    title: "Planth - Task Manager",
    description: "A productivity web app themed around plant growth. Track tasks through To Do, In Progress, In Review, and Done columns.",
    imgSrc: ["/Project-images/planth/hero.png"],
    repo: "https://github.com/banju-che/planth",
    details: "Planth helps users manage tasks visually, inspired by plant growth. Built with a React frontend, Django REST API backend, and styled with TailwindCSS and Framer Motion.",
    techStack: ["React", "TailwindCSS", "Framer Motion", "Django", "Django REST Framework", "JWT"],
    features: [
      "JWT-authenticated user accounts",
      "Drag-and-drop task management",
      "Dynamic dashboard with task categories",
      "Beautiful animations with Framer Motion",
      "Mobile-responsive interface"
    ]
  }

];

export default projects;
