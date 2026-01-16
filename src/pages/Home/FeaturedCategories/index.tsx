import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../store/hook';
import { getAllCategories } from './utils';
import PromoCard from '../../../components/common/cards/PromoCard';
import AppTitle from '../../../components/common/AppTitle';
import styles from './styles.module.css';
import { useTranslation } from 'react-i18next';

const FeaturedCategories = () => {
  const { products } = useAppSelector(state => state.products);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const categories = getAllCategories(products);

  return (
    <section className={styles.categories}>
      <div className={styles.categoryList}>
        {categories.map(category => (
          <PromoCard
            key={category.slug}
            hoverEffect={true}
            title={
              <AppTitle variant="cardTitle" inline={true} className={styles.cardTitle}>
                {t(`categories.${category.slug}.title`)}
              </AppTitle>
            }
            imgClassName={styles.image}
            image={{ src: category.image, alt: category.slug }}
            onClick={() => navigate(`/catalog/${category.slug}`)}
          />
        ))}
      </div>
    </section>
  );
};
export default FeaturedCategories;
