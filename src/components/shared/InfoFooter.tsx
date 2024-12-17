import { CiLocationOn, CiPhone } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";

import { MdEmail } from "react-icons/md";

const InfoFooter = () => {
  const phone = import.meta.env.VITE_APP_NUMBER || "9818055984"
  const email = import.meta.env.VITE_APP_EMAIL || "prorepairguru@gmail.com"
  return (
    <>
<div className=' flex flex-row justify-between items-center w-full  text-white overflow-hidden bg-infoFooterCol p-10 '>
    <div className=" flex flex-col justify-center items-center ">
    

<div className=' flex flex-col  justify-evenly  items-start rounded-lg  space-y-3 mt-7'>

  <div className=' flex flex-row items-center justify-center space-x-1'>
   
<CiLocationOn className=' text-orange text-lg' />
<p className=''>Tarkeswor-03, Kathamdu</p>
  </div>
<div className=' flex flex-row justify-center items-center space-x-1'>
<CiPhone className=' text-orange text-lg' />
  <a href={`Tel:${phone}`} className=' flex flex-row items-center justify-center'>{phone}</a>
</div>

<div className=' flex flex-row justify-center items-center space-x-1 '>
<MdEmail className=' text-orange text-lg' />
  <a href={`Mailto:${email}`} className=' flex flex-row items-center justify-center'>{email}</a>
</div>

</div>

<div className=' flex flex-row justify-center items-center bg-infoFooterCol  h-10 text-white space-x-2 m-3'>
<div className=" p-2 rounded-full border-2 border-orange hover:bg-orange group">
<a href="https://www.facebook.com/profile.php?id=61566311173095">

<FaFacebook className='text-2xl hover:text-infobg group-hover:text-infobg' />
</a>
</div>
<div className=" p-2 rounded-full border-2 border-orange hover:bg-orange group">
  <a href="https://www.instagram.com/prorepairguru/">

<FaInstagram className='text-2xl hover:text-infobg group-hover:text-infobg' />
  </a>
</div>

<div className=" p-2 rounded-full border-2 border-orange hover:bg-orange group">
  <a href="">

<FaTwitter className='text-2xl hover:text-infobg group-hover:text-infobg' />
  </a>
</div>
<div className=" p-2 rounded-full border-2 border-orange hover:bg-orange group">
  <a href="https://www.tiktok.com/@pro.repair.guru?_t=8sBGXdd92Qs&_r=1">
<FaTiktok className='text-2xl hover:text-infobg group-hover:text-infobg' />
  </a>
</div>

</div>
</div>


{/* Qucik Links */}
<div className=" flex flex-col justify-center items-start  space-y-3">
<h3 className=" font-bold text-xl">Quick Links</h3>
<div className=" flex flex-row justify-start items-center space-x-2">
<div className=" border-2 border-orange w-5 h-1"></div>
<div className=" border-2 border-orange w-16 h-1"></div>
</div>
<div className=" flex flex-row justify-center items-center space-x-1 hover:translate-x-3  ease-in-out delay-150 duration-300">
<IoMdArrowDropright className=" text-2xl text-orange" />
<button className=" ">Our Services</button>
</div>

<div className=" flex flex-row justify-center items-center space-x-1 hover:translate-x-3  ease-in-out delay-150 duration-300">
<IoMdArrowDropright className=" text-2xl text-orange" />
<button className=" ">FAQ's</button>
</div>

<div className=" flex flex-row justify-center items-center space-x-1 hover:translate-x-3  ease-in-out delay-150 duration-300">
<IoMdArrowDropright className=" text-2xl text-orange" />
<button className=" ">Privacy Policy</button>
</div>

<div className=" flex flex-row justify-center items-center space-x-1 hover:translate-x-3  ease-in-out delay-150 duration-300">
<IoMdArrowDropright className=" text-2xl text-orange" />
<button className=" ">Terms of Services</button>
</div>

</div>



{/* Our Services */}
<div className=" flex flex-col justify-center items-start space-y-3">
<h3 className=" font-bold text-xl">Our Services</h3>
<div className=" flex flex-row justify-start items-center space-x-2">
<div className=" border-2 border-orange w-5 h-1"></div>
<div className=" border-2 border-orange w-16 h-1"></div>
</div>
<div className=" flex flex-row justify-center items-center space-x-1 hover:translate-x-3  ease-in-out delay-150 duration-300">
<IoMdArrowDropright className=" text-2xl text-orange" />
<button className=" ">Electrical Services</button>
</div>

<div className=" flex flex-row justify-center items-center space-x-1 hover:translate-x-3  ease-in-out delay-150 duration-300">
<IoMdArrowDropright className=" text-2xl text-orange" />
<button className=" ">Repair Services</button>
</div>

<div className=" flex flex-row justify-center items-center space-x-1 hover:translate-x-3  ease-in-out delay-150 duration-300">
<IoMdArrowDropright className=" text-2xl text-orange" />
<button className=" ">Construction</button>
</div>

<div className=" flex flex-row justify-center items-center space-x-1 hover:translate-x-3  ease-in-out delay-150 duration-300">
<IoMdArrowDropright className=" text-2xl text-orange" />
<button className=" ">Plumbing</button>
</div>


{/* NewsLetter */}



</div>



{/* NewsLetter */}
<div className=" flex flex-col justify-center items-start w-1/5 space-y-3">
<h3 className=" font-bold text-xl">Newsletter</h3>
<div className=" flex flex-row justify-start items-center space-x-2">
<div className=" border-2 border-orange w-5 h-1"></div>
<div className=" border-2 border-orange w-16 h-1"></div>
</div>
<p className=" font-bold leading-8">Subscribe Our Newsletter To Get Latest Update And News</p>
<div className="">

<input type="email"  placeholder="Your Email" className=" bg-infoFooterCol rounded-xl px-5 py-2 border-2 border-white" />
</div>

<div className=" flex flex-row justify-center items-center space-x-1  bg-orange py-3 px-5 rounded-2xl hover:bg-infobg group">
<button className=" uppercase font-bold ">Subscribe now</button>
<div className=" bg-white rounded-full p-1 ">

<CiLocationArrow1 className=" text-orange text-xl group-hover:text-infobg"/>
</div>
</div>


</div>
</div>  
    </>
  )
}

export default InfoFooter