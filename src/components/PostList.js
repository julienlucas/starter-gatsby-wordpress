import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { date } from '../functions/date'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <div className="container">
        <h1>{title}</h1>
        {posts.map(({ node: post }) => (
          <div className="content" key={post.id}>
            <Link to={post.slug}>
              <h3>{post.title}</h3>
            </Link>

            <p>{date(post.date)}</p>

            {post.categories && post.categories.length && post.categories[0].slug !== 'non-classe' ? (
              <ul className="category">
                {post.categories.map(category => (
                  <li key={`${category.slug}cat`}>
                    <Link to={`/categories/${category.slug}/`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : ''}

            <div className="text" dangerouslySetInnerHTML={{__html: post.excerpt.replace(/<p class="link-more.*/, '')}}/>
            <Link className="read-more" to={post.slug}>Lire l'article</Link>
          </div>
        ))}
      </div>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    categories {
      name
      slug
    }
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`
