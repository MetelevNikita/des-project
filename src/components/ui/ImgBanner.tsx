import { FC, useState } from 'react'
import { animated, useSpringRef, useSpring } from '@react-spring/web'

//

import { Col } from 'react-bootstrap'

// components

import ArrIcon from './arrIcon'


interface SliderImgProps {
  img: string
}


const ImgBanner: FC<SliderImgProps> = ({ img }) => {

  // animation

const [arrow, api] = useSpring(() => ({
  from: { transform: 'translateX(-100px) translateY(100px)' },
}))


  const [mouse, setMouse] = useState(false)

  const arrowHandlerUp = () => {
    setMouse(true)
   api.start({
     transform: 'translateX(0px) trranslateY(-20px)',
   })
  }


  const arrowHandlerOut = () => {
    setMouse(false)
   api.start({
     transform: 'translateX(-100px) translateY(100px)',
   })
  }



  return (

      <div style = {{width: '389px', height: '459px', borderRadius: '20px', overflow: 'hidden'}}>


      <img onMouseEnter={() => {arrowHandlerUp()}} onMouseOut={()=> {arrowHandlerOut()}} src={img} alt="sliderImg" style={{zIndex: '0', width: '389px', height: '459px'}}></img>


      <animated.div style = {{...arrow, zIndex: '1'}}>
        <ArrIcon style={{width: '120px', height: '120px', position: 'absolute', top: '-100px', left:  '0px', zIndex: '1'}} />
      </animated.div>


      </div>

  )
}

export default ImgBanner