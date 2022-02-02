module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                tableOfContents: {
                    heading: null,
                    maxDepth: 6,
                },
            },
        },
        `gatsby-plugin-mdx`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,

    ]
}