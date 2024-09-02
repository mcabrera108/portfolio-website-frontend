import style from "../style_modules/component_modules/projects.module.css";
function ProjectCard(props) {
  return (
    <div className={style.projectCardContainer}>
      <img
        src="src/assets/placeholder-image.jpg"
        className={style.cardImageContainer}
      />
      <div className={style.projectCardBottomContainer}>
        <div className={style.projectCardTitleContainer}>
          <h1>{props.projectInstance.title}</h1>
        </div>
        <div className={style.projectCardDescContainer}>
          <p>{props.projectInstance.description}</p>
        </div>
      </div>
      <div className={style.projectCardRedirectContainer}>
        <div className={style.projectLiveAppContainer}>
          <a href={props.projectInstance.link} target="_blank">
            LIVE APP
          </a>
        </div>
        <div className={style.projectLiveAppContainer}>
          <a href={props.projectInstance.link} target="_blank">
            CODE
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
