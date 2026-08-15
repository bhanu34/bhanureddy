module.exports = {
  pathPrefix: '/bhanureddy',
  siteMetadata: {
    title: 'Bhanu's Website',
    author: { 
      name: 'Bhanu Pratap Reddy' 
    },
    pathPrefix: '/bhanureddy',
    siteUrl: 'https://bhanu34.github.io/bhanureddy',
    description:
      'Modeling and Simulation Engineer. This is my digital garden.',
    feedUrl: 'https://bhanu34.github.io/bhanureddy/rss.xml',
    logo: 'https://bhanu34.github.io/bhanureddy/logo.png',
  },
  plugins: [
    // ===================================================================================
    // Meta
    // ===================================================================================
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bhanu Pratap Reddy',
        short_name: 'Bhanu',
        start_url: '/bhanureddy/',
        background_color: '#ffffff',
        theme_color: '#226f8a',
        display: 'minimal-ui',
        icon: 'src/assets/mascot.svg',
      },
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
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [
                    { 'content:encoded': edge.node.html },
                    { author: 'Bhanu Pratap Reddy' },
                  ],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 30
                  sort: {frontmatter: {date: DESC}}
                  filter: {frontmatter: {template: {eq: "post"}}}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        template
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Bhanu Pratap Reddy | RSS Feed',
          },
        ],
      },
    },

    // ===================================================================================
    // Images, styles, and static
    // ===================================================================================

    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          backgroundColor: `transparent`,
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },
    'gatsby-plugin-image',

    // ===================================================================================
    // Markdown
    // ===================================================================================

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: 'transparent',
              maxWidth: 590,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '>',
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: true,
              },
            },
          },
        ],
      },
    },

    // ===================================================================================
    // Search
    // ===================================================================================

    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: {
          encode: 'icase',
          tokenize: 'forward',
          async: false,
        },
        query: `
          {
            allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" } } }) {
              nodes {
                id
                frontmatter {
                  title
                  tags
                  slug
                  date(formatString: "MMMM DD, YYYY")
                }
                rawMarkdownBody
              }
            }
          }
        `,
        ref: 'id',
        index: ['title', 'tags'],
        store: ['id', 'slug', 'title', 'tags', 'date'],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map((node) => ({
            id: node.id,
            slug: `/${node.frontmatter.slug}`,
            title: node.frontmatter.title,
            body: node.rawMarkdownBody,
            tags: node.frontmatter.tags,
            categories: node.frontmatter.categories,
            date: node.frontmatter.date,
          })),
      },
    },
  ],
}
