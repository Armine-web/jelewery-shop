import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "./styles.module.css";
import type { NavigationProps } from "./types";

const Navigation = ({ onLinkClick }: NavigationProps) => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const links = [
    { path: "/catalog", key: "catalog" },
    { path: "/collections", key: "collections" },
    { path: "/services", key: "services" },
    { path: "/booking", key: "booking" },
    { path: "/blog", key: "blog" },
    { path: "/faq", key: "faq" },
    { path: "/contact", key: "contact" },
    { path: "/account", key: "account" },
  ];

  const handleOpen = (index: number) => setOpenIndex(index);
  const handleClose = () => setOpenIndex(null);

  return (
    <div className={styles.navWrapper}>
      {openIndex !== null && (
        <div className={styles.localOverlay} onClick={handleClose}></div>
      )}

      <nav className={styles.nav}>
        <ul>
          {links.map((link, index) => (
            <li
              key={link.key}
              className={styles.navItem}
              onMouseEnter={() => handleOpen(index)}
              onMouseLeave={handleClose}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? styles.active : ""
                }
                onClick={onLinkClick}
              >
                {t(`${link.key}.title`)}
                <span className={styles.underline}></span>
              </NavLink>

              {openIndex === index && (
                <div className={styles.descriptionContainer}>
                  <div className={styles.fullWidthDescription}>
                    {t(`${link.key}.description`)}

                    <NavLink to={link.path} onClick={handleClose}>
                      <button className={styles.viewAllButton}>
                        {t("viewAll")}
                      </button>
                    </NavLink>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
