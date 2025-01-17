/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import style from "../style_modules/component_modules/header.module.css";
import NavOpt from "./NavOpt";

function Header() {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <header className={style.headerContainer}>
      <div className={style.headerWrapper}>
        <a className={style.logoContainer} href="/">
          Martin Cabrera
        </a>
        <nav
          className={`${style.navigationMenu} + ${
            toggle ? style.active : style.notActive
          }`}
        >
          <ul className={style.navList}>
            <NavOpt navLink="/" navName="Home" />
            <NavOpt navLink="/projects" navName="Projects" />
            <NavOpt navLink="/contact" navName="Contact" />
          </ul>
        </nav>
        <div
          className={`${style.navAuthContainer} + ${
            toggle ? style.active : style.notActive
          }`}
        ></div>
      </div>
      <a className={style.iconBurger} onClick={handleToggle}>
        <span className={style.line}></span>
        <span className={style.line}></span>
        <span className={style.line}></span>
      </a>
    </header>
  );
}
export default Header;
