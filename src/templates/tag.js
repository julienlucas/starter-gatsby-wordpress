import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'

const Tag = props => {
  const { data, pageContext } = props
  const { edges: posts } = data.allWordpressPost
  const { name: tag } = pageContext
  const title = `${tag.toUpperCase()[0] + tag.slice(1)}`

  return (
    <Layout>
      <Helmet>
        <title>{`${tag} | ${config.siteTitle}`}</title>
        <meta name="description" content={typeof data.yoast !== 'undefined' ? data.yoast.metadesc : ''} />
      </Helmet>
      <SEO pagePath={`/${tag}`} postNode={posts} postSEO />

      <PostList posts={posts} title={title} />
    </Layout>
  )
}

export default Tag

export const pageQuery = graphql`
  query TagPage($slug: String!) {
    allWordpressPost(filter: { tags: { elemMatch: { slug: { eq: $slug } } } }) {
      totalCount
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
