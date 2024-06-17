import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

//

import { Col, Row } from 'react-bootstrap'


// redux

import { useAppSelector  } from  '../types/redux-types'



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




const PortfolioOpenPage: FC = ()  =>  {



  const cardSelector  = useAppSelector((state: any) => state.portfolio)
  const params  = useParams()

  const id = params.id
  const category = params.category

  let select: any[] = []

  const selectCategory  =  ()  =>  {

      if (category == 'illustration')  {
        return select.push(cardSelector.illustration)
      } else if (category ==  'graphic')   {
        return select.push(cardSelector.graphic)
      } else if(category ==  'web') {
        return select.push(cardSelector.web)
      }
    }

    selectCategory()

    const singleCard = select[0].filter((card: any) => {return card.id == id})


    const [text1, setText1] = useState<boolean>(false)
    const [text2, setText2] = useState<boolean>(false)
    const [text3, setText3] = useState<boolean>(false)




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






    apiText1({opacity: 1, transform: 'translateX(0px)', delay: 200})
    apiText2({opacity: 1, transform: 'translateX(0px)', delay: 400})
    apiText3({opacity: 1, transform: 'translateX(0px)', delay: 600})






   if(singleCard.length  <  1)   {
    return <Col style={{width: '100%', textAlign: 'center'}}>Loading...</Col>
   }

  return (
    <Col md={12} sm={12} xs={12}>

      <Col md={12} sm={12} xs={12} style={{width: '100%', fontSize: 'calc(2rem + 0.7vw)', textAlign: 'center', fontFamily: 'Unbounded'}} className='mb-4'>{singleCard[0].title}</Col>

      <Col md={12} sm={12} xs={12} style={{fontSize: 'calc(0.3rem + 0.4vw)', textAlign: 'center', fontFamily: 'Unbounded', width: '100%'}} className='mb-4'>{singleCard[0].description}</Col>

      <Col className='mb-4'><img style={{width: '100%'}} src={singleCard[0].imgOne} alt="img-title" /></Col>

      <Col md={12} sm={12} xs={12} className='d-flex flex-md-row flex-column'>

        {(singleCard[0].imgTwo) ? <Col md={6} sm={12} xs={12} className='d-flex justify-content-center mb-4'><img style={{width: '95%'}} src={singleCard[0].imgTwo} alt="img-two"  /> </Col>  : null}
        {(singleCard[0].imgThree) ?  <Col md={6} sm={12} xs={12} className='d-flex justify-content-center mb-4'><img style={{width: '95%'}} src={singleCard[0].imgThree} alt="img-three"   />  </Col>   : null}

      </Col>

      {(singleCard[0].imgFour) ?   <Col md={12} sm={12} xs={12}  className='mb-4'><img style={{width: '100%'}} src={singleCard[0].imgFour} alt="img-four" /> </Col> : null}


      <Col lg={12} md={12} sm={12} xs={12} className='d-flex flex-lg-row flex-column  mb-4'>

      <Col lg={4} md={12} sm={12} xs={12} className='d-flex justify-content-lg-start justify-content-center'><Link style={{fontFamily: 'Unbounded', fontSize: '20px', textDecoration: 'none', color: 'black'}} to={'/portfolio'}><StyledMenu>{menuArray[0].title}</StyledMenu></Link></Col>
      <Col lg={4} md={12} sm={12} xs={12} className='d-flex justify-content-center'><Link style={{fontFamily: 'Unbounded', fontSize: '20px', textDecoration: 'none', color: 'black'}} to={'/portfolio'}><StyledMenu>{menuArray[1].title}</StyledMenu></Link></Col>
      <Col lg={4} md={12} sm={12} xs={12} className='d-flex justify-content-lg-end justify-content-center' ><Link style={{fontFamily: 'Unbounded', fontSize: '20px', textDecoration: 'none', color: 'black'}} to={'/portfolio'}><StyledMenu>{menuArray[2].title}</StyledMenu></Link></Col>

      </Col>

    </Col>
  )
}

export default PortfolioOpenPage