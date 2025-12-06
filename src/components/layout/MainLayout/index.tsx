import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.module.css';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
