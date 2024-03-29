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
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Container>
        <Header/>

        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>

        <Footer/>
      </Container>
    </div>
  )
}

export default App
