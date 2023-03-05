import { useCallback } from "react";
import styles from "./PCB.module.css";

const PCB = ({ onClose }) => {
  const onReadMoreClick = useCallback(() => {
    window.open(
      "https://medium.com/the-modern-scientist/yolov8-training-on-custom-data-3460f922ce86"
    );
  }, []);

  return (
    <div className={styles.pcb}>
      <img className={styles.pcbIcon} alt="" src="../1-pcb@2x.png" />
      <button className={styles.readMore} onClick={onReadMoreClick}>
        <b className={styles.readMore1}>Read More on Medium</b>
      </button>
    </div>
  );
};

export default PCB;
