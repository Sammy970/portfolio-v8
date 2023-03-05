import { useCallback } from "react";
import styles from "./ContactMeContainer.module.css";

const ContactMeContainer = () => {
  const onLinkedInBtnClick = useCallback(() => {
    window.open("https://www.linkedin.com");
  }, []);

  const onMediumBtnClick = useCallback(() => {
    window.open("https://samyak970.medium.com");
  }, []);

  const onGithubBtnClick = useCallback(() => {
    window.open("https://github.com/Sammy970");
  }, []);

  return (
    <div className={styles.finalContactMeSection}>
      <div className={styles.finalContactMeSectionInner}>
        <div className={styles.image4Parent}>
          <img className={styles.image4Icon} alt="" src="../image-4@2x.png" />
          <button className={styles.linkedinbtn} onClick={onLinkedInBtnClick}>
            <img
              className={styles.iconssocial}
              alt=""
              src="../iconssocial.svg"
            />
            <img
              className={styles.linkedinIcon}
              alt=""
              src="../-linkedin.svg"
            />
            <b className={styles.linkedin}>LinkedIn</b>
            <b className={styles.github}>Read More</b>
            <img className={styles.mediumIcon} alt="" src="../-medium6.svg" />
            <b className={styles.github}>Medium</b>
            <b className={styles.github}>Read More</b>
          </button>
          <button className={styles.mediumbtn} onClick={onMediumBtnClick}>
            <img
              className={styles.iconssocial}
              alt=""
              src="../iconssocial1.svg"
            />
            <img
              className={styles.linkedinIcon1}
              alt=""
              src="../-linkedin1.svg"
            />
            <b className={styles.github}>LinkedIn</b>
            <b className={styles.github}>Read More</b>
            <img className={styles.mediumIcon1} alt="" src="../-medium7.svg" />
            <b className={styles.linkedin}>Medium</b>
            <b className={styles.github}>Read More</b>
          </button>
          <button className={styles.linkedinbtn} onClick={onGithubBtnClick}>
            <img
              className={styles.iconssocial2}
              alt=""
              src="../iconssocial2.svg"
            />
            <img
              className={styles.linkedinIcon1}
              alt=""
              src="../-linkedin2.svg"
            />
            <b className={styles.github}>LinkedIn</b>
            <b className={styles.linkedin}>Github</b>
            <img className={styles.mediumIcon} alt="" src="../-medium8.svg" />
            <b className={styles.github}>Medium</b>
            <b className={styles.github}>Read More</b>
          </button>
          <img className={styles.image5Icon} alt="" src="../image-41@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default ContactMeContainer;
