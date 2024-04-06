import { FC } from 'react'
import { animated, useSpring } from'react-spring'

//

import { Row, Col } from 'react-bootstrap'

//

import photo from './../../asset/Info/Group 11.png'


const InfoAbout = () => {

  // animation

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


  const textOne = useSpring({
    from: {
      opacity: 0,
      transform: 'translateX(-10%)'
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)'
    },
    config: {duration: 2000},
    delay: 1000
  })


  const textTwo = useSpring({
    from: {
      opacity: 0,
      transform: 'translateX(-10%)'
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)'
    },
    config: {duration: 2000},
    delay: 1500
  })


  const textThree = useSpring({
    from: {
      opacity: 0,
      transform: 'translateX(-10%)'
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)'
    },
    config: {duration: 2000},
    delay: 2000
  })


  const textFour = useSpring({
    from: {
      opacity: 0,
      transform: 'translateX(-10%)'
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)'
    },
    config: {duration: 2000},
    delay: 2500
  })


  return (

    <Row md={12}>


      <Row className='mt-5 mb-5'>
        <animated.div style={line}><Col md={12} style={{width: '100%', height: '1px', background: '#b8b8b8b8'}} className=''></Col></animated.div>
      </Row>



      <Col md={6} className='d-flex justify-content-center mb-4'>


        <Col><img style={{zIndex: '0'}} src={photo} alt="photo" /></Col>

      </Col>

      <Col md={6} className='mb-4'>


          <animated.div style={textOne}>
              <Col className='mb-3' style={{fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '30px'}}>
                Меня зовут Ольга, и я являюсь профессиональным дизайнером с опытом более чем 5 лет. Специализируюсь на создании визуально привлекательных и функциональных продуктов, уделяя особое внимание деталям и качеству. Мои навыки включают в себя графический дизайн, веб - дизайн.
              </Col>
          </animated.div>


          <animated.div style={textTwo}>
              <Col className='mb-3' style={{fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '30px'}}>
                Работала с различными клиентами и отраслями, включая корпоративные сайты, мобильные приложения, айдентика. Моя страсть к дизайну исходит из желания создавать продукты, которые выделяются и приносят пользу людям.
              </Col>
          </animated.div>

          <animated.div style={textThree}>
              <Col className='mb-3' style={{fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '30px'}}>
                Стремлюсь к постоянному развитию своих навыков и изучению новых технологий, чтобы оставаться в курсе последних тенденций и инноваций.
              </Col>
          </animated.div>


          <animated.div style={textFour}>
              <Col className='mb-3'style={{fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '30px'}}>
                Этот сайт создан для сохранения портфолио и блога где я рассказываю о своем творческом пути. Буду рада поделиться с вами своим творчесвом.
              </Col>
          </animated.div>

      </Col>
    </Row>

  )
}

export default InfoAbout