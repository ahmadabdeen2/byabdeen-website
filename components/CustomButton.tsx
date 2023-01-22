import React from 'react'
import darkarrow from '../public/assets/darkarrow.svg'
import lightarrow from '../public/assets/lightarrow.svg'
import Image from 'next/image'
type Props = {
    backgroundColor: string,
    arrowColor: string,
    size: string,
    rotate: string,
    arrowSize:string,
    cursor?: string
    

}

const CustomButton = ({backgroundColor, arrowColor, size, rotate, arrowSize, cursor}: Props) => {
  return (
    <div className={`${backgroundColor} ${size} rounded-[200px] flex items-center justify-center ${cursor}`}>
        <Image src={arrowColor === 'dark' ? darkarrow : lightarrow} alt='arrow' className={`transform ${rotate} ${arrowSize} `} />
    </div>
  )
}

export default CustomButton