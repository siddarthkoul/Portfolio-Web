import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FoodelImg from "@/public/Foodel.png";
import ChatAppImg from "@/public/Chat.png";
import { SiPeakdesign } from "react-icons/si";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer Intern",
    company: "Cuvette Tech",
    location: "Bangalore, Remote",
    description:
      "During my 4-month front-end dev internship, I immersed myself in projects leveraging MongoDB, ExpressJS, NodeJs, and ReactJS. From dynamic user interfaces to seamless backend integrations, I honed skills across the MERN stack, fostering readiness for impactful contributions in web development with a focus on front-end excellence.",
    icon: React.createElement(SiPeakdesign),
    date: "Jan 24 - Apr 24",
  },
  {
    title: "Web Developer Intern",
    company: "Exposys Data Labs",
    location: "Bangalore, Remote",
    description:
      "In my dynamic 1-month internship, I spearheaded a Mass-Mail Dispatcher project, seamlessly integrating React.js for front-end functionality and Express.js for robust backend support. This intensive experience fortified my skills in both frameworks, showcasing my ability to deliver impactful solutions in a short timeframe.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 22 - Feb 22",
  },

] as const;

export const projectsData = [
  {
    title: "Foodel",
    description:
      "I crafted a food delivery app, integrating restaurant management features and real-time delivery tracking for streamlined operations.",
    tags: ["React", "MongoDB", "Tailwind", "Express","NodeJs", "Auth0"],
    imageUrl: FoodelImg,
  },
  {
    title: "Chat App",
    description:
      "A real-time chat app engineered to foster seamless communication and interaction between users for enhanced connectivity.",
    tags: ["React","Express","socket.io","MongoDb","JWt","NodeJS"],
    imageUrl: ChatAppImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Auth0",
  "Bootstrap",
  "JWT",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
