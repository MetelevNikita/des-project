import { FC } from 'react'
import { Link } from 'react-router-dom'
import { animated, useSpring } from '@react-spring/web'
import styled from'styled-components'

//

import { Col, Row } from 'react-bootstrap'

// img

import imgLogo from './../../asset/logo.svg'
import be from './../../asset/header/behance.svg'
import vk from './../../asset/header/vk.svg'

// types

import { menuType,  socialLinkType} from '../types/types'







// animtated





const Header = () => {


  const StyledLink = styled.div`
    &:hover {
    transform: scale(1.10);
    transition: all 0.3s ease-in-out;
  }
  `





  const menu: menuType[] = [
    {
      title: 'О Дизайне',
      path: '/info'
    },
    {
      title: 'Портфолио',
      path: '/portfolio'
    }
  ]

  const socialLink: socialLinkType[] = [
    {
      img: be,
      link: 'https://www.behance.net/ol_semenova'
    },

    {
      img: vk,
      link: 'https://web.telegram.org/k/#@polezno_design'
    }
  ]


  // animtation


const springs = useSpring({
  from: {opacity: 0, transform: 'rotate(2turn)'},
  to: {opacity: 1, transform: 'rotate(0)',},
  config: {duration: 1000},
  })

  const line = useSpring({
    from: {
      opcity: 0,
      width: '0px'
    },
    to: {
      opacity: 1,
      width: '1400px'
    },
    config: {duration: 1000},

  })



  return (

    <Row md={12} className='mt-3 d-flex flex-md-row'>


      <Col lg={8} md={12} className='d-flex justify-content-lg-start justify-content-center mb-4'><animated.div style={{width: 'max-content', height: 'max-content', ...springs}}><Link to={'/'}><img src={imgLogo} alt="logo" /></Link></animated.div></Col>


      <Col lg={3} md={12} className='d-flex align-items-center justify-content-md-end justify-content-center flex-lg-row mb-4'>
        {menu.map((item, index) => {return <Col key={index} className='d-flex align-items-center justify-content-lg-end justify-content-center'><Link style={{color: 'black', textDecoration: 'none', fontSize: '16px', fontFamily: 'Montserrat'}} to={item.path} key={index}>{item.title}</Link></Col>})}
      </Col>


      <Col lg={1} md={12} className='d-flex align-items-center justify-content-center flex-lg-row mb-4'>
        {socialLink.map((item, index) => {return <Col key={index} className='d-flex align-items-center justify-content-center'><StyledLink><a href={item.link} key={index}><img src={item.img} alt="social" /></a></StyledLink></Col>})}
      </Col>


      <Row>
        <animated.div style={line}><Col md={12} style={{width: '100%', height: '1px', background: '#b8b8b8b8'}} className=''></Col></animated.div>

      </Row>

    </Row>
  )
}

export default Header
