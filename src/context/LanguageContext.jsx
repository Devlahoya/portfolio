import { createContext, useContext, useState, useEffect } from 'react';
import { translations, detectBrowserLang, SUPPORTED_LANGS } from '../i18n/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
    return detectBrowserLang();
  });

  const setLang = (code) => {
    if (!SUPPORTED_LANGS.includes(code)) return;
    setLangState(code);
    localStorage.setItem('portfolio_lang', code);
  };

  // dot-path accessor: t('nav.home')
  const t = (path) => {
    const keys = path.split('.');
    let result = translations[lang];
    for (const key of keys) {
      result = result?.[key];
      if (result === undefined) return path;
    }
    return result ?? path;
  };

  // direct section accessor: tr('about') returns translations[lang].about
  const tr = (section) => translations[lang]?.[section] ?? {};

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
