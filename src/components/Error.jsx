import Layout from "./Layout";
import style from "../style_modules/component_modules/section.module.css";

function Error() {
  return (
    <Layout>
      <div className={style.sectionBanner}>
        <div className={style.heroContainer}>
          <h1>Error 404. Page Not Found :(</h1>
        </div>
      </div>
    </Layout>
  );
}
export default Error;
