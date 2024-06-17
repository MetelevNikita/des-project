import { FC } from 'react'
import styled from 'styled-components'

//

import { Col, Row } from 'react-bootstrap'

// img

import lineBox from '../../asset/portfolio-menu/lineBox.svg'


interface PortfolioMenuProps  {
  img: string
  title: string
  menuTitleArr: any
}

const PortfolioMenu: FC<PortfolioMenuProps> = ({ img, title, menuTitleArr}) => {


  const {menuTitle, setMenuTitle} = menuTitleArr

  const MenuLink = styled.button`
  cursor: pointer;
  font-family: "Unbounded", sans-serif;

    font-size: 22px;
    &:hover{
      color: #E2A257;
      text-decoration: underline;
    }
  `


    const MenuLinkHanlder = (title: string) => {
      setMenuTitle(title)
      window.scrollTo(0, 1500)
    }


  return (

      <Col md={8} style={{width: '400px', height: '100%'}} className='d-flex flex-column justify-content-center align-items-center'>

        <Col style={{position: 'relative', top: '70px'}}><img style={{width: '180px', height: '162px'}}  src={img} alt=""  /></Col>

        <img style={{width: '389px', height: '152px'}} src={lineBox} alt="" />
        <Col style={{position: 'relative', top: '-60px'}}><MenuLink onClick={() => {MenuLinkHanlder(title)}}>{title}</MenuLink></Col>

      </Col>
  )
}

export default PortfolioMenu