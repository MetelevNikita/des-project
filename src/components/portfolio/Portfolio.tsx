import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

// components

import BlockOne from '../main/blockOne'
import PortfolioPage from './portfolioPage'

interface PortfolioProps  {
  menuElem: any
}

const Portfolio:FC<PortfolioProps> = ({ menuElem }) => {
  return (
    <Row>

      <BlockOne title={`Творческий потенциал и дизайн решения`}/>
      <PortfolioPage menuPortfolio={menuElem}/>

    </Row>
  )
}

export default Portfolio