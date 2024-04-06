import { FC } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { Link } from 'react-router-dom';

//

import { Col, Row } from 'react-bootstrap'

// img

import img1 from './../../asset/blockThree/sliderImg/1.png'
import img2 from './../../asset/blockThree/sliderImg/2.png'
import img3 from './../../asset/blockThree/sliderImg/3.png'




// components

import ImgBanner from '../ui/ImgBanner';

//

interface sliderArrProps {
  img: string
  link: string
}


interface blockThreeProps {
  scrollAnimation: any
}

const BlockThree: FC<blockThreeProps> = ({ scrollAnimation }) => {

  const {scroll, setScroll} = scrollAnimation

  console.log(scroll)


  const sliderArr: sliderArrProps[] = [

    {
      img: img1,
      link: '/',
    },

    {
      img: img2,
      link: '/',
    },

    {
      img: img3,
      link: '/',
    }

  ]


  // animated

  const line = useSpring({
    from: {
      opcity: 0,
      width: '0px'
    },
    to: {
      opacity: 1,
      width: '1400px'
    },
    config: {duration: 1000},
    delay: 4000

  })


   const [imgOne, apiOne] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: 'translateX(-10px)'
    },
    config: {duration: 3000},
   }))


   const [imgTwo, apiTwo] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: 'translateX(-10px)'
    },
    config: {duration: 3000},
   }))


   const [imgThree, apiThree] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: 'translateX(-10px)'
    },
    config: {duration: 3000},
   }))



   if(scroll > 200) {
    apiOne.start({opacity: 1, transform: 'translateX(0px)', delay: 500})
    apiTwo.start({opacity: 1, transform: 'translateX(0px)', delay: 1000})
    apiThree.start({opacity: 1, transform: 'translateX(0px)', delay: 1500})
   }


  return (

    <Row md={12} className='mt-4'>

        <Col md={6} className='d-flex align-items-center'>
          <Col md={4} className='d-flex align-items-center justify-content-center'><div style={{fontFamily: 'Unbounded', fontSize: '32px', color: '#FF974D'}}>Проекты</div></Col>
          <Col md={1} className='d-flex align-items-center justify-content-center'><div style={{fontFamily: 'Unbounded', fontSize: '20px', color: '#FF974D'}}>/</div></Col>
          <Col md={3} className='d-flex align-items-center justify-content-center'><div style={{fontFamily: 'Unbounded', fontSize: '20px', color: '#FF974D'}}>2019-2024</div></Col>
        </Col>

      <Row className='mb-4'>
        <animated.div style={line}><Col md={12} style={{width: '100%', height: '1px', background: '#b8b8b8b8'}} className='mt-4'></Col></animated.div>
      </Row>


      <Row className='mt-4 mb-4'>
        <Col className='d-flex flex-row justify-content-between'>
          <animated.div style={imgOne}>
              <Col md={4}><ImgBanner img={sliderArr[0].img} /></Col>
          </animated.div>

          <animated.div style={imgTwo}>
              <Col md={4}><ImgBanner img={sliderArr[1].img} /></Col>
          </animated.div>

          <animated.div style={imgThree}>
              <Col md={4}><ImgBanner img={sliderArr[2].img} /></Col>
          </animated.div>
        </Col>
      </Row>

    </Row>

  )
}

export default BlockThree