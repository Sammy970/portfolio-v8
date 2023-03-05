import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  projectImageUrl,
  projectDescription,
  projectName,
  projectNameForPhone,
  openPCBPopup,
}) => {
  return (
    <div className={styles.projectcard}>
      <div className={styles.topprojectcard}>
        <div className={styles.maskGroup}>
          <img className={styles.image10Icon} alt="" src={projectImageUrl} />
        </div>
        <div className={styles.pcbDefectDetectionUsingYolParent}>
          <div className={styles.pcbDefectDetection}>{projectDescription}</div>
          <div className={styles.pcbDefectDetection1} onClick={openPCBPopup}>
            {projectName}
          </div>
          <div className={styles.pcbDefectDetectionSystemUsWrapper}>
            <div className={styles.pcbDefectDetection2}>
              {projectNameForPhone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
