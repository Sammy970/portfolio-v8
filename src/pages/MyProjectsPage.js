import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LinksDropdown from "../components/LinksDropdown";
import PortalPopup from "../components/PortalPopup";
import FinalNavigationDropdown from "../components/FinalNavigationDropdown";
import PortalDrawer from "../components/PortalDrawer";
import PCB from "../components/PCB";
import TextUtils from "../components/TextUtils";
import Inventory from "../components/Inventory";
import ClosedSpace from "../components/ClosedSpace";
import TextSummarizationNLP from "../components/TextSummarizationNLP";
import RollerBlinds from "../components/RollerBlinds";
import SmartVaporizer from "../components/SmartVaporizer";
import WasteSeg from "../components/WasteSeg";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import SmartDustbin from "../components/SmartDustbin";
import Footer from "../components/Footer";
import styles from "./MyProjectsPage.module.css";

const MyProjectsPage = () => {
  const navigate = useNavigate();
  const [isLinksDropdownPopupOpen, setLinksDropdownPopupOpen] = useState(false);
  const [isFinalNavigationDropdownOpen, setFinalNavigationDropdownOpen] =
    useState(false);
  const [isPCBPopupOpen, setPCBPopupOpen] = useState(false);
  const [isTextUtilsPopupOpen, setTextUtilsPopupOpen] = useState(false);
  const [isInventoryPopupOpen, setInventoryPopupOpen] = useState(false);
  const [isClosedSpacePopupOpen, setClosedSpacePopupOpen] = useState(false);
  const [isTextSummarizationNLPPopupOpen, setTextSummarizationNLPPopupOpen] =
    useState(false);
  const [isRollerBlindsPopupOpen, setRollerBlindsPopupOpen] = useState(false);
  const [isSmartVaporizerPopupOpen, setSmartVaporizerPopupOpen] =
    useState(false);
  const [isWasteSegPopupOpen, setWasteSegPopupOpen] = useState(false);
  const [isSmartDustbinPopupOpen, setSmartDustbinPopupOpen] = useState(false);

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

  const openInventoryPopup = useCallback(() => {
    setInventoryPopupOpen(true);
  }, []);

  const closeInventoryPopup = useCallback(() => {
    setInventoryPopupOpen(false);
  }, []);

  const openClosedSpacePopup = useCallback(() => {
    setClosedSpacePopupOpen(true);
  }, []);

  const closeClosedSpacePopup = useCallback(() => {
    setClosedSpacePopupOpen(false);
  }, []);

  const openTextSummarizationNLPPopup = useCallback(() => {
    setTextSummarizationNLPPopupOpen(true);
  }, []);

  const closeTextSummarizationNLPPopup = useCallback(() => {
    setTextSummarizationNLPPopupOpen(false);
  }, []);

  const openRollerBlindsPopup = useCallback(() => {
    setRollerBlindsPopupOpen(true);
  }, []);

  const closeRollerBlindsPopup = useCallback(() => {
    setRollerBlindsPopupOpen(false);
  }, []);

  const openSmartVaporizerPopup = useCallback(() => {
    setSmartVaporizerPopupOpen(true);
  }, []);

  const closeSmartVaporizerPopup = useCallback(() => {
    setSmartVaporizerPopupOpen(false);
  }, []);

  const openWasteSegPopup = useCallback(() => {
    setWasteSegPopupOpen(true);
  }, []);

  const closeWasteSegPopup = useCallback(() => {
    setWasteSegPopupOpen(false);
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

  const openSmartDustbinPopup = useCallback(() => {
    setSmartDustbinPopupOpen(true);
  }, []);

  const closeSmartDustbinPopup = useCallback(() => {
    setSmartDustbinPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.myprojectspage}>
        <NavBar
          onPortfolioLogoClick={onPortfolioLogoClick}
          openLinksDropdownPopup={openLinksDropdownPopup}
          onFrameButton2Click={onFrameButton2Click}
          openFinalNavigationDropdown={openFinalNavigationDropdown}
        />
        <div className={styles.finalProjects}>
          <div className={styles.projectsParent}>
            <b className={styles.projects}>Projects</b>
            <img className={styles.image6Icon} alt="" src="../image-6@2x.png" />
          </div>
          <ProjectCard
            projectImageUrl="../image-10@2x.png"
            projectDescription="PCB Defect Detection using YOLOv8"
            projectName="PCB Defect Detection using YOLOv8"
            projectNameForPhone="PCB Defect Detection system using YOLOv8. Achieved an accuracy of 95.2%. The system is capable of detecting various types of defects on printed circuit boards, such as short circuits, open circuits, and component misplacements. "
            openPCBPopup={openPCBPopup}
          />
          <ProjectCard
            projectImageUrl="../image-8@2x.png"
            projectDescription="Text Utility App"
            projectName="Text Utility App"
            projectNameForPhone="Developed a Text Utility App using ReactJS that provides users with a web-based platform for formatting text. The app includes features like converting text to uppercase, lowercase, and capitalizing the first word, as well as a clear function to reset the text."
            openPCBPopup={openTextUtilsPopup}
          />
          <ProjectCard
            projectImageUrl="../image-9@2x.png"
            projectDescription="Inventory Stock Management using YOLOv7, YOLOv5"
            projectName="Inventory Stock Management using YOLOv7, YOLOv5"
            projectNameForPhone="Developed an Inventory Stock Management system using YOLOv7 and YOLOv5 models, which can easily detect objects on a shelf in any store or supermarket. Additionally, I also added a feature to implement a count of the detected objects and display the data on the web app."
            openPCBPopup={openInventoryPopup}
          />
          <ProjectCard
            projectImageUrl="../image-11@2x.png"
            projectDescription="Closed Space Parameter Monitoring and Visualization System using Power BI"
            projectName="Closed Space Parameter Monitoring and Visualization System using Power BI"
            projectNameForPhone="Developed a Closed Space Parameter Monitoring and Visualization System to measure parameters such as temperature, pressure, humidity, soil moisture, and air quality of an enclosed space. A web dashboard was created for users to access live data, which was stored on Google Sheets at timely intervals. The data was linked to Power BI to provide visualizations and trends."
            openPCBPopup={openClosedSpacePopup}
          />
          <ProjectCard
            projectImageUrl="../image-12@2x.png"
            projectDescription="Text Summarization using NLP"
            projectName="Text Summarization using NLP"
            projectNameForPhone="Developed a Text Summarization system using Python, BART model, and TextRank Algorithm to evaluate the performance of pre-trained models vs custom algorithms. Created a web app using Flask and hosted it on PythonAnywhere to showcase the project's functionality and accessibility."
            openPCBPopup={openTextSummarizationNLPPopup}
          />
          <ProjectCard
            projectImageUrl="../pxl-20220617-010547308-1@2x.png"
            projectDescription="Voice Controlled Roller Blinds"
            projectName="Voice Controlled Roller Blinds"
            projectNameForPhone="Developed a Voice Controlled Roller Blinds system using Blynk IoT, Google Assistant, and IFTTT. The system allows users to control their roller blinds using voice commands or by pressing a button on the app."
            openPCBPopup={openRollerBlindsPopup}
          />
          <ProjectCard
            projectImageUrl="../image-14@2x.png"
            projectDescription="Smart Vaporizer using IoT"
            projectName="Smart Vaporizer using IoT"
            projectNameForPhone="Developed a Smart Vaporizer using Arduino UNO R3, Relay, water level detection sensor, and wire temperature sensor. The project involved simulating and building a hardware system that measures water level and temperature to optimize electricity usage and user experience."
            openPCBPopup={openSmartVaporizerPopup}
          />
          <ProjectCard
            projectImageUrl="../image-151@2x.png"
            projectDescription="Waste Segregation using Arduino UNO"
            projectName="Waste Segregation using Arduino UNO"
            projectNameForPhone="Designed a waste segregating dustbin that could segregate the waste into two categories viz, dry and wet waste. I used TinkerCAD to do the simulation of the project."
            openPCBPopup={openWasteSegPopup}
          />
          <div className={styles.projectcard}>
            <div className={styles.topprojectcard}>
              <div className={styles.maskGroup}>
                <img
                  className={styles.image16Icon}
                  alt=""
                  src="../image-161@2x.png"
                />
              </div>
              <div className={styles.smartDustbinParent}>
                <div className={styles.smartDustbin}>Smart Dustbin</div>
                <div
                  className={styles.smartDustbin1}
                  onClick={openSmartDustbinPopup}
                >
                  Smart Dustbin
                </div>
                <div className={styles.designedASmartDustbinThatWrapper}>
                  <div className={styles.designedASmart}>
                    Designed a Smart Dustbin that could open its lid
                    automatically whenever a user approaches it. This simple
                    system makes the dustbin accessible to the user only when it
                    is empty or has room for more trash. Furthermore, this will
                    keep the individual throwing the garbage and the surrounding
                    area clean.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer
          propWidth="64.15%"
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
      {isInventoryPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeInventoryPopup}
        >
          <Inventory onClose={closeInventoryPopup} />
        </PortalPopup>
      )}
      {isClosedSpacePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeClosedSpacePopup}
        >
          <ClosedSpace onClose={closeClosedSpacePopup} />
        </PortalPopup>
      )}
      {isTextSummarizationNLPPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTextSummarizationNLPPopup}
        >
          <TextSummarizationNLP onClose={closeTextSummarizationNLPPopup} />
        </PortalPopup>
      )}
      {isRollerBlindsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRollerBlindsPopup}
        >
          <RollerBlinds onClose={closeRollerBlindsPopup} />
        </PortalPopup>
      )}
      {isSmartVaporizerPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSmartVaporizerPopup}
        >
          <SmartVaporizer onClose={closeSmartVaporizerPopup} />
        </PortalPopup>
      )}
      {isWasteSegPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWasteSegPopup}
        >
          <WasteSeg onClose={closeWasteSegPopup} />
        </PortalPopup>
      )}
      {isSmartDustbinPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSmartDustbinPopup}
        >
          <SmartDustbin onClose={closeSmartDustbinPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default MyProjectsPage;
