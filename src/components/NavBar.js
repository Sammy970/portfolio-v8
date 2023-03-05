import styles from "./NavBar.module.css";

const NavBar = ({
  onPortfolioLogoClick,
  openLinksDropdownPopup,
  onFrameButton2Click,
  openFinalNavigationDropdown,
}) => {
  return (
    <div className={styles.finalNavigationBar}>
      <div className={styles.navigationInnerBar}>
        <button className={styles.portfolioLogo} onClick={onPortfolioLogoClick}>
          <img
            className={styles.porfolioLogoIcon}
            alt=""
            src="../porfolio-logo@2x.png"
          />
          <button className={styles.portfolio}>PORTFOLIO</button>
        </button>
        <div className={styles.menuRight}>
          <div className={styles.linksContainer}>
            <div className={styles.links}>
              <button className={styles.frameParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../frame-199415.svg"
                />
                <button className={styles.about}>About</button>
              </button>
              <button
                className={styles.frameParent}
                onClick={openLinksDropdownPopup}
              >
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../frame-199416.svg"
                />
                <button className={styles.about}>Links</button>
              </button>
              <button
                className={styles.frameContainer}
                onClick={onFrameButton2Click}
              >
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../frame-199417.svg"
                />
                <button className={styles.about}>Contact</button>
              </button>
            </div>
            <button
              className={styles.component2}
              onClick={openFinalNavigationDropdown}
            >
              <div className={styles.component2Child} />
              <div className={styles.component2Item} />
              <div className={styles.component2Inner} />
              <div className={styles.lineDiv} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
