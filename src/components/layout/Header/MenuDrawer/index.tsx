import AppDrawer from '../../../common/Drawer';
import Navigation from '../MainMenu';
import User from '../User';
import type { MenuDrawerProps } from './type';
import styles from '../styles.module.css';

const MenuDrawer = ({ open, onClose }: MenuDrawerProps) => {
  return (
    <AppDrawer side="left" title="" open={open} onClose={onClose}>
      <Navigation onLinkClick={onClose} />

      <div className={styles.showOnMobile} onClick={onClose}>
        <User />
        <span className={styles.mobileUserText}>Sign In</span>
      </div>
    </AppDrawer>
  );
};

export default MenuDrawer;
