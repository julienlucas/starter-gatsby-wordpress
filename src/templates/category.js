import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import SEO from '../components/SEO'

const Category = props => {
  const { data, pageContext } = props
  const { edges: posts } = data.allWordpressPost
  const { name: category } = pageContext
  const title = `${category.toUpperCase()[0] + category.slice(1)}`

  return (
    <Layout>
      <Helmet>
        <title>{`${category} | ${config.siteTitle}`}</title>
        <meta name="description" content={`Articles dans la catégorie ${title}`} />
      </Helmet>
      <SEO pagePath={`/${category}`} postNode={posts} postSEO />

      <main className="category">
        <PostList posts={posts} title={title} />
      </main>
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryPage($slug: String!) {
    allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          ...PostListFields
          yoast {
            metadesc
          }
        }
      }
    }
  }
`
