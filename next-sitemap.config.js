/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://preciodolar.lat",
  generateRobotsTxt: true, // (optional)
  // ...other options
  outDir: "./out",
};
