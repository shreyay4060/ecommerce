import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/NAvbar'

export default function Layout({children}) {
  return (
    <div>
        <Navbar />
        <div className='main-content min-h-screen'>
            {children}
        </div>
        <Footer />
      
    </div>
  )
}
