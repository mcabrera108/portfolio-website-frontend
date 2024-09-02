import style from "../style_modules/component_modules/section.module.css";

function HomeBanner() {
  return (
    <section className={style.heroBanner}>
      <div className={style.heroContainer}>
        <h1 className={style.heroTitle}>Hello! I'm Martin</h1>
        <h2 className={style.heroSubTitle}>Software Engineer</h2>
      </div>
    </section>
  );
}
export default HomeBanner;
