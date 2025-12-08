import { Typography, Button } from 'antd';
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import type { StayConnectedProps } from './types';
import { formatPhone } from './utils';
import styles from './styles.module.css';

const { Title, Text } = Typography;

const StayConnected = ({ socialLinks, contactInfo, onOpenModal }: StayConnectedProps) => {
  const { t } = useTranslation();

  const getIconComponent = (iconName: string) => {
    if (iconName === 'TwitterOutlined') return <TwitterOutlined />;
    if (iconName === 'FacebookOutlined') return <FacebookOutlined />;
    if (iconName === 'InstagramOutlined') return <InstagramOutlined />;
    if (iconName === 'YoutubeOutlined') return <YoutubeOutlined style={{ fontSize: '27px' }} />;
    return null;
  };

  return (
    <div className={styles.stayConnected}>
      <Title level={4} className={styles.stayConnectedTitle}>
        {t('footer.stayConnected')}
      </Title>
      <Text className={styles.description}>
        {t('footer.getInsiderInfo')}
        <br />
        {t('footer.offersEvents')}
      </Text>
      <Button size="large" className={styles.signUpButton} onClick={onOpenModal}>
        {t('footer.signUpForEmail')}
      </Button>
      <Title level={3} className={styles.contactText}>
        {t('footer.contactUs')}
      </Title>
      <div className={styles.contactInfo}>
        <Text className={styles.phone}>{formatPhone(contactInfo.phone)}</Text>
        <a href={`mailto:${contactInfo.email}`} className={styles.email}>
          {contactInfo.email}
        </a>
      </div>
      <div className={styles.socialLinks}>
        {socialLinks.map((social, index: number) => (
          <a
            key={index}
            href={social.href}
            className={styles.socialLink}
            aria-label={t(social.label)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {getIconComponent(social.icon)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default StayConnected;
