import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import type { MainMenuProps } from './types';

const MainMenu = ({ onLinkClick }: MainMenuProps) => {
  const { t } = useTranslation();

  const menuItems = [
    { label: 'catalog', path: '/catalog' },
    { label: 'collections', path: '/collections' },
    { label: 'services', path: '/services' },
    { label: 'about', path: '/about' },
    { label: 'contact', path: '/contact' },
  ];

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <ul>
          {menuItems.map(item => (
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
        <hr />
      </nav>
    </div>
  );
};

export default MainMenu;
