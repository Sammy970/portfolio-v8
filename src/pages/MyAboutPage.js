import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LinksDropdown from "../components/LinksDropdown";
import PortalPopup from "../components/PortalPopup";
import FinalNavigationDropdown from "../components/FinalNavigationDropdown";
import PortalDrawer from "../components/PortalDrawer";
import NavBar from "../components/NavBar";
import EducationContainer from "../components/EducationContainer";
import Footer from "../components/Footer";
import styles from "./MyAboutPage.module.css";

const MyAboutPage = () => {
  const navigate = useNavigate();
  const [isLinksDropdownPopupOpen, setLinksDropdownPopupOpen] = useState(false);
  const [isFinalNavigationDropdownOpen, setFinalNavigationDropdownOpen] =
    useState(false);

  const onPortfolioLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openLinksDropdownPopup = useCallback(() => {
    setLinksDropdownPopupOpen(true);
  }, []);

  const closeLinksDropdownPopup = useCallback(() => {
    setLinksDropdownPopupOpen(false);
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.location.href = "mailto:jainsamyak2002.sj@gmail.com";
  }, []);

  const openFinalNavigationDropdown = useCallback(() => {
    setFinalNavigationDropdownOpen(true);
  }, []);

  const closeFinalNavigationDropdown = useCallback(() => {
    setFinalNavigationDropdownOpen(false);
  }, []);

  const onGithubClick = useCallback(() => {
    window.open("https://github.com/Sammy970/");
  }, []);

  const onMediumClick = useCallback(() => {
    window.open("https://samyak970.medium.com/");
  }, []);

  const onLinkedinClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/samyak-jain-3a6639172/");
  }, []);

  return (
    <>
      <div className={styles.myaboutpage}>
        <NavBar
          onPortfolioLogoClick={onPortfolioLogoClick}
          openLinksDropdownPopup={openLinksDropdownPopup}
          onFrameButton2Click={onFrameButton2Click}
          openFinalNavigationDropdown={openFinalNavigationDropdown}
        />
        <div className={styles.aboutpage}>
          <div className={styles.headingText}>
            <b className={styles.aboutMe}>About Me</b>
            <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
          </div>
          <div className={styles.abouttext}>
            <div className={styles.iAmCurrentlyContainer}>
              <p className={styles.iAmCurrentlyA3rdYearEngi}>
                <span
                  className={styles.iAmCurrently}
                >{`I am currently a 3rd Year Engineering student of `}</span>
                <span className={styles.vishwakarmaInstituteOf}>
                  Vishwakarma Institute of Technology, Pune
                </span>
                <span className={styles.iAmCurrently}>
                  {" "}
                  studying the course of “
                </span>
                <span className={styles.instrumentationAndControl}>
                  Instrumentation and Control Engineering
                </span>
                <span>”.</span>
              </p>
              <p className={styles.iAmCurrentlyA3rdYearEngi}>
                <span>&nbsp;</span>
              </p>
              <p className={styles.besidesThisILikeToIndulg}>
                <span>{`Besides this, I like to indulge myself into new technologies and update myself accordingly. This very reason has enabled me to create my portfolio, by learning Figma to design and React for the website. `}</span>
              </p>
            </div>
          </div>
          <div className={styles.headingText}>
            <b className={styles.aboutMe}>Education</b>
            <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
          </div>
          <EducationContainer />
        </div>
        <Footer
          onGithubClick={onGithubClick}
          onMediumClick={onMediumClick}
          onLinkedinClick={onLinkedinClick}
        />
      </div>
      {isLinksDropdownPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLinksDropdownPopup}
        >
          <LinksDropdown onClose={closeLinksDropdownPopup} />
        </PortalPopup>
      )}
      {isFinalNavigationDropdownOpen && (
        <PortalDrawer
          placement="Top"
          onOutsideClick={closeFinalNavigationDropdown}
        >
          <FinalNavigationDropdown onClose={closeFinalNavigationDropdown} />
        </PortalDrawer>
      )}
    </>
  );
};

export default MyAboutPage;
