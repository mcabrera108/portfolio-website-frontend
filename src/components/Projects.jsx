import Layout from "./Layout";
import style from "../style_modules/component_modules/projects.module.css";
import sectionStyle from "../style_modules/component_modules/section.module.css";
import ProjectCard from "./ProjectCard";
import projectList from "../scripts/projectList";
function Projects() {
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
