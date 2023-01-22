 import Link from 'next/link'
 import logo from '../public/assets/logo.png'
 import Image from 'next/image'
 const StudioNavbar = (props: any) => {
   return (
    <>
    <div className='bg-primary flex p-5 text-white items-center justify-between '>
    <Link href='/'> Back to website </Link>
    <Image src={logo} alt='logo' width={30} height={10}/>

    </div>
     <div>{props.renderDefault(props)}</div>
     </>
   )
 }
 
 export default StudioNavbar