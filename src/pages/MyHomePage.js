import { useState, useCallback } from "react";
import LinksDropdown from "../components/LinksDropdown";
import PortalPopup from "../components/PortalPopup";
import FinalNavigationDropdown from "../components/FinalNavigationDropdown";
import PortalDrawer from "../components/PortalDrawer";
import PCB from "../components/PCB";
import TextUtils from "../components/TextUtils";
import NavBar from "../components/NavBar";
import ContactMeContainer from "../components/ContactMeContainer";
import RecentBlogsContainer from "../components/RecentBlogsContainer";
import NewProjectsContainer from "../components/NewProjectsContainer";
import Footer from "../components/Footer";
import styles from "./MyHomePage.module.css";

const MyHomePage = () => {
  const [isLinksDropdownPopupOpen, setLinksDropdownPopupOpen] = useState(false);
  const [isFinalNavigationDropdownOpen, setFinalNavigationDropdownOpen] =
    useState(false);
  const [isPCBPopupOpen, setPCBPopupOpen] = useState(false);
  const [isTextUtilsPopupOpen, setTextUtilsPopupOpen] = useState(false);

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

  const onReadMoreClick = useCallback(() => {
    window.open(
      "https://medium.com/the-modern-scientist/designing-and-implementing-a-voice-controlled-roller-blind-part-2-a726b7ed7887"
    );
  }, []);

  const onReadMore1Click = useCallback(() => {
    window.open(
      "https://medium.com/the-modern-scientist/designing-and-implementing-a-voice-controlled-roller-blind-part-1-82e8014317f0"
    );
  }, []);

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
      <div className={styles.myhomepage}>
        <NavBar
          openLinksDropdownPopup={openLinksDropdownPopup}
          onFrameButton2Click={onFrameButton2Click}
          openFinalNavigationDropdown={openFinalNavigationDropdown}
        />
        <div className={styles.finalHeroSection}>
          <div className={styles.heroSection}>
            <div className={styles.heyImSamyakJainParent}>
              <b className={styles.heyImSamyakContainer}>
                <p className={styles.heyIm}>Hey, I’m</p>
                <p className={styles.samyakJain}>Samyak Jain</p>
              </b>
              <b className={styles.currentlyAStudent}>
                Currently a student at VIT, Pune
              </b>
            </div>
            <img className={styles.image3Icon} alt="" src="../image-3@2x.png" />
            <img
              className={styles.heroSectionChild}
              alt=""
              src="../ellipse-3@2x.png"
            />
          </div>
        </div>
        <ContactMeContainer />
        <RecentBlogsContainer />
        <NewProjectsContainer />
        <Footer
          propWidth="64.14%"
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

export default MyHomePage;
