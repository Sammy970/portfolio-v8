import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LinksDropdown from "../components/LinksDropdown";
import PortalPopup from "../components/PortalPopup";
import FinalNavigationDropdown from "../components/FinalNavigationDropdown";
import PortalDrawer from "../components/PortalDrawer";
import NavBar from "../components/NavBar";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import styles from "./MyBlogsPage.module.css";

const MyBlogsPage = () => {
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

  const onReadMore2Click = useCallback(() => {
    window.open(
      "https://medium.com/the-modern-scientist/yolov8-training-on-custom-data-3460f922ce86"
    );
  }, []);

  const onReadMore3Click = useCallback(() => {
    window.open(
      "https://medium.com/the-modern-scientist/yolov8-the-new-state-of-the-art-detector-89f627ad17aa"
    );
  }, []);

  const onReadMore4Click = useCallback(() => {
    window.open(
      "https://samyak970.medium.com/training-a-yolov7-model-using-custom-dataset-8300107cb81b"
    );
  }, []);

  const onReadMore5Click = useCallback(() => {
    window.open("https://samyak970.medium.com/iot-protocols-332626439aec");
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
      <div className={styles.myblogspage}>
        <NavBar
          onPortfolioLogoClick={onPortfolioLogoClick}
          openLinksDropdownPopup={openLinksDropdownPopup}
          onFrameButton2Click={onFrameButton2Click}
          openFinalNavigationDropdown={openFinalNavigationDropdown}
        />
        <div className={styles.blogpage}>
          <div className={styles.blogsParent}>
            <b className={styles.blogs}>Blogs</b>
            <img
              className={styles.image6Icon}
              alt=""
              src="../image-62@2x.png"
            />
          </div>
          <BlogCard
            blogDate="January 26, 2023"
            blogTitle="Designing and implementing a voice-controlled roller blind [Part-2]"
            blogShortDesc="This is the second part of my previous article. Last time we completed with coding our NodeMCU. Now we will continue further and complete...."
            onReadMoreClick={onReadMoreClick}
          />
          <BlogCard
            blogDate="January 26, 2023"
            blogTitle="Designing and implementing a voice-controlled roller blind [Part-1]"
            blogShortDesc="Today, we will be designing a system that can open or close the roller blind. This will be done with the help of NodeMCU, Blynk and IFTTT....."
            onReadMoreClick={onReadMore1Click}
          />
          <BlogCard
            blogDate="January 23, 2023"
            blogTitle="YOLOv8 training on Custom Data! [PCB-Defect-Detection]"
            blogShortDesc="In the previous article I had covered Ultralytic’s newest model — YOLOv8. Additionally, we also saw how the YOLOv8’s pre-trained....."
            onReadMoreClick={onReadMore2Click}
          />
          <BlogCard
            blogDate="January 17, 2023"
            blogTitle="YOLOv8 The new State Of The Art Detector?"
            blogShortDesc="Wow, Ultralytics has just published YOLOv8. In July 2022, YOLOv7 was recently released. And now, on January 10, 2023, YOLOv8 was released, I guess it's time to get back at work and take a new look at Ultralytic’s....."
            onReadMoreClick={onReadMore3Click}
          />
          <BlogCard
            blogDate="January 12, 2023"
            blogTitle="Training a YOLOv7 Model using Custom Dataset"
            blogShortDesc="If you’ve been following developments in the field of object detection, you may be familiar to hearing the term “YOLO”. There are many models that come under the YOLO Family. We have YOLOv1, YOLOv2, YOLOv3,....."
            onReadMoreClick={onReadMore4Click}
          />
          <BlogCard
            blogDate="June 10, 2022"
            blogTitle="IoT Protocols"
            blogShortDesc="IoT refers to devices that are embedded with certain kinds of electronics, software, and hardware. These devices have sensors in built to them. Why should we care about IoT protocol? IoT Protocols are very......"
            onReadMoreClick={onReadMore5Click}
          />
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

export default MyBlogsPage;
