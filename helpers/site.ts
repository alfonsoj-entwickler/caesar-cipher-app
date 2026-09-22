/**
 * Resolves the canonical base URL of the application.
 * Priority order:
 * 1. APP_URL (user-defined environment variable)
 * 2. NEXT_PUBLIC_SITE_URL (alternative standard convention)
 * 3. VERCEL_URL (automatically provided by Vercel runtime)
 * 4. Default fallback: 'https://caesar-cipher-app.vercel.app'
 */
export function getSiteUrl(): string {
  const envUrl = process.env.APP_URL || process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) {
    return envUrl.replace(/\/+$/, '');
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/+$/, '');
  }

  return 'https://caesar-cipher-app.vercel.app';
}

export const SITE_URL = getSiteUrl();
