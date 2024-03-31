import { FC } from 'react'
import { Link } from 'react-router-dom'
import { animated, useSpring } from '@react-spring/web'

//

import { Col, Row } from 'react-bootstrap'

// img

import imgLogo from './../../asset/logo.svg'
import be from './../../asset/header/behance.svg'
import vk from './../../asset/header/vk.svg'


interface menuProps {
  title: string
  path: string
}

interface SocialLinkProps {
  img: string,
  link: string
}


// animtated



const Header = () => {

  const menu: menuProps[] = [
    {
      title: 'О Дизайне',
      path: '/'
    },
    {
      title: 'Портфолио',
      path: '/'
    }
  ]

  const socialLink: SocialLinkProps[] = [
    {
      img: be,
      link: 'https://www.behance.net/'
    },

    {
      img: vk,
      link: 'https://vk.com'
    }
  ]


  // animtation


const springs = useSpring({
  from: {opacity: 0, transform: 'rotate(2turn)'},
  to: {opacity: 1, transform: 'rotate(0)',},
  config: {duration: 2000},
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
    config: {duration: 2000},

  })



  return (

    <Row md={12} className='mt-3 d-flex flex-md-row'>


      <animated.img></animated.img>

      <Col md={8} className='d-flex justify-content-md-start justify-content-center mb-4'><animated.div style={{width: 'max-content', height: 'max-content', ...springs}}><img src={imgLogo} alt="logo" /></animated.div></Col>


      <Col md={3} className='d-flex align-items-center justify-content-md-end justify-content-center flex-md-row mb-4'>
        {menu.map((item, index) => {return <Col key={index} className='d-flex align-items-center justify-content-md-end justify-content-center'><Link style={{color: 'black', textDecoration: 'none', fontSize: '16px', fontFamily: 'Montserrat'}} to={item.path} key={index}>{item.title}</Link></Col>})}
      </Col>


      <Col md={1} className='d-flex align-items-center justify-content-center flex-md-row mb-4'>
        {socialLink.map((item, index) => {return <Col key={index} className='d-flex align-items-center justify-content-center'><a href={item.link} key={index}><img src={item.img} alt="social" /></a></Col>})}
      </Col>


      <Row>
        <animated.div style={line}><Col md={12} style={{width: '100%', height: '1px', background: '#b8b8b8b8'}} className=''></Col></animated.div>

      </Row>

    </Row>
  )
}

export default Header