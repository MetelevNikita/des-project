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

        <div style={{width:  '389px', height:  '459px', borderRadius: '77px', overflow: 'hidden'}} onMouseEnter={() => {mouseOn()}} onMouseLeave={() => {mouseOff()}}>
        <div style={{backgroundColor: (!mouse) ? '#03030315' : '#00000075', width:  '389px', height:  '459px', display:  'flex', justifyContent:  'center', alignItems:  'center', flexDirection:  'column', borderRadius: '77px'}}>
        <img src={img} alt="img" style={{zIndex: -1}}/>
        </div>

        <div style={{color: 'white', zIndex: 2, position: 'relative', top: '-410px', left: '50px', fontFamily: 'Unbounded', fontSize: '25px', opacity: (!mouse) ? 0 : 1}}>{title}</div>

        {/* arrow clicked to portfolio page */}

        <animated.div style={animatedArrow}><img src={iconArrow} alt="" style={{zIndex: 2, position: 'relative', top: '-155px', width: '130px'}}/></animated.div>

      </div>

    </Link>











  )
}

export default PortfolioCard