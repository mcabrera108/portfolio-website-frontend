import style from "../style_modules/component_modules/projects.module.css";
import placeholder from "../assets/placeholder-image.jpg";
function ProjectCard(props) {
  return (
    <div className={style.projectCardContainer}>
      <img
        src={`${props.projectInstance.linkImg}`}
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
          <a href={props.projectInstance.codelink} target="_blank">
            CODE
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
