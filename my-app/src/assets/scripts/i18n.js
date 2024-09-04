import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Import các file JSON
import enTranslation from '../locales/en.json';
import viTranslation from '../locales/vi.json';

const resources = {
  en: {
    translation: enTranslation
  },
  vi: {
    translation: viTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
