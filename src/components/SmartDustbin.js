import styles from "./SmartDustbin.module.css";

const SmartDustbin = ({ onClose }) => {
  return (
    <div className={styles.smartdustbin}>
      <img
        className={styles.smartdustbinIcon}
        alt=""
        src="../9-smartdustbin@2x.png"
      />
    </div>
  );
};

export default SmartDustbin;
