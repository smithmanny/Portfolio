module.exports = [{
      plugin: require('/Users/shakhor/Projects/Web/Portfolio/node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/shakhor/Projects/Web/Portfolio/node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography"},
    },{
      plugin: require('/Users/shakhor/Projects/Web/Portfolio/node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"defaultLayouts":{"posts":"/Users/shakhor/Projects/Web/Portfolio/src/templates/blog-post.js"},"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":590}},{"resolve":"gatsby-transformer-remark","options":{"plugins":[{"resolve":"gatsby-remark-external-links","options":{"target":"_target","rel":"nofollow"}}]}}]},
    },{
      plugin: require('/Users/shakhor/Projects/Web/Portfolio/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
