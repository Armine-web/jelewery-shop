import { useState } from 'react';
import BookingCart from '../../common/BookingCart';
import LanguageSwitcher from '../../common/LanguageSwitcher';

import { useTranslation } from 'react-i18next';
import Logo from './Logo/index';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import Navigation from './MainMenu';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import User from './User';
import ShoppingCart from './ShopingCart';
import ShoppingCartDrawer from './ShopingCartDrawer';

const Header = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);
  const closeDrawer = () => setDrawerVisible(false);

  const [open, setOpen] = useState(false);

  const showCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <Button
            className={styles.hamburger}
            type="text"
            icon={<MenuOutlined />}
            onClick={toggleDrawer}
          />

          <Drawer
            placement="left"
            onClose={closeDrawer}
            open={drawerVisible}
            className={styles.drawer}
          >
            <Navigation onLinkClick={closeDrawer} />

            <div className={styles.showOnMobile} onClick={closeDrawer}>
              <User />
              <span className={styles.mobileUserText}>Sign In</span>
            </div>
          </Drawer>

          <Logo />

          <div className={styles.navDesktop}>
            <Navigation onLinkClick={() => setDrawerVisible(false)} />
          </div>

          <div className={styles.headerRight}>
            <div className={styles.hideOnMobile}>
              <User />
            </div>

            <LanguageSwitcher currentLang={i18n.language} onChange={changeLanguage} />
            <BookingCart count={1} onClick={() => navigate('/booking')} />
            <ShoppingCart count={1} onClick={showCart} />
            <ShoppingCartDrawer open={open} onClose={closeCart} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
