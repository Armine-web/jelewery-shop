import { useTranslation } from 'react-i18next';
import type { SliderBannerItem } from '../../../components/common/banners/SliderBanner/types';
import SliderBanner from '../../../components/common/banners/SliderBanner/index';

const HeroBanner = () => {
  const { t } = useTranslation();

  const banners = t('home.heroBanners', {
    returnObjects: true,
    defaultValue: [],
  }) as SliderBannerItem[];

  return <SliderBanner banners={banners} />;
};

export default HeroBanner;
