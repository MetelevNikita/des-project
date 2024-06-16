import { FC } from 'react'
import { animated, useSpring } from '@react-spring/web'

//

import { Row, Col } from 'react-bootstrap'

// img

import iconImg from './../../asset/blockTwo/icon img.png'
import iconArrow from './../../asset/blockTwo/icon arrow.png'
import bg from './../../asset/blockTwo/bg.png'


// components

import PortfolioButton from '../ui/PortfolioButton'


//

const BlockTwo: FC = () => {


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
    config: {duration: 2000},
  })


  const blockLeft = useSpring({
    from: {transform: 'translateX(-800px)', opacity: 0},
    to: {transform: 'translateX(0px)', opacity: 1},
    config: {tension: 120, friction: 14, duration: 2000},

  })


  const blockRight = useSpring({
    from: {transform: 'translateX(800px)', opacity: 0},
    to: {transform: 'translateX(0px)', opacity: 1},
    config: {tension: 120, friction: 14, duration: 2000},

  })


  return (

    <Row lg={12} className='mt-4 mb-4'>


      <Row className='mb-4'>
        <animated.div style={line}><Col md={12} style={{width: '100%', height: '1px', background: '#b8b8b8b8'}} className='mt-4'></Col></animated.div>
      </Row>


        <Col className='mt-4 d-flex flex-lg-row flex-column'>


          <Col lg={4} md={12} className='d-flex flex-column justify-content-lg-start justify-content-center'>
            <animated.div style={blockLeft}>
                <Col style={{maxWidth: '100%', height: 'max-content', fontSize: '22px', fontFamily: 'Montserrat', lineHeight: '35px'}} className=''>Моя страсть к дизайну исходит из желания создавать продукты, которые выделяются и приносят пользу людям</Col>

                <Col className='mt-4'>
                  <div style={{marginBottom: '60px'}}>
                    <img style={{position: 'relative', zIndex: '2'}} src={iconImg} alt="iconImg" />
                    <img style={{position: 'relative', right: '30px', top: '40px', zIndex: '1'}} src={iconArrow} alt="iconArrow" />
                  </div>
                </Col>
              </animated.div>
            </Col>





            <Col lg={8} md={12} className='d-flex justify-content-md-end justify-content-center'>
              <animated.div style={blockRight}>
                  <Col><PortfolioButton /></Col>
              </animated.div>
            </Col>

      </Col>

    </Row>

  )
}

export default BlockTwo