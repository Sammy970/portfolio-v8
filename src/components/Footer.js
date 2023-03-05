import { useMemo } from "react";
import styles from "./Footer.module.css";

const Footer = ({
  propWidth,
  onGithubClick,
  onMediumClick,
  onLinkedinClick,
}) => {
  const groupIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.footer}>
      <div className={styles.footerLinksParent}>
        <div className={styles.footerLinks}>
          <div className={styles.samyakjainParent}>
            <img
              className={styles.samyakjainIcon}
              alt=""
              src="../samyakjain@2x.png"
            />
            <div className={styles.copyrightInformation}>
              © 2023, Samyak Jain. All Rights Reserved.
            </div>
          </div>
        </div>
        <div className={styles.socialIcons}>
          <button className={styles.github} onClick={onGithubClick}>
            <img
              className={styles.groupIcon}
              alt=""
              src="../group.svg"
              style={groupIconStyle}
            />
          </button>
          <button className={styles.medium} onClick={onMediumClick}>
            <img className={styles.groupIcon1} alt="" src="../group1.svg" />
          </button>
          <button className={styles.linkedin} onClick={onLinkedinClick}>
            <div className={styles.linkedinChild} />
            <img
              className={styles.linkedinLogoIcon}
              alt=""
              src="../linkedin-logo.svg"
            />
          </button>
        </div>
        <div className={styles.samyakJain}>© 2023 Samyak Jain</div>
      </div>
    </div>
  );
};

export default Footer;
