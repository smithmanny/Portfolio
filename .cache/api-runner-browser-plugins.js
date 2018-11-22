module.exports = [{
      plugin: require('/Users/shakhor/Projects/Web/Portfolio/node_modules/gatsby-plugin-amplitude-analytics/gatsby-browser'),
      options: {"plugins":[],"head":false,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"],"eventTypes":{"outboundLinkClick":"OUTBOUND_LINK_CLICK","pageView":"PAGE_VIEW"},"amplitudeConfig":{"saveEvents":true,"includeUtm":true,"includeReferrer":true}},
    },{
      plugin: require('/Users/shakhor/Projects/Web/Portfolio/node_modules/gatsby-plugin-offline/gatsby-browser'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/shakhor/Projects/Web/Portfolio/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
