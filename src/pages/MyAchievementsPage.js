import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LinksDropdown from "../components/LinksDropdown";
import PortalPopup from "../components/PortalPopup";
import FinalNavigationDropdown from "../components/FinalNavigationDropdown";
import PortalDrawer from "../components/PortalDrawer";
import NavBar from "../components/NavBar";
import MetaCertificate from "../components/MetaCertificate";
import ISACertificate from "../components/ISACertificate";
import UtkarshCertificate from "../components/UtkarshCertificate";
import TechnomelaCertificate from "../components/TechnomelaCertificate";
import BusinessIdeathonCertificate from "../components/BusinessIdeathonCertificate";
import Merit21Certificate from "../components/Merit21Certificate";
import TechnoPoornimaCertificate from "../components/TechnoPoornimaCertificate";
import SpaceAppsCertificate from "../components/SpaceAppsCertificate";
import PravinyaCertificate from "../components/PravinyaCertificate";
import Merit19Certificate from "../components/Merit19Certificate";
import TechnocratzCertificate from "../components/TechnocratzCertificate";
import SketchCertificate from "../components/SketchCertificate";
import Footer from "../components/Footer";
import styles from "./MyAchievementsPage.module.css";

const MyAchievementsPage = () => {
  const navigate = useNavigate();
  const [isLinksDropdownPopupOpen, setLinksDropdownPopupOpen] = useState(false);
  const [isFinalNavigationDropdownOpen, setFinalNavigationDropdownOpen] =
    useState(false);
  const [isMetaCertificatePopupOpen, setMetaCertificatePopupOpen] =
    useState(false);
  const [isISACertificatePopupOpen, setISACertificatePopupOpen] =
    useState(false);
  const [isUtkarshCertificatePopupOpen, setUtkarshCertificatePopupOpen] =
    useState(false);
  const [isTechnomelaCertificatePopupOpen, setTechnomelaCertificatePopupOpen] =
    useState(false);
  const [
    isBusinessIdeathonCertificatePopupOpen,
    setBusinessIdeathonCertificatePopupOpen,
  ] = useState(false);
  const [isMerit21CertificatePopupOpen, setMerit21CertificatePopupOpen] =
    useState(false);
  const [
    isTechnoPoornimaCertificatePopupOpen,
    setTechnoPoornimaCertificatePopupOpen,
  ] = useState(false);
  const [isSpaceAppsCertificatePopupOpen, setSpaceAppsCertificatePopupOpen] =
    useState(false);
  const [isPravinyaCertificatePopupOpen, setPravinyaCertificatePopupOpen] =
    useState(false);
  const [isMerit19CertificatePopupOpen, setMerit19CertificatePopupOpen] =
    useState(false);
  const [
    isTechnocratzCertificatePopupOpen,
    setTechnocratzCertificatePopupOpen,
  ] = useState(false);
  const [isSketchCertificatePopupOpen, setSketchCertificatePopupOpen] =
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

  const openMetaCertificatePopup = useCallback(() => {
    setMetaCertificatePopupOpen(true);
  }, []);

  const closeMetaCertificatePopup = useCallback(() => {
    setMetaCertificatePopupOpen(false);
  }, []);

  const openISACertificatePopup = useCallback(() => {
    setISACertificatePopupOpen(true);
  }, []);

  const closeISACertificatePopup = useCallback(() => {
    setISACertificatePopupOpen(false);
  }, []);

  const openUtkarshCertificatePopup = useCallback(() => {
    setUtkarshCertificatePopupOpen(true);
  }, []);

  const closeUtkarshCertificatePopup = useCallback(() => {
    setUtkarshCertificatePopupOpen(false);
  }, []);

  const openTechnomelaCertificatePopup = useCallback(() => {
    setTechnomelaCertificatePopupOpen(true);
  }, []);

  const closeTechnomelaCertificatePopup = useCallback(() => {
    setTechnomelaCertificatePopupOpen(false);
  }, []);

  const openBusinessIdeathonCertificatePopup = useCallback(() => {
    setBusinessIdeathonCertificatePopupOpen(true);
  }, []);

  const closeBusinessIdeathonCertificatePopup = useCallback(() => {
    setBusinessIdeathonCertificatePopupOpen(false);
  }, []);

  const openMerit21CertificatePopup = useCallback(() => {
    setMerit21CertificatePopupOpen(true);
  }, []);

  const closeMerit21CertificatePopup = useCallback(() => {
    setMerit21CertificatePopupOpen(false);
  }, []);

  const openTechnoPoornimaCertificatePopup = useCallback(() => {
    setTechnoPoornimaCertificatePopupOpen(true);
  }, []);

  const closeTechnoPoornimaCertificatePopup = useCallback(() => {
    setTechnoPoornimaCertificatePopupOpen(false);
  }, []);

  const openSpaceAppsCertificatePopup = useCallback(() => {
    setSpaceAppsCertificatePopupOpen(true);
  }, []);

  const closeSpaceAppsCertificatePopup = useCallback(() => {
    setSpaceAppsCertificatePopupOpen(false);
  }, []);

  const openPravinyaCertificatePopup = useCallback(() => {
    setPravinyaCertificatePopupOpen(true);
  }, []);

  const closePravinyaCertificatePopup = useCallback(() => {
    setPravinyaCertificatePopupOpen(false);
  }, []);

  const openMerit19CertificatePopup = useCallback(() => {
    setMerit19CertificatePopupOpen(true);
  }, []);

  const closeMerit19CertificatePopup = useCallback(() => {
    setMerit19CertificatePopupOpen(false);
  }, []);

  const openTechnocratzCertificatePopup = useCallback(() => {
    setTechnocratzCertificatePopupOpen(true);
  }, []);

  const closeTechnocratzCertificatePopup = useCallback(() => {
    setTechnocratzCertificatePopupOpen(false);
  }, []);

  const openSketchCertificatePopup = useCallback(() => {
    setSketchCertificatePopupOpen(true);
  }, []);

  const closeSketchCertificatePopup = useCallback(() => {
    setSketchCertificatePopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.myachievementspage}>
        <NavBar
          onPortfolioLogoClick={onPortfolioLogoClick}
          openLinksDropdownPopup={openLinksDropdownPopup}
          onFrameButton2Click={onFrameButton2Click}
          openFinalNavigationDropdown={openFinalNavigationDropdown}
        />
        <div className={styles.achievementspage}>
          <div className={styles.achievementsWrapper}>
            <b className={styles.achievements}>Achievements</b>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.parent}>
              <b className={styles.b}>2023</b>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.presentMyPaperInIeeeConfeParent}>
              <div className={styles.presentMyPaper}>
                Present my paper in IEEE Conference
              </div>
              <div className={styles.presentMyPaper}>
                Built my own portfolio website from scratch
              </div>
              <div
                className={styles.learntReactjsBasics}
                onClick={openMetaCertificatePopup}
              >
                Learnt ReactJS Basics by META
              </div>
              <div className={styles.presentMyPaper}>
                Enrolled in multiple Coursera courses for “Front-End Web
                Development”
              </div>
              <div className={styles.presentMyPaper}>
                Wrote my First Technical Blog on Medium.com
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.parent}>
              <b className={styles.b1}>2022</b>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.presentMyPaperInIeeeConfeParent}>
              <div
                className={styles.learntReactjsBasics}
                onClick={openISACertificatePopup}
              >
                Volunteered as a Database Co-ordinator for ISA (International
                Society of Automation).
              </div>
              <div
                className={styles.learntReactjsBasics}
                onClick={openUtkarshCertificatePopup}
              >
                Participated in a social event Utkarsh under VIT SOCIAL and
                WELFARE Department
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.parent}>
              <b className={styles.b}>2021</b>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.presentMyPaperInIeeeConfeParent}>
              <div
                className={styles.learntReactjsBasics}
                onClick={openTechnomelaCertificatePopup}
              >
                Participated in State Level Project Competition (TECHNOMELA –
                2021)
              </div>
              <div
                className={styles.learntReactjsBasics}
                onClick={openBusinessIdeathonCertificatePopup}
              >
                Secured First Rank in Business Ideathon (Polyspark 2021)
              </div>
              <div
                className={styles.learntReactjsBasics}
                onClick={openMerit21CertificatePopup}
              >
                Ranked first again in my department in college
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.parent1}>
              <b className={styles.b}>2020</b>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.winnerIn9thTechnoGurupoornParent}>
              <div
                className={styles.learntReactjsBasics}
                onClick={openTechnoPoornimaCertificatePopup}
              >
                Winner in 9th Techno-Gurupoornima Online Project Competition
              </div>
              <div
                className={styles.learntReactjsBasics}
                onClick={openSpaceAppsCertificatePopup}
              >
                Participated in pre-qualifier round of International Space App
                Challenge
              </div>
              <div
                className={styles.learntReactjsBasics}
                onClick={openPravinyaCertificatePopup}
              >
                Participated in State Level Technical Paper Presentation
                (Pravinya 2020)
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.parent}>
              <b className={styles.b4}>2019</b>
              <div className={styles.frameChild1} />
            </div>
            <div className={styles.presentMyPaperInIeeeConfeParent}>
              <div
                className={styles.learntReactjsBasics}
                onClick={openMerit19CertificatePopup}
              >
                Ranked first in my department in college
              </div>
              <div
                className={styles.learntReactjsBasics}
                onClick={openTechnocratzCertificatePopup}
              >
                Runner up in State Level Technical Paper Presentation
                (Technocratz 2019)
              </div>
              <div
                className={styles.learntReactjsBasics}
                onClick={openSketchCertificatePopup}
              >
                Secured third rank in Sketch Competition in Polyspark-2019
              </div>
            </div>
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
      {isMetaCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMetaCertificatePopup}
        >
          <MetaCertificate onClose={closeMetaCertificatePopup} />
        </PortalPopup>
      )}
      {isISACertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeISACertificatePopup}
        >
          <ISACertificate onClose={closeISACertificatePopup} />
        </PortalPopup>
      )}
      {isUtkarshCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUtkarshCertificatePopup}
        >
          <UtkarshCertificate onClose={closeUtkarshCertificatePopup} />
        </PortalPopup>
      )}
      {isTechnomelaCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTechnomelaCertificatePopup}
        >
          <TechnomelaCertificate onClose={closeTechnomelaCertificatePopup} />
        </PortalPopup>
      )}
      {isBusinessIdeathonCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBusinessIdeathonCertificatePopup}
        >
          <BusinessIdeathonCertificate
            onClose={closeBusinessIdeathonCertificatePopup}
          />
        </PortalPopup>
      )}
      {isMerit21CertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMerit21CertificatePopup}
        >
          <Merit21Certificate onClose={closeMerit21CertificatePopup} />
        </PortalPopup>
      )}
      {isTechnoPoornimaCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTechnoPoornimaCertificatePopup}
        >
          <TechnoPoornimaCertificate
            onClose={closeTechnoPoornimaCertificatePopup}
          />
        </PortalPopup>
      )}
      {isSpaceAppsCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSpaceAppsCertificatePopup}
        >
          <SpaceAppsCertificate onClose={closeSpaceAppsCertificatePopup} />
        </PortalPopup>
      )}
      {isPravinyaCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePravinyaCertificatePopup}
        >
          <PravinyaCertificate onClose={closePravinyaCertificatePopup} />
        </PortalPopup>
      )}
      {isMerit19CertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMerit19CertificatePopup}
        >
          <Merit19Certificate onClose={closeMerit19CertificatePopup} />
        </PortalPopup>
      )}
      {isTechnocratzCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTechnocratzCertificatePopup}
        >
          <TechnocratzCertificate onClose={closeTechnocratzCertificatePopup} />
        </PortalPopup>
      )}
      {isSketchCertificatePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSketchCertificatePopup}
        >
          <SketchCertificate onClose={closeSketchCertificatePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default MyAchievementsPage;
