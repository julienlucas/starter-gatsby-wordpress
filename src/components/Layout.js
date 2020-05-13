import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import '../styles/styles.scss'

function LayoutWrapper({ children }) {
  // Prevent drag on elements of the page
  const preventDragHandler = e => {
    e.preventDefault()
  }

  return (
    <div className="wrapper" role="document" onDragStart={(e) => preventDragHandler(e)}>
      <Navbar/>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default LayoutWrapper