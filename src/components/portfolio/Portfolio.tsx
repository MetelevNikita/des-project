import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

// components

import BlockOne from '../main/blockOne'
import PortfolioPage from './portfolioPage'

const Portfolio = () => {
  return (
    <Row>
      
      <BlockOne title={`Творческий потенциал и дизайн решения`}/>
      <PortfolioPage />

    </Row>
  )
}

export default Portfolio