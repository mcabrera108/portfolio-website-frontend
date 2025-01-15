import style from "../style_modules/component_modules/section.module.css";
import officeSpace from "../assets/office-space.gif";

function About() {
  return (
    <section className={style.sectionBanner}>
      <div className={style.aboutContainer}>
        <div>
          <div className={style.aboutContainerTitle}>About</div>
        </div>
        <div className={style.aboutDescWrapper}>
          <div className={style.aboutDescContainer}>
            Hello! My name is Martin and I'm a Houston based Software Engineer
            and Full-Stack Web Developer. I graduated from the University of
            Houston in 2019 with a major in Computer Science B.S and a minor in
            Mathematics. I have been working in the industry for 5+ years and
            develop a variety of web applications in my free time. I am always
            seeking to expand my skills and learn from those in the industry. My
            tech stack focuses on React, Node.js, and MongoDB, but I am also
            proficient with a variety of other languages! Please take a look at
            my resume below for latest updates.
          </div>
          <div className={style.aboutImgContainer}>
            <img src={officeSpace} alt="" />
          </div>
        </div>

        <div className={style.resumeDownloadContainer}>
          <a
            href="src/assets/react.svg"
            className={style.resumeDownloadLink}
            download
          >
            Download My Resume!
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
