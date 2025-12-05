import type { LanguageItem } from './types';
import { am, ru, gb } from '../../../assets/img/flags';

export const LANGUAGES: LanguageItem[] = [
  { key: 'en', label: 'English', icon: gb },
  { key: 'ru', label: 'Русский', icon: ru },
  { key: 'am', label: 'Հայերեն', icon: am },
];
