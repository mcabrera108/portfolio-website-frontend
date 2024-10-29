import style from "../style_modules/component_modules/section.module.css";
import About from "./About";

function HomeBanner() {
  return (
    <>
      <section className={style.heroBanner}>
        <div className={style.heroContainer}>
          <div className={style.heroTitle}>Hello! I'm Martin</div>
        </div>
        <div className={style.heroContainer}>
          <div className={style.heroSubTitle}>Software Engineer</div>
        </div>
      </section>
      <About />
    </>
  );
}
export default HomeBanner;
