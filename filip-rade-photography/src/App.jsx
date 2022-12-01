import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects/:imageCategory' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App