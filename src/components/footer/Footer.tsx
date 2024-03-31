import { FC } from 'react'

//

import { Row, Col } from 'react-bootstrap'

// img

import BH from './../../asset/footer/behance.svg'
import VK from './../../asset/footer/vk.svg'


const Footer = () => {
  return (

    <Row md={12} style={{width: '100%', height: '80px', padding: '0px', backgroundColor: 'black', position: 'absolute', left: '0'}} className='d-flex justify-content-center align-items-center'>
      <Col className='d-flex justify-content-center align-items-center' md={1}>

        <img style={{margin: '10px'}} src={BH} alt="behance" />
        <img style={{margin: '10px'}} src={VK} alt="vkontakte"/>

        </Col>
    </Row>

  )
}

export default Footer
