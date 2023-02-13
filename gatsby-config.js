module.exports = {
  siteMetadata: {
    title: "Culture Clues",
    description:
      "Der einfachste Weg, Eure New-Work Kultur zu messen: Teams, die ihre Kultur aktiv messen und weiterentwickeln erleben höhere Zufriedenheit, Innovationskraft und Produktivität. Mit Culture Clues helfen wir euch dabei, euer volles Potential zu entfalten.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
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
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
