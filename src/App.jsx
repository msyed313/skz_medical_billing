import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import Footer from './pages/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<About/>} path='/about' />
        <Route element={<Services/>} path='/services' />
        <Route element={<Contact/>} path='/contact' />
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App