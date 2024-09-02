import Header from "./Header";
import Footer from "./Footer";
import style from "../style_modules/component_modules/layout.module.css";
function Layout({ children }) {
  return (
    <>
      <div className={style.parentContainer}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
