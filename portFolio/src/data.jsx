import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaNode } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "NodeJS",
    icon: <FaNode className="h-16 w-16 text-emerald-500" />,
    text: "Able to utilise NodeJS in order to create scalable web-servers & apis. Also skilled in various libraries & frameworks including ExpressJS, Multer, Mongoose ",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "src/assets/project images/calculatorProject.jpg",
    url: "https://coruscating-arithmetic-04e021.netlify.app/",
    github: "https://github.com/shaikhsaquib422/codsoft/tree/main/calculator",
    title: "Calculator App",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "src/assets/project images/cryptoChange.png",
    url: "https://65a3779848eafc3e76a3a03a--magenta-speculoos-d0e0a7.netlify.app/",
    github: "https://github.com/shaikhsaquib422/codsoft/tree/main/landingPage",
    title: "Landing Page",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "src/assets/project images/craftyCoder.png",
    url: "#",
    github: "#",
    title: "Crafty Coder",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
