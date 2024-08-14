/** @type {import('next-sitemap').IConfig} */

const excludeRoutes = [
  '/robots.txt',
  '/apple-icon.png',
  '/manifest.webmanifest',
];

module.exports = {
  siteUrl: 'https://aavault.io',
  generateRobotsTxt: false,
  exclude: excludeRoutes,
  changefreq: 'daily',
  priority: 1.0,
  generateIndexSitemap: false,
};
