import { FC, Children, useState } from 'react'

// components

import SliderImage from './sliderImage'

import img1 from './../../asset/slider/1.png'
import img2 from './../../asset/slider/2.png'
import img3 from './../../asset/slider/3.png'
import { Col, Row } from 'react-bootstrap'




const SliderController = () => {

  const [start, setStart]= useState(1300)




  setInterval(() => {

      if(start === -1300) {
        return setStart(1300)
      } else {
        setStart(start - 1300)
      }

  }, 5000)




  return (


    <Row className='d-flex d-flex justify-content-center mt-4'>
      <Col style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

      </Col>

      <Row style={{overflow: 'hidden', position:'relative',}}>

      <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position:'relative', left: `${start}px`, transition: 'all 0.5s ease-in-out'}}>
        <SliderImage img={img1} />
        <SliderImage img={img2} />
        <SliderImage img={img3} />
      </Col>

      </Row>


    </Row>



  )
}

export default SliderController