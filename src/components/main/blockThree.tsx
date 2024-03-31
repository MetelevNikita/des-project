import { FC } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { Link } from 'react-router-dom';


// scrolll carousel

import ScrollCarousel from 'scroll-carousel-react';

//

import { Col, Row } from 'react-bootstrap'

// img

import img1 from './../../asset/blockThree/sliderImg/1.png'
import img2 from './../../asset/blockThree/sliderImg/2.png'
import img3 from './../../asset/blockThree/sliderImg/3.png'
import img4 from './../../asset/blockThree/sliderImg/4.png'
import img5 from './../../asset/blockThree/sliderImg/5.png'




// components

import SliderImg from '../ui/sliderImg';

//

interface sliderArrProps {
  img: string
  link: string

}

const BlockThree = () => {


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
      },

      {
        img: img4,
        link: '/',
      },

      {
        img: img5,
        link: '/',
      },

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
      config: {duration: 3000},
      delay: 4000

    })



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

    <Row>


    <ScrollCarousel speed={0.5} autoplay={true} margin={20}>


    {sliderArr.map((card : sliderArrProps, index: number) => {
      return <Link key={index} to={card.link}><SliderImg img={card.img}/></Link>
    })}

    </ScrollCarousel>



    </Row>


    </Row>

  )
}

export default BlockThree