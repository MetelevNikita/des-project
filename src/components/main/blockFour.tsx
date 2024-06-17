import { FC, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {animated, useSpring} from '@react-spring/web'
import styled from 'styled-components'

//

import { Col, Row } from 'react-bootstrap'


// img

import img_web from './../../asset/blockFour/img_web.svg'
import img_grpah from './../../asset/blockFour/img_graph.svg'
import img_illustr from './../../asset/blockFour/img_illustration.svg'

//

const StyledMenu = styled.div`
&:hover {
  color: #FF974D;
  text-decoration: underline;
}
`


interface menuArrayProps {
  title: string
  link: string
}

interface BlockFourProps {
  scrollAnimation : any
  menuPortfolio: any
}

const BlockFour: FC<BlockFourProps> = ({ scrollAnimation, menuPortfolio }) => {

  const [text1, setText1] = useState<boolean>(false)
  const [text2, setText2] = useState<boolean>(false)
  const [text3, setText3] = useState<boolean>(false)



  const {scroll, setScroll} = scrollAnimation
  const {menuTitle, setMenuTitle} = menuPortfolio



  const menuArray: menuArrayProps[] = [
    {
      title: 'Графический дизайн',
      link: '/portfolio',
    },

    {
      title: 'Веб-дизайн',
      link: '/portfolio',
    },

    {
      title: 'Иллюстрации',
      link: '/portfolio',
    },
  ]


  const selectIamge = () => {

    if (menuTitle === 'Графический дизайн')  {
      return img_grpah
    } else if (menuTitle === 'Веб-дизайн')   {
      return img_web
    } else if (menuTitle === 'Иллюстрации') {
      return img_illustr
    } else {
      return
    }
  }



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


  if(scroll > 200) {
    apiText1({opacity: 1, transform: 'translateX(0px)', delay: 200})
    apiText2({opacity: 1, transform: 'translateX(0px)', delay: 400})
    apiText3({opacity: 1, transform: 'translateX(0px)', delay: 600})
  }



  return (

    <Row md={12} className='mt-4 mb-4'>
      <Col md={8} className='mb-4'>

     <animated.div style={text1Spring}><Col style={{fontFamily: 'Unbounded', fontSize: 'calc(2.5rem + 1vw)', textDecoration: 'none', color: 'black', cursor: 'pointer'}}><StyledMenu onClick={() => {setMenuTitle('Графический дизайн')}}>{menuArray[0].title}</StyledMenu></Col></animated.div>

     <animated.div style={text2Spring}><Col style={{fontFamily: 'Unbounded', fontSize: 'calc(2.5rem + 1vw', textDecoration: 'none', color: 'black', cursor: 'pointer'}}><StyledMenu onClick={() => {setMenuTitle('Веб-дизайн')}}>{menuArray[1].title}</StyledMenu></Col></animated.div>

     <animated.div style={text3Spring}><Col style={{fontFamily: 'Unbounded', fontSize: 'calc(2.3rem + 1vw', textDecoration: 'none', color: 'black', cursor: 'pointer'}}><StyledMenu onClick={() => {setMenuTitle('Иллюстрации')}}>{menuArray[2].title}</StyledMenu></Col></animated.div>

      </Col>

      <Col md={4} className='mb-4'>
        <img style={{transition: 'all 0.3s ease'}} src={selectIamge()} alt="img" />
      </Col>
    </Row>

  )
}

export default BlockFour