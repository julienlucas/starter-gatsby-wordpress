const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Julien/Desktop/starter-gatsby-wordpress/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Julien/Desktop/starter-gatsby-wordpress/src/pages/404.js"))),
  "component---src-templates-author-js": hot(preferDefault(require("/Users/Julien/Desktop/starter-gatsby-wordpress/src/templates/author.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/Julien/Desktop/starter-gatsby-wordpress/src/templates/blog.js"))),
  "component---src-templates-category-js": hot(preferDefault(require("/Users/Julien/Desktop/starter-gatsby-wordpress/src/templates/category.js"))),
  "component---src-templates-home-js": hot(preferDefault(require("/Users/Julien/Desktop/starter-gatsby-wordpress/src/templates/home.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/Julien/Desktop/starter-gatsby-wordpress/src/templates/page.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/Julien/Desktop/starter-gatsby-wordpress/src/templates/post.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("/Users/Julien/Desktop/starter-gatsby-wordpress/src/templates/tag.js")))
}

