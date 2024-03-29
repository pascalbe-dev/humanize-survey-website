module.exports = {
  siteMetadata: {
    title: "culturyze - Macht New Work Kultur für Tech-Teams messbar",
    description:
      "Der einfachste Weg, Eure New Work Kultur zu messen: Tech-Teams, die ihre Kultur aktiv messen und weiterentwickeln erleben höhere Zufriedenheit, Innovationskraft und Produktivität. Mit culturyze helfen wir euch dabei, euer volles Potential zu entfalten.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `culturyze`,
        short_name: `culturyze`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#243763`,
        display: `standalone`,
        icon: `src/img/logo.png`,
      },
    },
    "gatsby-plugin-scroll-reveal",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Itim`,
            file: `https://fonts.googleapis.com/css2?family=Itim:wght@400;600;700&display=swap`,
          },
          {
            name: `Lato`,
            file: `https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
    "gatsby-plugin-postcss",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "9",
        matomoUrl: "https://humanizeworks.matomo.cloud",
        siteUrl: "https://culturyze.de",
        disableCookies: true,
        enableJSErrorTracking: true,
        respectDnt: true,
        trackLoad: false,
      },
    },
    // make sure to keep it last in the array
    "gatsby-plugin-netlify",
  ],
};
