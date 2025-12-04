import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import type { NavigationProps } from './types';

const Navigation = ({ onLinkClick }: NavigationProps) => {
  const { t } = useTranslation();

  const links = [
    { path: '/catalog', key: 'catalog' },
    { path: '/collections', key: 'collections' },
    { path: '/services', key: 'services' },
    { path: '/about', key: 'about' },
    { path: '/contact', key: 'contact' },

  ];

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <ul>
          {links.map(link => (
            <li key={link.key} className={styles.navItem}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? styles.active : '')}
                onClick={onLinkClick}
              >
                {t(`${link.key}.title`)}
                <span className={styles.underline}></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
