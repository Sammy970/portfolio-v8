import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LinksDropdown from "../components/LinksDropdown";
import PortalPopup from "../components/PortalPopup";
import FinalNavigationDropdown from "../components/FinalNavigationDropdown";
import PortalDrawer from "../components/PortalDrawer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "./MyCoursesPage.module.css";

const MyCoursesPage = () => {
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

  const onRecCard31Click = useCallback(() => {
    window.open(
      "https://in.coursera.org/account/accomplishments/verify/ZC854WR8C9DK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    );
  }, []);

  return (
    <>
      <div className={styles.mycoursespage}>
        <NavBar
          onPortfolioLogoClick={onPortfolioLogoClick}
          openLinksDropdownPopup={openLinksDropdownPopup}
          onFrameButton2Click={onFrameButton2Click}
          openFinalNavigationDropdown={openFinalNavigationDropdown}
        />
        <div className={styles.coursespage}>
          <div className={styles.coursespageInner}>
            <div className={styles.coursesParent}>
              <b className={styles.courses}>Courses</b>
              <img
                className={styles.image6Icon}
                alt=""
                src="../image-61@2x.png"
              />
            </div>
          </div>
          <div className={styles.recCard3Parent}>
            <button className={styles.recCard3}>
              <img
                className={styles.image2Icon}
                alt=""
                src="../image-2@2x.png"
              />
              <div className={styles.holidayDetails}>
                <div className={styles.frameParent}>
                  <div className={styles.introductionToFrontEndDeveWrapper}>
                    <div className={styles.introductionToFrontEnd}>
                      Introduction to Front-End Developement
                    </div>
                  </div>
                  <div className={styles.ongoing}>Ongoing....</div>
                </div>
              </div>
            </button>
            <button className={styles.recCard3}>
              <img
                className={styles.image2Icon1}
                alt=""
                src="../image-21@2x.png"
              />
              <div className={styles.holidayDetails}>
                <div className={styles.frameParent}>
                  <div className={styles.introductionToFrontEndDeveWrapper}>
                    <div className={styles.introductionToFrontEnd}>
                      Programming with Javascript
                    </div>
                  </div>
                  <div className={styles.ongoing}>Ongoing....</div>
                </div>
              </div>
            </button>
          </div>
          <div className={styles.recCard3Parent}>
            <button className={styles.recCard3} onClick={onRecCard31Click}>
              <img
                className={styles.image2Icon}
                alt=""
                src="../image-2@2x.png"
              />
              <div className={styles.holidayDetails}>
                <div className={styles.frameParent}>
                  <div className={styles.introductionToFrontEndDeveWrapper}>
                    <div className={styles.introductionToFrontEnd}>
                      React Basics
                    </div>
                  </div>
                  <div className={styles.ongoing}>Coursera Certificate</div>
                </div>
              </div>
            </button>
            <button className={styles.recCard3}>
              <img
                className={styles.image2Icon1}
                alt=""
                src="../image-2@2x.png"
              />
              <div className={styles.holidayDetails}>
                <div className={styles.frameParent}>
                  <div className={styles.introductionToFrontEndDeveWrapper}>
                    <div className={styles.introductionToFrontEnd}>
                      React Advanced
                    </div>
                  </div>
                  <div className={styles.ongoing2}>Ongoing....</div>
                </div>
              </div>
            </button>
          </div>
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

export default MyCoursesPage;
