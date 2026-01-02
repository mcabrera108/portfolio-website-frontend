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
        <div style={{ color: "white" }}>
          Update 12/31/2025: Hello! Thanks for taking a look at my old portfolio
          page. My website and projects will be undergoing major updates in the
          upcoming weeks. Stay tuned for more!
        </div>
      </section>
      <About />
    </>
  );
}
export default HomeBanner;
