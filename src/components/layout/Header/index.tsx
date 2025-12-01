import { useState } from "react";
import BookingCart from "../../common/BookingCart";
import LanguageSwitcher from "../../common/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Logo from "./Logo/index";
import { useNavigate } from 'react-router-dom';
import styles from "./styles.module.css";
import Navigation from "./MainMenu";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <header>
      <div className="container">
        <div className={styles.headerTop}>
          <Logo />

          <div className={styles.headerRight}>
            <Button
              className={styles.hamburger}
              type="text"
              icon={<MenuOutlined />}
              onClick={toggleDrawer}
            />
            <LanguageSwitcher currentLang={i18n.language} onChange={changeLanguage}/>
            <BookingCart count={1} onClick={() => navigate('/booking')} />
          </div>
        </div>

        <div className={styles.navDesktop}>
          <Navigation onLinkClick={() => setDrawerVisible(false)} />
        </div>

        <Drawer
          placement="right"
          onClose={closeDrawer}
          open={drawerVisible}
          className={styles.drawer}
        >
          <Navigation onLinkClick={closeDrawer} />
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
