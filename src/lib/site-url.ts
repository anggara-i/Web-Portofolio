const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL;

export function getSiteUrl() {
  if (!configuredSiteUrl) {
    return "http://localhost:3000";
  }

  const siteUrl = /^https?:\/\//i.test(configuredSiteUrl)
    ? configuredSiteUrl
    : `https://${configuredSiteUrl}`;

  return siteUrl.replace(/\/+$/, "");
}
