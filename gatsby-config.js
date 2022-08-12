module.exports = {
  siteMetadata: {
    title: `Jingyu (Marcel) Lee`,
    siteTitleAlt: `Marcel's Dev Portfolio`,
    siteHeadline: `Marcel's Dev Portfolio`,
    siteUrl: `https://jingyumarcellee.gatsbyjs.io/`,
    description: `Jingyu(Marcel) Lee's Personal Portfolio Website`,
    author: `@JingyuMarcelLee`,
    siteLanguage: `en`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-material-ui", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};