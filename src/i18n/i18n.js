import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import az from '../i18n/az.json'
import en from '../i18n/en.json'

const localStorageLang=localStorage.getItem("lang");
const resources = {
  en: {
    translation: en
  },
  az: {
    translation: az
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: localStorageLang, 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;