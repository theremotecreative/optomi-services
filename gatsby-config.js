module.exports = {
  siteMetadata: {
    title: `OPS`,
    description: `Identifying and creating the best tech talent to help define the technology of tomorrow`,
    author: `@optomi_`,
    siteUrl: `https://optomiservices.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 1000
      },
    },
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `optomiservices.wpengine.com/`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/home_section", // <== Custom post slug
          "**/team_member", // <== Custom post slug
          "**/custom_page", // <== Custom post slug
          "**/news", // <== Custom post slug
          "**/location", // <== Custom post slug
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `2202442890`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-132662270-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `optomi-professional-services`,
        short_name: `ops`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#61b1e8`,
        display: `minimal-ui`,
        icon: `src/images/ops-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
