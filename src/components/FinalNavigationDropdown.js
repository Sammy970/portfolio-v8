import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FinalNavigationDropdown.module.css";

const FinalNavigationDropdown = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/aboutme");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/blogs");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/courses");
  }, [navigate]);

  const onFrameButton4Click = useCallback(() => {
    navigate("/myachievements");
  }, [navigate]);

  const onFrameButton5Click = useCallback(() => {
    window.location.href = "mailto:jainsamyak2002.sj@gmail.com";
    onClose && onClose();
  }, []);

  return (
    <div className={styles.finalNavigationDropdown} data-animate-on-scroll>
      <div className={styles.menuRight}>
        <div className={styles.linksParent}>
          <div className={styles.links}>
            <button className={styles.frameParent} onClick={onFrameButtonClick}>
              <img
                className={styles.frameChild}
                alt=""
                src="../frame-19949.svg"
              />
              <button className={styles.about}>About</button>
            </button>
            <button
              className={styles.frameParent}
              onClick={onFrameButton1Click}
            >
              <img
                className={styles.frameChild}
                alt=""
                src="../frame-199410.svg"
              />
              <button className={styles.about}>Blogs</button>
            </button>
            <button
              className={styles.frameParent}
              onClick={onFrameButton2Click}
            >
              <img
                className={styles.frameChild}
                alt=""
                src="../frame-199411.svg"
              />
              <button className={styles.about}>Projects</button>
            </button>
            <button
              className={styles.frameParent}
              onClick={onFrameButton3Click}
            >
              <img
                className={styles.frameChild}
                alt=""
                src="../frame-199411.svg"
              />
              <button className={styles.about}>Courses</button>
            </button>
            <button
              className={styles.frameParent1}
              onClick={onFrameButton4Click}
            >
              <img
                className={styles.frameChild}
                alt=""
                src="../frame-199413.svg"
              />
              <button className={styles.about}>Achievements</button>
            </button>
            <button className={styles.frameParent2} onClick={onClose}>
              <img
                className={styles.frameChild}
                alt=""
                src="../frame-199414.svg"
              />
              <button className={styles.about}>Contact</button>
            </button>
          </div>
          <button className={styles.component2} onClick={onClose}>
            <div className={styles.component2Child} />
            <img className={styles.component2Item} alt="" src="../line-1.svg" />
            <div className={styles.component2Inner} />
            <img className={styles.lineIcon} alt="" src="../line-31.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalNavigationDropdown;
