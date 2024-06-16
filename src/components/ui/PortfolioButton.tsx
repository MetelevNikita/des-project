import { FC } from 'react'
import styled from 'styled-components'

//

import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// img

import imgButton from '../../asset/blockTwo/portfolio-button.png'
import videoPortfolio from '../../asset/blockTwo/video-img.png'


const StyledImg  =  styled.img`
  &:hover{
    transform: scale(1.10);
    transition: all 0.3s ease-in-out;
  }
`


const PortfolioButton = () => {
  return (
    <Col>

      <Col><img src={videoPortfolio} alt="video-portfolio" /></Col>
      <Col style={{marginTop: '-155px'}}><Link to={'/portfolio'}><StyledImg src={imgButton} alt="portfolio-button"/></Link></Col>

    </Col>
  )
}

export default PortfolioButton