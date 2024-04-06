import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'



//

import { Row, Col } from 'react-bootstrap'

// components

import PortfolioCard from './portfolioCard'



interface PortfolioPageProps {
  title: string
  link: string
}

const PortfolioPage: FC = () => {

  const StyledMenu = styled.div`
      &:hover {
        color: #FF974D;
        text-decoration: underline;

      }
    `

  const [isHover, setIsHover] = useState(false)
  console.log(isHover)


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
      link: '/portfolio/graphicDesign'
    },

    {
      title: 'Веб-дизайн',
      link: '/portfolio/web-design'
    },

    {
      title: 'Иллюстрации',
      link: '/portfolio/illustration'
    },

  ]








  return (

    <Row md={12} style={{height: '100%'}}>


      <Row className='mt-4'>
        <animated.div style={line}><Col md={12} style={{width: '100%', height: '1px', background: '#b8b8b8b8'}} className='mt-4'></Col></animated.div>
      </Row>



    <Row md={12}>
      <Col md={12} className='d-flex flex-row justify-content-between align-items-center mt-4'>

        {menuWork.map((menu, index) => {
          return <Link className='d-flex justify-content-center align-items-center' style={{textDecoration: 'none'}} to={menu.link}><Col style={{width: '100%', height: '100%', fontSize: '32px', fontFamily: 'Unbounded', color: 'black', textDecoration: 'none'}} md={4}><StyledMenu>{menu.title}</StyledMenu></Col></Link>
        })}

      </Col>

    </Row >


    <Row className='mt-5 mb-5'>

      <PortfolioCard />


    </Row>




    </Row>






  )
}

export default PortfolioPage