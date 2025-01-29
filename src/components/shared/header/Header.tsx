import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUpLong } from "react-icons/fa6";
import { animateScroll as scroll} from 'react-scroll'
import { Helmet } from 'react-helmet-async';
import { IoMdMenu } from "react-icons/io";
import HeaderController from './header.controller'
import Modal from '../../specific/Model';
import MobileHeader  from "./MobileHeader"

const Header = () => {
    const {open, onClose, onOpen} = HeaderController();
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
<header className={`bg-primary text-white p-4 flex md:justify-start justify-between items-center md:items-center h-20 w-full bg-headerbg overflow-hidden opacity-100 transition-all duration-300
  ${isScrolled ? "fixed top-0 z-50 shadow-lg backdrop-blur-md" : "relative"}
`}>

<div className=' flex justify-center items-center  w-32 overflow-hidden mb-4'>
    <Link to='/' className='text-2xl font-bold '>
    <img src="./PRG.jpg" alt='logo' className=' h-20 scale-150 mt-4'/>
    </Link>
</div>

<div className='hidden md:flex md:flex-row items-center justify-evenly  w-full'>

    <Link to='/' className=' hover:text-orange text-black uppercase font-semibold text-base'>Home</Link>
    <Link to='/services' className=' hover:text-orange text-black uppercase font-semibold text-base'>Services</Link>
    <Link to='/joinus' className=' hover:text-orange text-black uppercase font-semibold text-base'>Join our team</Link>

    <Link to='/contact' className=' hover:text-orange text-black uppercase font-semibold text-base'>Contact</Link>

</div>
<div>
    <button onClick={onOpen}>
<IoMdMenu className="text-5xl md:hidden text-black mr-3" />
    </button>
</div>

</header>

<div className={`${isScrolled? "fixed bottom-2 right-2" : "hidden"} `}>
  <a   onClick={scrollToTop}>
  <div className=' bg-orange p-4 rounded-full '>
<FaArrowUpLong className=' text-white'/>
  </div>
  </a>
</div>


<Modal open = {open} onClose = {onClose} onOpen= {onOpen}
>
    <MobileHeader onClose={onClose}/>
</Modal>
</>
)
}

export default Header