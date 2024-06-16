import { FC, useState } from 'react'
import { animated, useSpring } from 'react-spring'

//

import { Col, Row } from 'react-bootstrap'


// img

import iconArrow from './../../asset/PortfolioCard/Group 12.svg'
import imgBg from './../../asset/PortfolioCard/Rectangle 20.png'
import { Link } from 'react-router-dom'

//


interface PortfolioCardProps {
  title: string
  img: string
  link: string
}

const PortfolioCard: FC<PortfolioCardProps> = ({ title, img, link }) => {


  const [animatedArrow, api] = useSpring(() => ({
    from: {
      transform: 'translateX(-100px) translateY(100px)'
    }

  }))

  const [mouse, setMouse] = useState<boolean>(false)


  const mouseOn = () => {
    setMouse(true)
    api.start({
      transform: 'translateX(5px) translateY(-12px)'
    })
  }


  const mouseOff = () => {
    setMouse(false)
    api.start({
      transform: 'translateX(-100px) translateY(80px)'
    })

  }

  return (

    <Link to={link} style={{textDecoration: 'none'}}>

      <Col><img style={{width: '390px', height: '271px'}} className='mb-3' src={img} alt="img-menu" /></Col>
      <Col style={{color: 'black', maxWidth: '380px'}}>{title}</Col>

    </Link>











  )
}

export default PortfolioCard