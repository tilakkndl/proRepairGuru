import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUpLong } from "react-icons/fa6";
import { animateScroll as scroll} from 'react-scroll'
import { Helmet } from 'react-helmet-async';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const INFO_HEADER_HEIGHT=40;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{

    const handleScroll = ()=>{
      if(window.scrollY>INFO_HEADER_HEIGHT){
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return ()=> {
      window.removeEventListener("scroll", handleScroll)
    }

  },[])
  return (
<>
<Helmet>
<title>Pro Repai Guru</title>
<meta name='description' content='Beginner friendly page for learning React Helmet.' />
</Helmet>
<header className={`bg-primary text-white p-4 flex justify-center items-center bg-red h-20 w-full bg-headerbg overflow-hidden opacity-100 ${isScrolled? "fixed top-0": "relative"}`}>

<div className=' flex justify-center items-center  w-32 overflow-hidden'>
    <Link to='/' className='text-2xl font-bold '>
    <img src="./prorepairguru.jpg" alt='logo' className=' h-20 scale-150 mt-4'/>
    </Link>
</div>

<div className=' flex flex-row justify-evenly items-center w-full'>

    <Link to='/' className=' hover:text-orange text-black uppercase font-semibold text-base'>Home</Link>
    <Link to='/services' className=' hover:text-orange text-black uppercase font-semibold text-base'>Services</Link>
    <Link to='/joinus' className=' hover:text-orange text-black uppercase font-semibold text-base'>Join our team</Link>

    <Link to='/contact' className=' hover:text-orange text-black uppercase font-semibold text-base'>Contact</Link>

</div>

</header>

<div className={`${isScrolled? "fixed bottom-2 right-2" : "hidden"} `}>
  <a   onClick={scrollToTop}>
  <div className=' bg-orange p-4 rounded-full'>
<FaArrowUpLong className=' text-white'/>
  </div>
  </a>
</div>
</>
)
}

export default Header