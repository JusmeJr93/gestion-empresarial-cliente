import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ingles from "./locales/en.json";
import español from "./locales/es.json";

const resources = {
    en: {
        translation: ingles,
    },
    es: {
        translation: español,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es',
        fallbackLng: 'en',
        interpolation: { escaperValue: false }
    });

export default i18n;