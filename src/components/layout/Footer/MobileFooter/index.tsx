import { Collapse, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import StayConnected from '../StayConnected';
import styles from './styles.module.css';

const MobileFooter = ({ columns, socialLinks, contactInfo, onOpenModal }) => {
  const { t } = useTranslation();

  const renderCustomExpandIcon = (panelProps) => {
    return (
      <span 
        className={`${styles.expandIcon} ${panelProps.isActive ? styles.expandIconActive : ''}`}
      >
        |
      </span>
    );
  };

  const collapseItems = columns.map((column, index) => ({
    key: index.toString(),
    label: t(`footer.columns.${column.title}`),
    children: (
      <ul className={styles.linkList}>
        {column.links.map((link, linkIndex) => (
          <li key={linkIndex} className={styles.linkItem}>
            <a href={link.href} className={styles.link}>
              {t(`footer.columns.${link.label}`)}
            </a>
          </li>
        ))}
      </ul>
    ),
    
    className: styles.collapsePanel,
  }));

  return (
    <div className={styles.mobileFooter}>
      <Collapse
        className={styles.collapse}
        bordered={false}
        expandIconPlacement="end"
        expandIcon={renderCustomExpandIcon}
        items={collapseItems}
      />
      
      <StayConnected 
        socialLinks={socialLinks}
        contactInfo={contactInfo}
        onOpenModal={onOpenModal}
      />
    </div>
  );
};

export default MobileFooter;