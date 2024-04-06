import { FC } from 'react'

//

import { Row, Col } from 'react-bootstrap'


//

interface PortfolioOneProps {
  title: string
  subtitle: string
  task: string
  target: string
  result: string
  logo: string
  imgMain: string
  imgOne: string
  imgTwo: string
  imgThree: string
  imgFour: string
  imgInfoLeft: string
  imgInfoRight: string
  imgBottom: string


}

export const PortfolioOne: FC<PortfolioOneProps> = ({title, subtitle, target, task, result, logo, imgMain, imgBottom, imgOne, imgThree, imgTwo, imgFour, imgInfoLeft, imgInfoRight}) => {


  return (
    <Row md={12}>

      <Row>
        <Col>{title}</Col>
      </Row>

      <Row>

      </Row>


      <Row md={12}><img src={imgMain} alt="img-main" /></Row>

      <Row>
          <Col md={6}>
            <img src={imgOne} alt="img-one" />
            <img src={imgTwo} alt="img-two" />
          </Col>

          <Col md={6}>
            <img src={imgThree} alt="img-three" />
            <img src={imgFour} alt="img-four" />
          </Col>
      </Row>


      <Row md={12}>

        <Col md={6}>
          <img src={imgInfoLeft} alt="left" />
        </Col>

        <Col md={6}>
          <img src={imgInfoRight} alt="right" />
        </Col>

      </Row>


      <Row md={12}>
        <img src={imgBottom} alt="img-bottom" />
      </Row>



    </Row>
  )
}
