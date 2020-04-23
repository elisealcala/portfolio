import * as React from 'react';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, I18nextProvider } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',

    // have a common namespace used around the full app
    // ns: ['translations'],
    // defaultNS: 'translations',
    debug: true,
    // lng: 'es',
    resources: {
      en: {
        translation: {
          heading: 'popopop',
        },
      },
      es: {
        translation: require('../locales/es/page.json'),
      },
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // react: {
    //   useSuspense: false,
    //   wait: true,
    // },
  });

const Provider: React.FC = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

export default Provider;
