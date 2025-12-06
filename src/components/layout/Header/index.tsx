import { useState } from 'react';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo/index';
import Navigation from './MainMenu';
import User from './User';
import BookingCart from './BookingCart';
import LanguageSwitcher from '../../common/LanguageSwitcher';
import ShoppingCart from './ShopCart';
import ShoppingCartDrawer from './ShopCart/ShopCartDrawer';
import MenuDrawer from './MenuDrawer';
import styles from './styles.module.css';

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
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Button
            className={styles.hamburger}
            type="text"
            icon={<MenuOutlined />}
            onClick={toggleDrawer}
          />

          <MenuDrawer open={drawerVisible} onClose={closeDrawer} />
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
