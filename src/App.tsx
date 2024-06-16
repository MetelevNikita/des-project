import { FC, useState, useEffect, useRef } from 'react'
import { useAppDispatch } from './components/types/redux-types';
import { useAppSelector } from './components/types/redux-types';

// redux async

import { getAsyncPortfolioWeb, getAsyncPortfolioGraphic, getAsyncPortfolioIllustration } from './store/portfolioSlice';

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
import PortfolioOpenPage from './components/portfolio/PortfolioOpenPage';
import Footer from './components/footer/Footer';

const App = () => {


  // redux

  useEffect(() => {
    dispatch(getAsyncPortfolioWeb())
    dispatch(getAsyncPortfolioGraphic())
    dispatch(getAsyncPortfolioIllustration())
  }, [])

  const dispatch = useAppDispatch();
  const PortfolioSelector = useAppSelector(state => state.portfolio);


  const [scroll, setScroll] = useState(0)
  const handleScroll = () => {
   setScroll(window.scrollY)
  }
 window.addEventListener('scroll', handleScroll)


 const [menuTitle, setMenuTitle] = useState('Графический дизайн')

  return (
    <div className='App'>
      <Container>
        <Header/>

        <Routes>
          <Route path='/' element={<Main menuElem={{menuTitle, setMenuTitle}} scrollAnimation={{scroll, setScroll}}/>}/>
          <Route path='/info' element={<Info menuElem={{menuTitle, setMenuTitle}} scrollAnimation={{scroll, setScroll}}/>}/>
          <Route path='/portfolio' element={<Portfolio menuElem={{menuTitle, setMenuTitle}}/>}/>
          <Route path='portfolio/:category/:id' element={<PortfolioOpenPage />}/>
        </Routes>

        <Footer/>
      </Container>
    </div>
  )
}

export default App
