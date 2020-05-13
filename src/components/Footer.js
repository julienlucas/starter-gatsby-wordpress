import React from 'react'

function Footer() {
  const date = new Date()
  date.setDate(date.getDate())
  const currentYear = date.getFullYear()

  return (
    <footer className="footer">
      <p>{currentYear} © Julien Lucas</p>
    </footer>
  )
}

export default Footer
