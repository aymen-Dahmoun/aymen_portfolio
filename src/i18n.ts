import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ar from './locales/ar.json';
import fr from './locales/fr.json';
import ja from './locales/ja.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ar: { translation: ar },
            fr: { translation: fr },
            ja: { translation: ja }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        }
    });

// Handle i18n updates
const updateMetaTags = (lng: string) => {
    document.documentElement.dir = i18n.dir(lng);
    document.documentElement.lang = lng;

    // Update Title
    const translatedTitle = i18n.t('meta.title');
    if (translatedTitle && translatedTitle !== 'meta.title') {
        document.title = translatedTitle;
    }

    // Update Description
    const translatedDesc = i18n.t('meta.description');
    if (translatedDesc && translatedDesc !== 'meta.description') {
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', translatedDesc);
        }

        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute('content', translatedDesc);
        }

        let twitterDesc = document.querySelector('meta[name="twitter:description"]');
        if (twitterDesc) {
            twitterDesc.setAttribute('content', translatedDesc);
        }
    }
};

i18n.on('languageChanged', (lng) => {
    updateMetaTags(lng);
});

// Initialize on load
updateMetaTags(i18n.language);

export default i18n;
