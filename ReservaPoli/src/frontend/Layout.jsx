import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Instalaciones from './Instalaciones.jsx'
import Footer from './Footer.jsx'

function Layout() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleNavigation = (e) => {
      const href = e.target.getAttribute('href')
      if (href === '/instalaciones') {
        e.preventDefault()
        setCurrentPage('instalaciones')
        window.scrollTo(0, 0)
      } else if (href === '/' || href === '#') {
        e.preventDefault()
        setCurrentPage('home')
        window.scrollTo(0, 0)
      }
    }

    document.addEventListener('click', handleNavigation)
    return () => document.removeEventListener('click', handleNavigation)
  }, [])

  return (
    <div className="layout">
      <Navbar />
      {currentPage === 'home' && <Home />}
      {currentPage === 'instalaciones' && <Instalaciones />}
      <Footer />
    </div>
  )
}

export default Layout
