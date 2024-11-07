import { ui, defaultLang } from '../i18n/ui';
import acceptLanguageParser from 'accept-language-parser';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLanguageFromHeader(acceptLanguage: string | null) {
  if (!acceptLanguage) return defaultLang;
  
  const languages = acceptLanguageParser.parse(acceptLanguage);
  const preferred = languages.find(lang => 
    Object.keys(ui).includes(lang.code)
  );
  
  return preferred ? preferred.code : defaultLang;
}