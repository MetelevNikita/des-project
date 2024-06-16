import { FC } from 'react'

//

import { Col, Row } from 'react-bootstrap'

// components

import BlockOne from '../main/blockOne'
import InfoAbout from './InfoAbout'
import BlockFour from '../main/blockFour'


interface InfoProps {
  scrollAnimation: any
  menuElem: any
}

const Info: FC<InfoProps> = ({ scrollAnimation, menuElem }) => {

  const {scroll, setScroll} = scrollAnimation

  return (
    <Row md={12}>

      <BlockOne title={`Творческий потенциал и дизайн решения`} />
      <InfoAbout />
      <BlockFour menuPortfolio={menuElem} scrollAnimation={{scroll, setScroll}} />

    </Row>
  )
}

export default Info