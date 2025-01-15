import { v4 as uuidv4 } from "uuid";
const projectList = [
  {
    title: "Figure-Chan App",
    description:
      "Full Stack forum application for discussing anime figures and comic statues built with React, Node.js Express.js, MongoDB, and Passport.js.",
    link: "https://figure-chan.netlify.app/",
    codelink: "https://github.com/mcabrera108/figure-chan-frontend",
    projectKey: uuidv4(),
    linkImg: "https://i.imgur.com/56iCTrO.png",
  },
  {
    title: "Vidya Game Shop",
    description:
      "Online Video Game Retail Shop built with React, Node.js, Express.js, and MongoDB.",
    link: "",
    codelink: "",
    projectKey: uuidv4(),
    linkImg: "",
  },
  {
    title: "My To-Do List",
    description:
      "Frontend productivity app that keeps track of tasks with custom folders and notes. Built with React.",
    link: "https://todolist-mcabrera108.netlify.app/",
    codelink: "https://github.com/mcabrera108/my-to-do-list",
    projectKey: uuidv4(),
    linkImg: "https://imgur.com/ikgvP99.jpg",
  },
  {
    title: "Weather App",
    description:
      "Frontend weather app that displays weather data using the WeatherAPI. Built with React.",
    link: "",
    codelink: "",
    projectKey: uuidv4(),
    linkImg: "",
  },
];
export default projectList;
