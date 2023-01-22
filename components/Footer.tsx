import CustomButton from "./CustomButton";
import CustomLink from "./CustomLink";



const MyLinks = [
    {
        id: 'insta1',
        title: 'Instagram',
        link: 'https://www.instagram.com/byabdeen/',
    },
    {
        id: 'behance2',
        title: 'Behance',
        link: 'https://www.behance.net/ahmadabdeen1',
    },
    {
        id: 'github3',
        title: 'Github',
        link: 'https://www.github.com/ahmadabdeen2',
    },
    {
        id: 'linkedin4',
        title: 'Linkedin',
        link: 'https://www.linkedin.com/in/ahmad-abdeen-73a852156/',
    }

]
const Footer = () => {
 

  return (
    
    
    <>
    
    <div className="bg-background px-4 md:px-16 font-random w-full h-[50vh] xs:h-screen">
      <div className="flex flex-col justify-between items-center  border-x-[1px] border-secondary px-5 xs:px-10 py-4 xs:py-10 h-full">
        <div className="flex items-center justify-between w-full mt-10">
            <h2 className="text-[10vw]  text-secondary font-random font-semibold "> Let's Talk. </h2>
            <CustomButton
              backgroundColor="bg-secondary"
              arrowColor="dark"
              size="w-[7vw] h-[7vw]"
              rotate="rotate-90"
              arrowSize="w-[2vw]"
            />
            </div>
            <div className="flex items-center justify-start w-full">
                <a href="mailto:hello@byabdeen.me" className='text-[7vw] xs:text-[6vw] text-secondary underline decoration-1 underline-offset-[5px] xs:underline-offset-[12px]'>hello@byabdeen.me</a>
                </div>
                <div className="flex items-center justify-between w-full">
            <div className="grid grid-cols-2 gap-4 place-content-start justify-start items-start">
                {MyLinks.map((link, index) => (
                    <CustomLink title={link.title} link={link.link} key={link.id} />
                ))}
                </div>
                <div className="flex h-full max-w-[40%] items-end">
                <p className="text-[2vw] text-secondary font-bool">© 2023 ByAbdeen. All Rights Reserved</p>
                </div>
                </div>
      </div>
    </div>
    
    </>
  );
};

export default Footer;
