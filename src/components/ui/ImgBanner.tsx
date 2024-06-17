import { FC, useState } from 'react'
import { animated, useSpringRef, useSpring } from '@react-spring/web'

//

import { Col } from 'react-bootstrap'

// components

import ArrIcon from './arrIcon'


interface SliderImgProps {
  img: string
  title: string
}


const ImgBanner: FC<SliderImgProps> = ({ img, title }) => {

  // animation

const [arrow, api] = useSpring(() => ({
  from: { transform: 'translateX(-100px) translateY(100px)' },
}))


  const [mouse, setMouse] = useState(false)
  const [opacityImg, setOpacityImg] = useState(0)

  const arrowHandlerUp = () => {
    setOpacityImg(1)
    setMouse(true)
   api.start({
     transform: 'translateX(0px) trranslateY(-20px)',
   })
  }


  const arrowHandlerOut = () => {
    setOpacityImg(0)
    setMouse(false)
   api.start({
     transform: 'translateX(-100px) translateY(100px)',
   })
  }



  return (

      <div style = {{width: '390px', height: '271px', borderRadius: '50px', overflow: 'hidden'}}>



      <img src={img} alt="sliderImg" style={{zIndex: '0', width: '390px', height: '271px',}}></img>



      <div onMouseEnter={() => {arrowHandlerUp()}} onMouseOut={()=> {arrowHandlerOut()}} style = {{width: '390px', height: '271px', borderRadius: '20px', backgroundColor: '#00000067', position: 'relative', top: '-271px', opacity: opacityImg, transition: 'all 0.3s ease'}}>

        <div style={{color: 'white', marginLeft: '20px', paddingTop: '20px', maxWidth: '290px', height: '78px', fontSize: '20px'}}>{title}</div>

        <animated.div style = {{...arrow}}>
        <ArrIcon style={{width: '120px', height: '120px', position: 'absolute', top: '97px', left:  '-4px'}} />
        </animated.div>

      </div>















      </div>

  )
}

export default ImgBanner