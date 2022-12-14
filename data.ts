import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can support to build user Interface Using <b> HTML</b>,<b>CSS</b>,<b>Java Script</b>,<b> Bootstrap </b>,<b> Tailwind</b>,<b> React , Redux </b> and <b>Nextjs</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handling database, server, api using <b>ExpressJs </b>,<b>NodeJs </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  RESTFull APIs using <b>Postman</b>,<b>Http Request</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Data Base",
    about: "Working with NoSql database,Having knowledge about mongodb compass,mongoDb atlas,mongoose.",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Deployment",
    about:
      " Nellify,Vercel,GitHub.et.. ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Others",
    about:
      "Git,GitHub,postman,cloudinary,strip",
  },
  // {
  //   Icon: RiComputerLine,
  //   title: "Whatever",
  //   about:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  // },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML/CSS",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "React/Redux",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "NextJs",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "NodeJs",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "ExpressJs",
    level: "80",
  },
  
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "cloudinary",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "stripe",
    level: "45",
  },
 
];

export const projects: IProject[] = [
  { 
    name: "React Shopping-App",
    description:
      "This app shows a statistical Iphone Shopping carts.",
    image_path: "/images/iphone-shop-app.jpeg",
    deployed_url: "https://er-manishgupta-shopping-app.netlify.app/",
    github_url: "https://github.com/SOFTMAN387/react-shop-app",
    category: ["react"],
    key_techs: ["React", "Redux", "Bootstrap"],
  },
  {
    name: "Pizza Ordering App",
    image_path: "/images/pizza-app.jpeg",
    deployed_url: "https://github.com/SOFTMAN387/pizza-ordering-app-nextjs",
    github_url: "https://github.com/SOFTMAN387/pizza-ordering-app-nextjs",
    category: ["react"],
    description:
      "Real time ordering your pizza and tracking through your ordered pizza..",
    key_techs: ["React", "Redux", "Nextjs","Mongo"],
  },

  {
    name: "World-Ranking-App",
    image_path: "/images/worldranks.png",
    deployed_url: "https://world-ranks-mu.vercel.app/",
    github_url: "https://github.com/SOFTMAN387/world-ranks",
    category: [ "react"],
    description:
      "Checking world rank by country...",
    key_techs: [
      "Reactjs",
      "Nextjs",
      "Bootstrap",
      "tailwind",
    ],
  },
  {
    name: "React ecommerce-App",
    image_path: "/images/react-ecom.png",
    deployed_url: "https://er-manishgupta-ecommerce.netlify.app/",
    github_url: "https://github.com/SOFTMAN387/ecommerce-ui",
    category: [ "react"],
    description:
      "React eCommerce ui Design...",
    key_techs: [
      "Reactjs",
      "Redux",
      "Bootstrap",
     
    ],
  },
  {
    name: "Portfolio",
    image_path: "/images/port-app.jpeg",
    deployed_url: "https://er-manishgupta-portfolio.netlify.app/",
    github_url: "https://github.com/SOFTMAN387/react-portfolio",
    category: [ "react"],
    description:
    "Making user's landing page portfolio...",
    key_techs: [
      "React",
      "Bootstrap",
    ],
  },
  {
    name: "Covid Tracking App",
    image_path: "/images/covid-track-app.jpeg",
    deployed_url: "https://er-manishgupta-india-covid19.netlify.app/",
    github_url: "https://github.com/SOFTMAN387/covid19-india-cases",
    category: [ "react"],
    description:
      "Tracking covid-19 indian cases by states....",
    key_techs: ["React", "Api", "Bootstrap"],
  },

  {
    name: "Todo App",
    image_path: "/images/todo-app.jpeg",
    deployed_url: "https://softman387.github.io/todo_app/",
    github_url: "https://github.com/SOFTMAN387/todo_app",
    category: [ "react"],
    description:
      "Adding some list of daily based...as well as removing ...",
    key_techs: ["javascript", "Html","css"],
  },

  {
    name: "Clock Reminder App",
    image_path: "/images/clk-app.jpeg",
    deployed_url: "https://softman387.github.io/clock_reminder_app/",
    github_url: "https://github.com/SOFTMAN387/clock_reminder_app",
    category: ["react"],
    description:
      "Setting your time for break-fast...lunch as well as dinner...",
    key_techs: ["HTML", "Css", "JavaScript"],
  },
  // {
  //   name: "YouTube using YouTube ",
  //   image_path: "/images/youtubeClone.png",
  //   deployed_url: "https://not-utube.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
  //   category: ["express"],
  //   description:
  //     'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
  //   key_techs: [
  //     "React",
  //     "Redux",
  //     "Firebase Auth",
  //     "YouTube API",
  //     "Sass",
  //     "Bootstrap",
  //   ],
  // },
  // {
  //   name: "Football App",
  //   image_path: "/images/football.png",
  //   deployed_url: "https://o-my-goal.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/football-app",
  //   category: ["react"],
  //   description:
  //     "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
  //   key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
 // },
];
