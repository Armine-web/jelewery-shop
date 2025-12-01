export type LanguageSwitcherProps = {
  currentLang: string;
  onChange: (lang: string) => void;
};

export type LanguageItem = {
  key: string;   
  label: string; 
  icon: string; 
};