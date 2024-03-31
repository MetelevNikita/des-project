import { FC } from 'react'

interface SliderImageProps {
  img: string
}

const SliderImage:FC<SliderImageProps> = ({ img }) => {
  return (
    <img style={{width: '1300px'}} src={img} alt="img" />
  )
}

export default SliderImage