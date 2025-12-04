import styles from './styles.module.css';
import logo from '../../../../assets/img/logo/logo.jpg';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();
  return (
    <div className={styles.logoContainer} onClick={() => navigate('/')}>
      <img src={logo} alt="Kassaman Logo" className={styles.logo} />
      <span className={styles.logoText}>Kassaman</span>
    </div>
  );
}

export default Logo;
