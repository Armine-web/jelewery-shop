import { useNavigate } from 'react-router-dom';
import { useToggle } from '../../../hooks/useToggle';
import Logo from './Logo/index';
import MainMenu from './MainMenu';
import User from './User';
import BookingCart from './BookingCart';
import LanguageSwitcher from '../../common/LanguageSwitcher';
import ShoppingCart from './ShopCart';
import Hamburger from './Hamburger';
import ShoppingCartDrawer from './ShopCartDrawer';
import MenuDrawer from './MenuDrawer';
import styles from './styles.module.css';
import { useLang } from '../../../hooks/useLang';

const Header = () => {
  const { currentLang, changeLanguage } = useLang();
  const navigate = useNavigate();

  const menu = useToggle();
  const cart = useToggle();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Hamburger onClick={menu.toggle} />
          <Logo />
          <div className={styles.menuDesktop}>
            <MainMenu />
          </div>
          <div className={styles.headerRight}>
            <div className={styles.hideOnMobile}>
              <User />
            </div>
            <LanguageSwitcher currentLang={currentLang} onChange={changeLanguage} />
            <BookingCart count={1} onClick={() => navigate('/booking')} />
            <ShoppingCart count={1} onClick={cart.toggle} />
            <ShoppingCartDrawer open={cart.isOpen} onClose={cart.close} />
            <MenuDrawer open={menu.isOpen} onClose={menu.close} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
