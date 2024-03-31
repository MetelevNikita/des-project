import { FC, useState } from 'react'
import { animated, useSpringRef, useSpring } from '@react-spring/web'

//

import { Col } from 'react-bootstrap'

// components

import ArrIcon from './arrIcon'


interface SliderImgProps {
  img: string
}


const SliderImg: FC<SliderImgProps> = ({ img }) => {

  // animation

const [arrow, api] = useSpring(() => ({
  from: { transform: 'translateX(-200px)' },
}))


  const [mouse, setMouse] = useState(false)

  const arrowHaandler = () => {
    setMouse(true)
   api.start({
     transform: 'translateX(0px)',
   })


  }



  return (

    <Col style = {{width: '389px', height: '500px', overflow: 'hidden'}}>


        <img onMouseOver={()=> {arrowHaandler()}} src={img} alt="sliderImg" style={{zIndex: '0', width: '389px', height: '459px'}}></img>


        {(mouse) ? <animated.div style = {{...arrow, zIndex: '1'}}>
           <ArrIcon style={{width: '140px', height: '120px', position: 'absolute', top: '-100px', left:  '0px', zIndex: '1'}} />
        </animated.div> : null}


    </Col>

  )
}

export default SliderImg