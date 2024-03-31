import { CSSProperties, FC } from 'react'
import { animated, useSpring } from '@react-spring/web'

//

import { Col, Row } from 'react-bootstrap'

//

interface blockOneProps {
  title: string
}





const BlockOne: FC<blockOneProps> = ({ title }) => {

  // animated

  const styleSpring = useSpring({
    from: {transform: 'translateY(-500px)'},
    to: {transform: 'translateY(0px)'},
    config: { tension: 120, friction: 14, duration: 2000},
    delay: 2000,
  })


  return (

      <Col md={12} className='d-flex align-items-center justify-content-center'>



          <Col md={10} style={{fontSize: 'calc(3rem + 1vw)', textAlign: 'center', fontWeight: '400', overflow: 'hidden', fontFamily: 'Unbounded', lineHeight: '80px'}}  className='d-flex align-items-center justify-content-center mt-4'>

            <animated.div style={{width: '100%', height: '100%', ...styleSpring}} className={'text-sm text-md text-xs'}>

            {title}

            </animated.div>

          </Col>



      </Col>

  )
}

export default BlockOne