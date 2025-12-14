import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MENU_ITEMS } from './const';
import type { MainMenuProps } from './types';
import styles from './styles.module.css';

const MainMenu = ({ onLinkClick }: MainMenuProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <ul>
          {MENU_ITEMS.map(item => (
            <li key={item.label} className={styles.navItem}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={onLinkClick}
              >
                {t(`${item.label}.title`)}
                <span className={styles.underline}></span>
              </NavLink>
            </li>
          ))}
        </ul>
        <hr className={styles.mobailHr}/>
      </nav>
    </div>
  );
};

export default MainMenu;
