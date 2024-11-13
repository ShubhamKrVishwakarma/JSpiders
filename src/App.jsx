import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import About from './pages/About/About'
import Team from './pages/Team/Team'
import Placement from './pages/Placement/Placement'
import Contact from './pages/Contact/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/placement' element={<Placement />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
