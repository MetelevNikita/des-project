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




const Main:FC = () => {


 const [scroll, setScrol] = useState(0)

 const handleScroll = () => {
  setScrol(window.scrollY)


 }


window.addEventListener('scroll', handleScroll)







  return (

    <Row>
      <BlockOne title={`Творческий потенциал и дизайн решения`} />

      {/*  */}

      <SliderController />

      {/*  */}

      <BlockTwo />
      <BlockThree />
      <BlockFour  scrollAnimation = {{scroll, setScrol}}/>



    </Row>

  )
}

export default Main
