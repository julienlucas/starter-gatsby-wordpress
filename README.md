# Starter Gatsby + Wordpress Gatsby v1

This is my starter, it's inspired by this one: https://github.com/GatsbyCentral/gatsby-starter-wordpress (check also this page if you have problems).
I added:
  - Support for SEO / Yoast
  - Micro-datas
  - Manifest
  - Google Analytics
  - Wordpress API Menus
  - SMACSS structuration for the SCSS files (http://smacss.com/)

## Use It Now

gatsby new NAME https://github.com/julienlucas/starter-gatsby-wordpress

* Edit `gatsby-config.js`, change `baseUrl`
  - Make sure you have at least 1 post and 1 page on your WordPress site
  - Make sure at least 1 post has at least 1 tag
* Ensure the permalink structure in your WordPress installation is set to `Post Name` instead of the deafult `Plain`, or else the `gatsby-source-wordpress` plugin won't be able to communicate with WordPress
* Rejoice
  - For more information on the source plugin, check out the [gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress) repository page

### Known Limitations

* This is based on the [netlify starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms) which uses [bulma](https://bulma.io). This adds 150KB to every built page.
* Your WordPress site must have at least 1 post with 1 tag, or the starter will crash
* Nested pages / categories will not render with nested pages
  - A WordPress page like `/about/team/` will render on Gatsby as `/team/`
  - Likewise for categories
  - Discussion here https://github.com/GatsbyCentral/gatsby-starter-wordpress/issues/24

## CSS Processing

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and SMACSS for SCSS files structure. Purgecss only apply to the /styles folder.

## WordPress Setup

Check the [gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress) plugin for more information.

* You need to install some Wordpress plugins in your /plugins folder to use the Wordpress API, ACF, Menus and Yoast SEO. It's necessary, Otherwise the build will fail.
  - ACF to REST API : https://fr.wordpress.org/plugins/acf-to-rest-api/
  -	WP GraphQL : https://github.com/wp-graphql/wp-graphql
  - WP REST API Yoast SEO : https://github.com/ChazUK/wp-api-yoast-meta/blob/master/plugin.php
  - WP-REST-API V2 Menus : https://fr.wordpress.org/plugins/wp-rest-api-v2-menus/

## Contributors

This starter was forked from the netlify starter by the
[GatsbyCentral](https://www.gatsbycentral.com/) crew. Additional contributions
were gratefully received from the following folks:

* https://github.com/tomByrer
* https://github.com/dajocarter
