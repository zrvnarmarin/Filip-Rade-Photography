import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App