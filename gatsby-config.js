module.exports = {
  siteMetadata: {
    title: `Thant Zin Oo`,
    description: `Thoughts and Notes`,
    author: `@mgthantzin`,
    siteUrl: `https://thantzinoo.net`
  },
  plugins: [
    //{
    //  resolve: `gatsby-plugin-google-analytics`,
    //  options: {
    //    trackingId: "UA-16451756-4",        
    //    anonymize: true,        
    //    respectDNT: true,
    //  },
    //},
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // baseUrl will need to be updated with your WordPress source
        baseUrl: `wp.thantzinoo.net`,
        protocol: `http`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.content,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + `/posts/` + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + `/posts/` + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.content }],
                })
              })
            },
            query: `
              {
                allWordpressPost(sort: {order: DESC, fields: [date]}) {
                  edges {
                    node {
                      date
                      title
                      content
                      slug
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Thant Zin Oo's Blog Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/posts/",
            // optional configuration to specify external rss feed, such as feedburner
            //link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
