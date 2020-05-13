import React, { useEffect } from 'react'
import Layout from '../components/Layout'

function NotFoundPage(props) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      window.location.href = '/'
    }
  })

  return (
    <Layout/>
  )
}

export default NotFoundPage
