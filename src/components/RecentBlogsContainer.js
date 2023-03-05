import { useCallback } from "react";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import styles from "./RecentBlogsContainer.module.css";

const RecentBlogsContainer = () => {
  const navigate = useNavigate();

  const onReadMoreClick = useCallback(() => {
    window.open(
      "https://medium.com/the-modern-scientist/designing-and-implementing-a-voice-controlled-roller-blind-part-2-a726b7ed7887"
    );
  }, []);

  const onReadMore1Click = useCallback(() => {
    window.open(
      "https://medium.com/the-modern-scientist/designing-and-implementing-a-voice-controlled-roller-blind-part-1-82e8014317f0"
    );
  }, []);

  const onFrameButton3Click = useCallback(() => {
    navigate("/blogs");
  }, [navigate]);

  return (
    <div className={styles.finalNewBlogs}>
      <div className={styles.recentBlogsParent}>
        <b className={styles.recentBlogs}>Recent Blogs</b>
        <img className={styles.image6Icon} alt="" src="../image-65@2x.png" />
      </div>
      <BlogCard
        blogDate="January 26, 2023"
        blogTitle="Designing and implementing a voice-controlled roller blind [Part-2]"
        blogShortDesc="This is the second part of my previous article. Last time we completed with coding our NodeMCU. Now we will continue further and complete...."
        onReadMoreClick={onReadMoreClick}
      />
      <BlogCard
        blogDate="January 26, 2023"
        blogTitle="Designing and implementing a voice-controlled roller blind [Part-1]"
        blogShortDesc="Today, we will be designing a system that can open or close the roller blind. This will be done with the help of NodeMCU, Blynk and IFTTT....."
        onReadMoreClick={onReadMore1Click}
      />
      <button className={styles.frameParent} onClick={onFrameButton3Click}>
        <img className={styles.frameChild} alt="" src="../frame-199433.svg" />
        <button className={styles.checkOutMoreContainer}>
          <span className={styles.checkOutMore}>{`Check out more `}</span>
          <b className={styles.checkOutMore}>blogs</b>
          <span className={styles.checkOutMore}>...</span>
        </button>
      </button>
    </div>
  );
};

export default RecentBlogsContainer;
