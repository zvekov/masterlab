module.exports = {
  siteName: "МастерЛаб",
  siteUrl: process.env.APP_URL || "https://masterlab.by",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      },
    },
    {
      use: "gridsome-source-static-meta",
      options: {
        path: "settings/*.json",
      },
    },
    {
      use: "gridsome-plugin-gtm",
      options: {
        id: "GTM-PWN25MW",
        enabled: true,
        debug: true,
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        config: {
          "/": {
            changefreq: "weekly",
            priority: 1,
            lastmod: "2020-07-14",
          },
        },
      },
    },
    {
      use: "gridsome-plugin-robots",
      options: {
        host: process.env.APP_URL,
        sitemap: process.env.APP_URL + "/sitemap.xml",
        policy: [
          { userAgent: "*", allow: "/", disallow: ["/*utm_"] },
          { userAgent: "YandexBot", allow: "/", disallow: ["/*utm_"] },
        ],
      },
    },
  ],
  chainWebpack: (config) => {
    config.resolve.alias.set("@modules", "@/resources/js/modules")
    config.resolve.alias.set("@utilities", "@/resources/js/utilities")
  },
}
