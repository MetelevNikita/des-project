import { FC } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { Link } from 'react-router-dom';

//

import { Col, Row } from 'react-bootstrap'

// redux

import { useAppSelector } from '../types/redux-types';

// img

import img1 from './../../asset/blockThree/sliderImg/1.png'
import img2 from './../../asset/blockThree/sliderImg/2.png'
import img3 from './../../asset/blockThree/sliderImg/3.png'




// components

import ImgBanner from '../ui/ImgBanner';

//

interface sliderArrProps {
  img: string
  link: string
}


interface blockThreeProps {
  scrollAnimation: any
  menuPortfolio: any
}

const BlockThree: FC<blockThreeProps> = ({ scrollAnimation, menuPortfolio }) => {

  const {menuTitle, setMenuTitle} = menuPortfolio
  const selector = useAppSelector(state => state.portfolio)


  const checkedSelector: any[] = []


  const selectorMenu = () => {

    if(menuTitle === 'Графический дизайн') {
      return checkedSelector.push(selector.graphic)
    } else if(menuTitle === 'Веб-дизайн')  {
      return checkedSelector.push(selector.web)
    } else if (menuTitle === 'Иллюстрации')  {
      return checkedSelector.push(selector.illustration)
    } else {
      return []
    }
  }

  selectorMenu()


  console.log(checkedSelector[0])


  const {scroll, setScroll} = scrollAnimation

  const sliderArr: sliderArrProps[] = [

    {
      img: img1,
      link: '/',
    },

    {
      img: img2,
      link: '/',
    },

    {
      img: img3,
      link: '/',
    }

  ]


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
    config: {duration: 1000},
    delay: 4000

  })


   const [img, api] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: 'translateX(-10px)'
    },
    config: {duration: 3000},
   }))



   if(scroll > 200) {
    api.start({opacity: 1, transform: 'translateX(0px)', delay: 500})
   }


  return (

    <Row lg={12} md={12} className='mt-5'>

        <Col md={12} className='d-flex align-items-center'>
          <Col ld={6} md={6} className='d-flex justify-content-start align-items-center'><div style={{fontFamily: 'Unbounded', fontSize: 'calc(1rem + 0.5vw)', color: '#FF974D'}}>Проекты / 2019-2024</div></Col>
          <Col ld={6} md={6} className='d-flex justify-content-end align-items-center'><div style={{fontFamily: 'Unbounded', fontSize: 'calc(1rem + 0.5vw)', color: '#FF974D'}}>{menuTitle}</div></Col>

        </Col>

      <Row className='mb-4'>
        <animated.div style={line}><Col md={12} style={{width: '100%', height: '1px', background: '#b8b8b8b8'}} className='mt-4'></Col></animated.div>
      </Row>



        <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center mt-5 mb-4'>


        {(checkedSelector[0].length  < 1) ? <></> : checkedSelector[0].map((item: any) => {
          return <animated.div style={img}>
                    <Col lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center mb-3'><Link to={`portfolio/${item.category}/${item.id}`}><ImgBanner img={item.imgOne} title={item.title}/></Link></Col>
                </animated.div>
        })}

        </Col>


    </Row>

  )
}

export default BlockThree