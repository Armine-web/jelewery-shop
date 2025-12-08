import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import StayConnected from '../StayConnected';
import styles from './styles.module.css';

const { Title } = Typography;

const DesktopFooter = ({ columns, socialLinks, contactInfo, onOpenModal }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.desktopFooter}>
      <div className={styles.columnsWrapper}>
        {columns.map((column, index) => (
          <div key={index} className={styles.column}>
            <Title level={4} className={styles.columnTitle}>
              {t(`footer.columns.${column.title}`)}
            </Title>
            <ul className={styles.linkList}>
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex} className={styles.linkItem}>
                  <a href={link.href} className={styles.link}>
                    {t(`footer.columns.${link.label}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className={styles.stayConnectedWrapper}>
        <StayConnected 
          socialLinks={socialLinks}
          contactInfo={contactInfo}
          onOpenModal={onOpenModal}
        />
      </div>
    </div>
  );
};

export default DesktopFooter;