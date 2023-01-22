import CustomButton from "./CustomButton"
import Link from "next/link"
type Props = {
    title: string,
    link: string,
}
const CustomLink = ({title, link}: Props) => {
  return (
    <div>
        
        <Link className='text-secondary flex w-full items-center justify-start font-random font-light text-[2vw]' href={link}>
            <CustomButton backgroundColor='bg-secondary' arrowColor='dark' size='w-[3vw] h-[3vw]' rotate='rotate-0' arrowSize='w-[1vw]' cursor='cursor-pointer'/>
            <p className="text-[2vw] xs:text-[1.8vw] sm:text-[1.5vw] mx-2 xs:mx-4 sm:mx-5">{title}</p> 
        </Link>



    </div>
  )
}

export default CustomLink