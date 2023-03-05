import styles from "./EducationCard.module.css";

const EducationCard = ({
  educationImageUrl,
  educationInstitutionName,
  educationDegreeName,
  educationYear,
}) => {
  return (
    <div className={styles.educationCards}>
      <img className={styles.collegeImageIcon} alt="" src={educationImageUrl} />
      <div className={styles.collegeDetails}>
        <b className={styles.collegeName}>{educationInstitutionName}</b>
        <b className={styles.branchName}>{educationDegreeName}</b>
        <b className={styles.year}>{educationYear}</b>
      </div>
    </div>
  );
};

export default EducationCard;
