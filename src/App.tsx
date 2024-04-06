import { FC, useState, useEffect, useRef } from 'react'

// css

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//

import { Container } from 'react-bootstrap'

// router

import { Routes, Route } from'react-router-dom'

// components

import Header from './components/header/Header';
import Main from './components/main/Main';
import Info from './components/info/Info';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

const App = () => {


  const [scroll, setScroll] = useState(0)

  const handleScroll = () => {
   setScroll(window.scrollY)


  }


 window.addEventListener('scroll', handleScroll)



  return (
    <div className='App'>
      <Container>
        <Header/>

        <Routes>
          <Route path='/' element={<Main scrollAnimation={{scroll, setScroll}}/>}/>
          <Route path='/info' element={<Info scrollAnimation={{scroll, setScroll}}/>}/>
          <Route path='/portfolio' element={<Portfolio />}/>
        </Routes>

        <Footer/>
      </Container>
    </div>
  )
}

export default App
