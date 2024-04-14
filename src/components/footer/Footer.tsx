import { FC } from 'react'
import styled from 'styled-components'
//

import { Row, Col } from 'react-bootstrap'

// img

import BH from './../../asset/footer/behance.svg'
import VK from './../../asset/footer/vk.svg'

// types

import { menuType, socialLinkType } from '../types/types'


const Footer = () => {

  const StyledLink = styled.div`
  &:hover {
    transform: scale(1.10);
    transition: all 0.3s ease-in-out;
  }
`

  const socialLink: socialLinkType[] = [
    {
      img: BH,
      link: 'https://www.behance.net/ol_semenova'
    },

    {
      img: VK,
      link: 'https://web.telegram.org/k/#@polezno_design'
    }
  ]




  return (

    <Row md={12} style={{width: '100%', height: '80px', padding: '0px', backgroundColor: 'black', position: 'absolute', left: '0'}} className='d-flex justify-content-center align-items-center'>
      <Col className='d-flex justify-content-center align-items-center' md={1}>


      {socialLink.map((link) => {
        return <StyledLink><a href={link.link}><img style={{margin: '10px'}} src={link.img} alt="behance" /></a></StyledLink>
      })}


        </Col>
    </Row>

  )
}

export default Footer
