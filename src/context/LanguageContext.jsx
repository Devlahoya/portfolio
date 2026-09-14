import { createContext, useContext, useMemo, useState } from 'react';
import { translations, detectBrowserLang, SUPPORTED_LANGS } from '../i18n/translations';

const LanguageContext = createContext(null);

const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);

/** Deep-merge `override` on top of `base`; arrays are replaced, not merged. */
function deepMerge(base, override) {
  if (!isObj(base) || !isObj(override)) return override === undefined ? base : override;
  const out = { ...base };
  for (const key of Object.keys(override)) {
    out[key] = isObj(base[key]) && isObj(override[key]) ? deepMerge(base[key], override[key]) : override[key];
  }
  return out;
}

const merged = Object.fromEntries(
  SUPPORTED_LANGS.map((code) => [code, code === 'en' ? translations.en : deepMerge(translations.en, translations[code])])
);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
    } catch { /* storage unavailable */ }
    return detectBrowserLang();
  });

  const setLang = (code) => {
    if (!SUPPORTED_LANGS.includes(code)) return;
    setLangState(code);
    try { localStorage.setItem('portfolio_lang', code); } catch { /* ignore */ }
  };

  const value = useMemo(() => {
    const dict = merged[lang] || merged.en;
    const t = (path) => {
      let result = dict;
      for (const key of path.split('.')) {
        result = result?.[key];
        if (result === undefined) return path;
      }
      return result ?? path;
    };
    const tr = (section) => dict[section] ?? {};
    return { lang, setLang, t, tr };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
