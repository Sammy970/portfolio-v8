import styles from "./BlogCard.module.css";

const BlogCard = ({ blogDate, blogTitle, blogShortDesc, onReadMoreClick }) => {
  return (
    <div className={styles.blogcard}>
      <div className={styles.date}>{blogDate}</div>
      <div className={styles.blogTitle}>{blogTitle}</div>
      <div className={styles.blogShortDesc}>{blogShortDesc}</div>
      <button className={styles.readMore} onClick={onReadMoreClick}>
        <img className={styles.mediumIcon} alt="" src="../-medium.svg" />
        <img className={styles.githubIcon} alt="" src="../-github.svg" />
        <b className={styles.readMore1}>Read More</b>
      </button>
    </div>
  );
};

export default BlogCard;
