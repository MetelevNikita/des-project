import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'


// redux

import { useAppSelector } from '../types/redux-types'

//

import { Row, Col } from 'react-bootstrap'

// components

import PortfolioCard from './portfolioCard'
import PortfolioMenu from './PortfolioMenu'

// img

import web from '../../asset/portfolio-menu/web.svg'
import graph from '../../asset/portfolio-menu/graph.svg'
import illustration from '../../asset/portfolio-menu/illustr.svg'


import { PortfolioCardType } from '../types/types'



interface PortfolioPageProps {

  menuPortfolio: any
}


interface menuArrProps {
  title: string
  img: string

}

const PortfolioPage:FC<PortfolioPageProps> =  ( { menuPortfolio } )  =>  {


  const [scroll, setScroll]  = useState(0)



  window.addEventListener('scroll', () => {setScroll(window.scrollY)
 })


  console.log(scroll)

  const portfolioSelector = useAppSelector((state) => state.portfolio)
  const {menuTitle, setMenuTitle} = menuPortfolio


  const StyledMenu = styled.div`
      &:hover {
        color: #FF974D;
        text-decoration: underline;

      }
    `

  const [isHover, setIsHover] = useState(false)


  const line = useSpring({
    from: {
      opcity: 0,
      width: '0px'
    },
    to: {
      opacity: 1,
      width: '1400px'
    },
    config: {duration: 2000},
  })


  const menuWork: menuArrProps[] = [
    {
      title: 'Графический дизайн',
      img: graph
    },

    {
      title: 'Веб-дизайн',
      img: web
    },

    {
      title: 'Иллюстрации',
      img: illustration
    },

  ]


  return (

    <Row lg={12} md={12} style={{height: '100%'}} className='d-flex'>


      <Row className='mt-4'>
        <animated.div style={line}><Col md={12} style={{width: '100%', height: '1px', background: '#b8b8b8b8'}} className='mt-4'></Col></animated.div>
      </Row>



      <Col className='d-flex flex-lg-row flex-column  mt-4'>

          {menuWork.map((menu) => {return <Col className='d-flex align-items-center justify-content-center'><PortfolioMenu menuTitleArr={{menuTitle, setMenuTitle}} title={menu.title} img={menu.img}/></Col>})}

      </Col>




      <Col lg={12} md={12} sm={12} xs={12} style={{width: '100%'}} className='d-flex justify-content-center flex-lg-row flex-column mb-4 mt-4'>


      {(menuTitle === 'Графический дизайн') ? portfolioSelector.graphic.map((card: any, index: number) => {
        return <Col className='d-flex flex-md-row flex-column justify-content-center align-items-center mb-3' key={index}><PortfolioCard link={`${card.category}/${card.id}`} title={card.title} img={card.imgOne}></PortfolioCard></Col>
      }) : <></>}

      {(menuTitle === 'Веб-дизайн') ? portfolioSelector.web.map((card: any, index: number) => {
        return <Col className='d-flex flex-md-row flex-column justify-content-center align-items-center mb-3' key={index}><PortfolioCard link={`${card.category}/${card.id}`} title={card.title} img={card.titleImage}></PortfolioCard></Col>
      }) : <></>}

      {(menuTitle === 'Иллюстрации') ? portfolioSelector.illustration.map((card: any, index: number) => {
        return <Col className='d-flex flex-md-row flex-column justify-content-center align-items-center mb-3' key={index}><PortfolioCard link={`${card.category}/${card.id}`} title={card.title} img={card.titleImage}></PortfolioCard></Col>
      }) : <></>}



      </Col>





    </Row>






  )
}

export default PortfolioPage