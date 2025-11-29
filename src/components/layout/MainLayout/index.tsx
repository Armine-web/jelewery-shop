import type { FC } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.module.css';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
