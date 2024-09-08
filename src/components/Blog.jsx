import Layout from "./Layout";
import style from "../style_modules/component_modules/section.module.css";
import blogContainer from "../style_modules/component_modules/blog.module.css";
import blogEntries from "../scripts/blogEntries";
import BlogEntry from "./BlogEntry";
function Blog() {
  return (
    <Layout>
      <section className={style.sectionBanner}>
        <div className={style.sectionTitleContainer}>
          <h1 className={style.heroShortTitle}>Blog</h1>
        </div>
        <div className={blogContainer.blogContainer}>
          {blogEntries.map((blog) => {
            return <BlogEntry blogEntry={blog} key={blog.blogID} />;
          })}
        </div>
      </section>
    </Layout>
  );
}
export default Blog;
