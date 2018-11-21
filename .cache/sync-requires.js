// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/shakhor/Projects/Web/Portfolio/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/shakhor/Projects/Web/Portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/shakhor/Projects/Web/Portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/shakhor/Projects/Web/Portfolio/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/shakhor/Projects/Web/Portfolio/src/pages/blog.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/shakhor/Projects/Web/Portfolio/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/shakhor/Projects/Web/Portfolio/src/pages/index.js"))
}

