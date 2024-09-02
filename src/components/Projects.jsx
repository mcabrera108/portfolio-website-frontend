import Layout from "./Layout";
import style from "../style_modules/component_modules/projects.module.css";
import sectionStyle from "../style_modules/component_modules/section.module.css";
import ProjectCard from "./ProjectCard";
import { v4 as uuidv4 } from "uuid";
function Projects() {
  const projectList = [
    {
      title: "Figure-Chan App",
      description:
        "Full Stack forum application for discussing anime figures and comic statues built with React, Node.js Express.js, MongoDB, Passport.js, and Socket.io.",
      link: "https://www.amiami.com/eng/?srsltid=AfmBOorbZ1stdlezon4F2QNStc4BuGcgGneThz7RYYBqrxY2POxTj186",
      projectKey: uuidv4(),
    },
    {
      title: "Echo Messaging App",
      description:
        " Instant group messaging app built with React, Node.js, Express.js, MongoDB, Passport.js, and Socket.io.",
      link: "",
      projectKey: uuidv4(),
    },
    {
      title: "Vidya Game Shop",
      description:
        "Online Video Game Retail Shop built with React, Node.js, Express.js, and MongoDB.",
      link: "",
      projectKey: uuidv4(),
    },
    {
      title: "My To-Do List",
      description:
        "Frontend productivity app that keeps track of tasks with custom folders and notes. Built with React.",
      link: "",
      projectKey: uuidv4(),
    },
    {
      title: "Weather App",
      description:
        "Frontend weather app that displays weather data using the WeatherAPI. Built with React.",
      link: "",
      projectKey: uuidv4(),
    },
  ];
  return (
    <Layout>
      <section className={sectionStyle.sectionBanner}>
        <div className={sectionStyle.sectionTitleContainer}>
          <h1 className={sectionStyle.heroTitle}>Projects</h1>
        </div>
        <div className={style.projectContainer}>
          {projectList.map((projects) => {
            return (
              <ProjectCard
                projectInstance={projects}
                key={projects.projectKey}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
export default Projects;
