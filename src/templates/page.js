import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export function PageTemplate({ data }) {
  return (
    <div>
      <Helmet>
        <title>{`${data.title} | ${config.siteTitle}`}</title>
        <meta name="description" content={typeof data.yoast !== 'undefined' ? data.yoast.metadesc : ''} />
      </Helmet>
      <SEO pagePath={data.slug} postNode={data} postSEO />

      <main className="page">
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

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <PageTemplate data={page} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
      yoast {
        metadesc
      }
    }
  }
`
