import { CSSProperties, FC } from'react'

// img

import iconArrImg from './../../asset/blockThree/iconArr.png'

interface arrIconProps {
  style: CSSProperties
}

const ArrIcon: FC<arrIconProps> = ({ style }) => {
  return (
      <img style={style} src={iconArrImg} alt="iconArr" />
  )
}

export default ArrIcon