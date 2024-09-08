import style from "../style_modules/component_modules/blog.module.css";
function BlogEntry(props) {
  return (
    <div className={style.blogContainer}>
      <div className={style.blogTitleContainer}>
        {props.blogEntry.blogTitle}
      </div>
      <div className={style.blogDescriptionContainer}>
        <div className={style.blogDateContainer}></div>
      </div>
    </div>
  );
}
export default BlogEntry;
