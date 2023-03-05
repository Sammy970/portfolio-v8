import styles from "./SketchCertificate.module.css";

const SketchCertificate = ({ onClose }) => {
  return (
    <div className={styles.sketchcertificate}>
      <img
        className={styles.certificatesPortfolio21}
        alt=""
        src="../certificates-portfolio-2-1@2x.png"
      />
    </div>
  );
};

export default SketchCertificate;
