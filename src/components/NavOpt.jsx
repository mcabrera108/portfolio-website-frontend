import style from "../style_modules/component_modules/header.module.css";
function NavOpt(props) {
  return (
    <li>
      <a className={style.navOption} href={props.navLink}>
        {props.navName}
      </a>
    </li>
  );
}
export default NavOpt;
