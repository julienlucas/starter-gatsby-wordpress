import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'

export default class IndexPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts } = data.allWordpressPost
    const title = 'Derniers articles'

    return (
      <Layout>
        <Helmet>
          <title>{`Blog | ${config.siteTitle}`}</title>
          <meta name="description" content={typeof data.yoast !== 'undefined' ? data.yoast.metadesc : ''} />
        </Helmet>
        <SEO pagePath="/blog" postNode={posts} postSEO />

        <main className="blog">
          <PostList posts={posts} title={title} />
          <Pagination pageContext={pageContext} pathPrefix="/" />
        </main>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    })
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  })
}

export const pageQuery = graphql`
  query IndexQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
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
