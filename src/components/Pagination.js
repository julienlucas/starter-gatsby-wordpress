import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <nav className="pagination" role="navigation">
      <div className="navbar navbar-menu">
        {previousPagePath && (
          <div className="navbar-item">
            <Link to={previousPagePath} rel="prev">Articles plus récents</Link>
          </div>
        )}
        {nextPagePath && (
          <div className={`navbar-item ${previousPagePath === '' ? 'no-prev' : null}`}>
            <Link to={nextPagePath} rel="next">Articles plus anciens</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Pagination
