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
  menuElem: any
}


const Main:FC<MainProps> = ({scrollAnimation, menuElem}) => {

   const {scroll, setScroll} = scrollAnimation
   const {menuTitle, setMenuTitle} = menuElem


  return (

    <Row>
      <BlockOne title={`Творческий потенциал и дизайн решения`} />
      <BlockTwo />
      <BlockThree scrollAnimation = {{scroll, setScroll}}/>
      <BlockFour menuPortfolio={menuElem}  scrollAnimation = {{scroll, setScroll}}/>
    </Row>

  )
}

export default Main
