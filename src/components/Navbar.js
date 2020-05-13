import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../../static/img/logo.svg'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressMenusMenusItems {
          edges {
            node {
              items {
                url
                title
              }
              name
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/"><img src={logo} width="150px" className="logo" alt=""/></Link>
          </div>
          <div className="navbar-left">
            <ul>
            {/* Replace 'Menu Primaire' by the name of your Wordpress menu */}
            {data.allWordpressMenusMenusItems.edges
            .filter((edge) => { return edge.node.name === 'Menu Primaire' })
            .map(edge =>
              edge.node.items.map(item => (
                <li>
                  <Link
                    className="navbar-item"
                    to={item.url}
                    key={item.url}
                  > {item.title}
                  </Link>
                </li>
              ))
            )}
            </ul>
          </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar
