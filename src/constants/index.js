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
    express
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
      name: "PostMan",
      icon: postman,
    },

    {
      name: "git",
      icon: git,
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
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  