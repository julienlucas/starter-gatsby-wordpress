import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export function HomeTemplate({ data }) {
  return (
    <div>
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
        <meta name="description" content={typeof data.yoast !== 'undefined' ? data.yoast.metadesc : ''} />
      </Helmet>
      <SEO pagePath="/" postNode={data} postSEO />

      <main className="home">
        <section className="section-1">
          <div className="container"></div>
        </section>
      </main>
    </div>
  )
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data
  return (
    <Layout>
      <HomeTemplate data={page} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query HomePageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date
      excerpt
      featured_media {
        source_url
      }
      link
      yoast {
        metadesc
      }
    }
  }
`
