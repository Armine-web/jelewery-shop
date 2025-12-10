export type BannerImagesProps = {
  ring9: string;
  ring10: string;
  cufflinks5: string;
  necklace3: string;
};

export type SlideProps = {
  id: string;
  image: keyof BannerImagesProps;
  title: string;
  buttonBook: string;
  buttonShop: string;
};
