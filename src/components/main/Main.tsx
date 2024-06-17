import { FC, useEffect, useState } from 'react'

//

import { Row } from 'react-bootstrap'


// components

import BlockOne from './blockOne'
import BlockTwo from './blockTwo'
import BlockThree from './blockThree'
import BlockFour from './blockFour'

// slider


interface MainProps {
  scrollAnimation: any
  menuElem: any
}


const Main:FC<MainProps> = ({scrollAnimation, menuElem}) => {

   const {scroll, setScroll} = scrollAnimation


  return (

    <Row>
      <BlockOne title={`Творческий потенциал и дизайн решения`} />
      <BlockTwo />
      <BlockThree menuPortfolio={menuElem} scrollAnimation = {{scroll, setScroll}}/>
      <BlockFour menuPortfolio={menuElem}  scrollAnimation = {{scroll, setScroll}}/>
    </Row>

  )
}

export default Main
