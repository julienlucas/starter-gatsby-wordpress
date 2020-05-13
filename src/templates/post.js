import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export function BlogPostTemplate({ data }) {
  return (
    <div>
      <Helmet>
        <title>{`${data.title} | ${config.siteTitle}`}</title>
        <meta name="description" content={data.yoast.metadesc} />
      </Helmet>
      <SEO pagePath={data.slug} postNode={data} postSEO />

      <main className="single">
       <section className="section-1">
          <div className="container">
            <h1>{data.title}</h1>
            <div className="content" dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </section>
      </main>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <Layout>
      <BlogPostTemplate data={post}/>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  })
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        slug
      }
      yoast {
        metadesc
      }
    }
  }
`
