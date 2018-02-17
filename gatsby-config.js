module.exports = {
  siteMetadata: {
    title: "David Carter | Web Developer",
    author: "David Carter",
    description:
      "Hi, my name's David Carter and I'm a web developer specializing in custom WordPress development. I'm passionate about learning and motivated to solve problems efficiently.",
    url: "https://www.dajocarter.com"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 728
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-67280088-1`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dajocarter`,
        short_name: `dajocarter`,
        start_url: `/`,
        background_color: `#252830`,
        theme_color: `#cfd2da`,
        display: `minimal-ui`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-256x256.png`,
            sizes: `256x256`,
            type: `image/png`
          },
          {
            src: `/favicons/aaple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`
          },
          {
            src: `/favicons/mstile-150x150.png`,
            sizes: `150x150`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#1997c6`,
        showSpinner: false
      }
    }
  ]
};
