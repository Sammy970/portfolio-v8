import { useState, useCallback } from "react";
import PCB from "../components/PCB";
import PortalPopup from "../components/PortalPopup";
import TextUtils from "../components/TextUtils";
import ProjectCard from "../components/ProjectCard";
import { useNavigate } from "react-router-dom";
import styles from "./NewProjectsContainer.module.css";

const NewProjectsContainer = () => {
  const [isPCBPopupOpen, setPCBPopupOpen] = useState(false);
  const [isTextUtilsPopupOpen, setTextUtilsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openPCBPopup = useCallback(() => {
    setPCBPopupOpen(true);
  }, []);

  const closePCBPopup = useCallback(() => {
    setPCBPopupOpen(false);
  }, []);

  const openTextUtilsPopup = useCallback(() => {
    setTextUtilsPopupOpen(true);
  }, []);

  const closeTextUtilsPopup = useCallback(() => {
    setTextUtilsPopupOpen(false);
  }, []);

  const onFrameButton4Click = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  return (
    <>
      <div className={styles.finalNewProjects}>
        <div className={styles.newProjectsParent}>
          <b className={styles.newProjects}>New Projects</b>
          <img className={styles.image6Icon} alt="" src="../image-65@2x.png" />
        </div>
        <ProjectCard
          projectImageUrl="../image-101@2x.png"
          projectDescription="PCB Defect Detection using YOLOv8"
          projectName="PCB Defect Detection using YOLOv8"
          projectNameForPhone="PCB Defect Detection system using YOLOv8. Achieved an accuracy of 95.2%. The system is capable of detecting various types of defects on printed circuit boards, such as short circuits, open circuits, and component misplacements. "
          openPCBPopup={openPCBPopup}
        />
        <ProjectCard
          projectImageUrl="../image-81@2x.png"
          projectDescription="Text Utility App"
          projectName="Text Utility App"
          projectNameForPhone="Developed a Text Utility App using ReactJS that provides users with a web-based platform for formatting text. The app includes features like converting text to uppercase, lowercase, and capitalizing the first word, as well as a clear function to reset the text."
          openPCBPopup={openTextUtilsPopup}
        />
        <button className={styles.frameParent} onClick={onFrameButton4Click}>
          <img className={styles.frameChild} alt="" src="../frame-199433.svg" />
          <button className={styles.checkOutMoreContainer}>
            <span className={styles.checkOutMore}>{`Check out more `}</span>
            <b className={styles.checkOutMore}>projects</b>
            <span className={styles.checkOutMore}>...</span>
          </button>
        </button>
      </div>
      {isPCBPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePCBPopup}
        >
          <PCB onClose={closePCBPopup} />
        </PortalPopup>
      )}
      {isTextUtilsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTextUtilsPopup}
        >
          <TextUtils onClose={closeTextUtilsPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default NewProjectsContainer;
