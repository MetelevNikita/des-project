import { FC, useEffect, useState } from 'react'

//

import { Row } from 'react-bootstrap'


// components

import BlockOne from './blockOne'
import BlockTwo from './blockTwo'
import BlockThree from './blockThree'
import BlockFour from './blockFour'

// slider

import SliderController from '../slider/sliderController'

interface MainProps {
  scrollAnimation: any
}


const Main:FC<MainProps> = ({scrollAnimation}) => {

   const {scroll, setScroll} = scrollAnimation


  return (

    <Row>
      <BlockOne title={`Творческий потенциал и дизайн решения`} />
      <BlockTwo />
      <BlockThree />
      <BlockFour  scrollAnimation = {{scroll, setScroll}}/>
    </Row>

  )
}

export default Main
