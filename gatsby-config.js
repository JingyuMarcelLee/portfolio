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
  plugins: [
    `gatsby-plugin-material-ui`,
    // 'gatsby-theme-material-ui',
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
};