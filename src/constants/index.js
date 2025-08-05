import {
    mobile,
    backend,
    creator,
    web,


    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,

    docker,

    company,

    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    jenkins,
    laravel,
    postman,
    linux,
    express,
    furniflex,
    githubExplorer,
    electronicGoddies,
    imagetextify,
    instantBoard,
    qualfixFab,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Automation Specialist",
      icon: creator,
    },
  ];
  
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "ExpressJs",
      icon: express,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
   
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Jenkins",
      icon: jenkins,
    },
    
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "linux",
      icon: linux,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "QUALFIX",
      icon: qualfixFab,
      iconBg: "#383E56",
      date: "August 2025",
      points : [
        "Joined as a Software Engineer focused on web and mobile application development; currently contributing to feature implementation, UI improvements.",
    ]
    
    },
    {
      title: "Software Engineer",
      company_name: "ALBA ENTERPRISES",
      icon: company,
      iconBg: "#383E56",
      date: "Feb 2022 - Jan 2024",
      points : [
        "Designed and developed over 50 test automation scripts using Selenium, Puppeteer, and Browser Automation Studio, reducing manual testing time by 40%.",
        "Compiled and reported over 200 comprehensive bug findings, verified bug fixes across multiple environments, leading to a 30% reduction in post-release defects.",
        "Coordinated software releases and promoted releases across environments.",
        "Worked collaboratively with QA Analysts and Software Developers using agile processes, GIT, and JIRA."
    ]
    
    }
   
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },

  ];
  
  const projects = [
    {
      name: "InstantBoard",
      description:
        "🚀 A C++ application utilizing sockets and OpenGL to create a real-time collaborative whiteboard. ✏️ Seamless drawing and interaction across connected devices!",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "OpenGL",
          color: "green-text-gradient",
        },
        {
          name: "Winsock",
          color: "pink-text-gradient",
        },
      ],
      image: instantBoard,
      source_code_link: "https://github.com/Udoy2/InstantBoard",
    },
    {
      name: "StudioShafaat-Portfolio",
      description:
        "🌐 A sleek Portfolio website crafted with HTML, CSS, and JavaScript. 🎨 Showcasing dynamic projects and interactive design. 🚀 Responsive and optimized for all devices.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Udoy2/studioshafaat-laravel",
    },
    {
      name: "Car Sell",
      description:
        "AutoQ.ng connects buyers to a wide range of new and used cars in Nigeria 🚗, featuring verified dealers and affordable pricing options 💸. It also offers car loans and a platform to sell your car easily.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Mysql",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://autoq.ng/cars-for-sale",
    },
    {
      name: "Tech Summit",
      description:
        "🌐 Tech Summit is a powerful learning management system (LMS) built with React and Laravel. 🚀 It provides a seamless platform for educational institutions to manage courses, students, and resources. 📚",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Html-css",
          color: "green-text-gradient",
        },
        {
          name: "Laravel",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://guileless-sunshine-9e2b2a.netlify.app/",
    },
    {
      name: "FurniFlex",
      description:
        "🌟 FurniFlex: A sleek React-based e-commerce app with product listings, cart management, and user authentication! 🛒💻",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Talwind",
          color: "green-text-gradient",
        },
        
      ],
      image: furniflex,
      source_code_link: "https://github.com/Udoy2/FurniFlex",
    },
    {
      name: "ElectronicGoodies",
      description:
        "This project is an ASP.NET MVC application designed to provide a seamless shopping experience for electronic products.🎯✅",
      tags: [
        {
          name: "Asp-net-core-mvc",
          color: "blue-text-gradient",
        },
        {
          name: "Html-css",
          color: "green-text-gradient",
        },
        {
          name: "Sql",
          color: "pink-text-gradient",
        },
      ],
      image: electronicGoddies,
      source_code_link: "https://github.com/Udoy2/ElectronicGoodies",
    },
    {
      name: "GitHub Explorer",
      description:
        "🚀 React app to fetch and display GitHub user details. 🔍 Explore profiles effortlessly!",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Html-css",
          color: "green-text-gradient",
        },
      ],
      image: githubExplorer,
      source_code_link: "https://github.com/Udoy2/GitHub-User-Explorer",
    },
    
    {
      name: "📸 imageTextify",
      description:
        "A lightweight OCR tool powered by FastAPI and PaddleOCR for extracting text from images. Fast, accurate, and Docker-friendly! 📸✨",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "FastApi",
          color: "green-text-gradient",
        },
        {
          name: "PaddleOCR",
          color: "blue-text-gradient",
        },
      ],
      image: imagetextify,
      source_code_link: "https://github.com/Udoy2/ImageTextify",
    },
  ];

  const socials = {
    github: "https://github.com/Udoy2",
    facebook: "https://www.facebook.com/parenthisis/",
    instagram: "https://www.instagram.com/parenthisis/",
    linkendin: "https://www.linkedin.com/in/mahmudur-rahman-728a27264"
  }
  
  export { services, technologies, experiences, testimonials, projects,socials };
  