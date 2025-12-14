import { PhoneOutlined, MailOutlined, ClockCircleOutlined, EnvironmentOutlined, } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className={styles.contactInfoWrapper}>
        <div className={styles.contactcallUs}>
          <h2 className={styles.contactInfoHeading}>
            <PhoneOutlined className={styles.ontactInfoIcons} />
            <span>{t('contact.callUs')}</span>
          </h2>
          <p>{t('contact.callUsDescription')}</p>
          <p>
            <a className={styles.contactInfoLinks} href="tel:+12377900610">
              (+123) 77 900610
            </a>
          </p>
        </div>

        <div className={styles.contactMailUs}>
          <h2 className={styles.contactInfoHeading}>
            <MailOutlined className={styles.ontactInfoIcons} />
            <span>{t('contact.emailUs')}</span>
          </h2>
          <p>{t('contact.emailUsDescription')}</p>
          <p>
            <a className={styles.contactInfoLinks} href="mailto:kassaman.armenia@mail.ru">
              {t('contact.sendEmail')}
            </a>
          </p>
        </div>

        <div className={styles.contactAdress}>
          <h2 className={styles.contactInfoHeading}>
            <EnvironmentOutlined className={styles.ontactInfoIcons} />
            <span>{t('contact.visitUs')}</span>
          </h2>
          <p>{t('contact.visitUsDescription')}</p>
          <p>
            <a
              className={styles.contactInfoLinks}
              href="https://www.google.com/maps/search/?api=1&query=Khorenatsi+15,+Yerevan,+Armenia"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('contact.adress')}
            </a>
          </p>
        </div>

        <div className={styles.contactWorkingHours}>
          <h2 className={styles.contactInfoHeading}>
            <ClockCircleOutlined className={styles.ontactInfoIcons} />
            <span>{t('contact.workingHours')}</span>
          </h2>
          <p>{t('contact.workingHoursDescription')}</p>
          <p>{t('contact.workingHoursSchedule')} </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
