import { defineMiddleware } from 'astro:middleware';
import { getLanguageFromHeader } from './utils/i18n';

export const onRequest = defineMiddleware(async ({ request, redirect }, next) => {
  const url = new URL(request.url);
  const [, lang] = url.pathname.split('/');
  
  // Skip language detection for static files and API routes
  if (url.pathname.match(/\.(jpg|png|gif|svg|css|js|ico)$/) || url.pathname.startsWith('/api/')) {
    return next();
  }

  // If no language prefix and not homepage
  if (!['en', 'es'].includes(lang)) {
    const preferredLanguage = getLanguageFromHeader(request.headers.get('accept-language'));
    if (preferredLanguage !== 'en') {
      return redirect(`/${preferredLanguage}${url.pathname}`);
    }
  }

  return next();
});