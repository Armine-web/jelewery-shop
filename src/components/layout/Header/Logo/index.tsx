import styles from './styles.module.css';
import logo from "../../../../assets/images/logo/logo.jpg";
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();
  return (
    <img src={logo} alt="Kassaman Logo" className={styles.logo} onClick={() => navigate('/')} />
  )
}

export default Logo

