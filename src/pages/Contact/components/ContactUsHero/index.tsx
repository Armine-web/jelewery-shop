import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';
import contactHero from '../../../../assets/img/contact/contact-hero.png';
import { logoImg } from '../../../../assets/img/logo';

function ContactUsHero() {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.contactUsHero} style={{ backgroundImage: `url(${contactHero})` }}>
        <div className={styles.contactUsHeroContent}>
          <p>{t('contact.contactUsHero')}</p>
        </div>
              <div className={styles.contactLogo}>
        <img src={logoImg} alt="logo" />
      </div>
      </div>

    </>
  );
}

export default ContactUsHero;
