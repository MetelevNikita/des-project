import { FC, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {a, animated, useSpring} from '@react-spring/web'

//

import { Col, Row } from 'react-bootstrap'
import { title } from 'process'

// img

import img from './../../asset/blockFour/img.svg'

//

interface menuArrayProps {
  title: string
  link: string
}

interface BlockFourProps {
  scrollAnimation : any
}

const BlockFour: FC<BlockFourProps> = ({ scrollAnimation }) => {

  const [text1, setText1] = useState<boolean>(false)
  const [text2, setText2] = useState<boolean>(false)
  const [text3, setText3] = useState<boolean>(false)

  const {scroll, setScroll} = scrollAnimation



  const menuArray: menuArrayProps[] = [
    {
      title: 'Графический дизайн',
      link: '',
    },

    {
      title: 'Веб-дизайн',
      link: '',
    },

    {
      title: 'Иллюстрации',
      link: '',
    },
  ]


  // animated

  const [text1Spring, apiText1] = useSpring(() => ({
    from: {opacity: 0, transform: 'translateX(-200px)'},

  }))

  const [text2Spring, apiText2] = useSpring(() => ({
    from: {opacity: 0, transform: 'translateX(-200px)'},

  }))

  const [text3Spring, apiText3] = useSpring(() => ({
    from: {opacity: 0, transform: 'translateX(-200px)'},

  }))





  if(scroll > 1200) {
    apiText1({opacity: 1, transform: 'translateX(0px)', delay: 200})
    apiText2({opacity: 1, transform: 'translateX(0px)', delay: 400})
    apiText3({opacity: 1, transform: 'translateX(0px)', delay: 600})
  }









  return (

    <Row md={12} className='mt-4 mb-4'>
      <Col md={8} className='mb-4'>

     <animated.div style={text1Spring}><Col><Link onMouseOver={() => {setText1(true)}} onMouseOut={() => {setText1(false)}} style={{fontFamily: 'Unbounded', fontSize: '50px', textDecoration: (text1? 'underline' : 'none'), color: (text1? 'black' : '#FF974D')}} to={menuArray[0].link}>{menuArray[0].title}</Link></Col></animated.div>


     <animated.div style={text2Spring}><Col><Link onMouseOver={() => {setText2(true)}} onMouseOut={() => {setText2(false)}} style={{fontFamily: 'Unbounded', fontSize: '50px', textDecoration: (text2? 'underline' : 'none'), color: (text2? 'black' : '#FF974D')}} to={menuArray[1].link}>{menuArray[1].title}</Link></Col></animated.div>


     <animated.div style={text3Spring}><Col><Link onMouseOver={() => {setText3(true)}} onMouseOut={() => {setText3(false)}} style={{fontFamily: 'Unbounded', fontSize: '50px', textDecoration: (text3? 'underline' : 'none'), color: (text3? 'black' : '#FF974D')}} to={menuArray[2].link}>{menuArray[2].title}</Link></Col></animated.div>






      </Col>


      {/* <Col><Link onMouseOut={() => {handleMenu(menu)}} onMouseOver={() => {menu.set(false)}} className={menu.id? 'text-decoration-none' : 'text-decoration-underline'} style={{fontFamily: 'Unbounded', fontSize: '50px', textDecoration: 'none', color: (menu.id? 'black' : '#FF974D')}} to={menu.link}>{menu.title}</Link></Col> */}

      <Col md={4} className='mb-4'>

        <img src={img} alt="img" />

      </Col>
    </Row>

  )
}

export default BlockFour