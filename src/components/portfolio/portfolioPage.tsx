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
import { PortfolioCardType } from '../types/types'



interface PortfolioPageProps {
  title: string
}

const PortfolioPage: FC = () => {

  const portfolioSelector = useAppSelector((state) => state.portfolio)
  console.log(portfolioSelector)

  const StyledMenu = styled.div`
      &:hover {
        color: #FF974D;
        text-decoration: underline;

      }
    `

  const [isHover, setIsHover] = useState(false)
  const [menu, setMenu] = useState('Графический дизайн')


  console.log(menu)

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


  const menuWork: PortfolioPageProps[] = [
    {
      title: 'Графический дизайн',
    },

    {
      title: 'Веб-дизайн',
    },

    {
      title: 'Иллюстрации',
    },

  ]








  return (

    <Row md={12} style={{height: '100%'}}>


      <Row className='mt-4'>
        <animated.div style={line}><Col md={12} style={{width: '100%', height: '1px', background: '#b8b8b8b8'}} className='mt-4'></Col></animated.div>
      </Row>



    <Row md={12}>
      <Col md={12} className='d-flex flex-md-row flex-column justify-content-between align-items-center mt-4'>

        {menuWork.map((menu, index) => {
          return <Col className='mb-3' onClick={() => {setMenu(menu.title)}} style={{width: '389px', height: '100%', fontSize: '26px', fontFamily: 'Unbounded', color: 'black', textDecoration: 'none', textAlign: 'center'}} md={4}><StyledMenu>{menu.title}</StyledMenu></Col>
        })}

      </Col>

    </Row >


    <Row className='mt-5 mb-5'>
      <Col className='d-flex flex-md-row flex-column justify-content-center'>


      {(menu === 'Графический дизайн') ? portfolioSelector.graphic.map((card: any, index: number) => {
        return <Col className='d-flex flex-md-row flex-column justify-content-center align-items-center mb-3' md={4} key={index}><PortfolioCard link='title' title={card.title} img={card.titleImage}></PortfolioCard></Col>
      }) : <></>}

      {(menu === 'Веб-дизайн') ? portfolioSelector.web.map((card: any, index: number) => {
        return <Col className='d-flex flex-md-row flex-column justify-content-center align-items-center mb-3' md={4} key={index}><PortfolioCard link='title' title={card.title} img={card.titleImage}></PortfolioCard></Col>
      }) : <></>}

      {(menu === 'Иллюстрации') ? portfolioSelector.illustration.map((card: any, index: number) => {
        return <Col className='d-flex flex-md-row flex-column justify-content-center align-items-center mb-3' md={4} key={index}><PortfolioCard link='title' title={card.title} img={card.titleImage}></PortfolioCard></Col>
      }) : <></>}



      </Col>
    </Row>




    </Row>






  )
}

export default PortfolioPage