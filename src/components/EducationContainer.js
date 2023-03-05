import EducationCard from "../components/EducationCard";
import styles from "./EducationContainer.module.css";

const EducationContainer = () => {
  return (
    <div className={styles.educationcards}>
      <div className={styles.educationCards}>
        <img
          className={styles.collegeImageIcon}
          alt=""
          src="../college-image@2x.png"
        />
        <div className={styles.collegeDetails}>
          <b className={styles.collegeName}>
            Vishwakarma Institute of Technology, Pune
          </b>
          <b className={styles.branchName}>
            Bachelors Degree in Instrumentation and Control Engineering
          </b>
          <b className={styles.branchNameFor}>
            B.TECH in Instrumentation and Control Engineering
          </b>
          <b className={styles.year}>2020 - 2024</b>
        </div>
      </div>
      <EducationCard
        educationImageUrl="../college-image1@2x.png"
        educationInstitutionName="Vidya Prasarak Mandal Polytechnic, Thane"
        educationDegreeName="Diploma in Instrumentation Engineering"
        educationYear="2018 - 2020"
      />
      <EducationCard
        educationImageUrl="../college-image2@2x.png"
        educationInstitutionName="St John the Baptist High School and Junior College, Thane"
        educationDegreeName="SSC (Class X)"
        educationYear="2018"
      />
    </div>
  );
};

export default EducationContainer;
