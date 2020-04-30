module.exports = {
  siteMetadata: {
    title: `Nick's portfolio`,
    description: `My portfolio`,
    author: `Nick Van Royen`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nick Van Royen`,
        short_name: `nivr`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/fav.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
