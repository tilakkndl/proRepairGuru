import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaFacebook,  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const InfoHeader = () => {
    const phone = import.meta.env.VITE_APP_NUMBER || "9818055984"
  const email = import.meta.env.VITE_APP_EMAIL || "prorepairguru@gmail.com"
  return (
<>
<div className='hidden md:flex flex-row justify-center items-center w-full h-10 text-white overflow-hidden'>

<div className=' flex flex-row  justify-evenly  items-center bg-infobg  w-2/3 h-full'>
  <div className=' flex flex-row items-center justify-center space-x-1'>
<CiLocationOn className=' text-orange text-lg' />
<p className=''>Tarkeswor-03, Kathmandu</p>
  </div>
<div className=' flex flex-row justify-center items-center space-x-1'>
<CiPhone className=' text-orange text-lg' />
  <a href={`Tel:${phone}}`} className=' flex flex-row items-center justify-center'>{phone}</a>
</div>

<div className=' flex flex-row justify-center items-center space-x-1'>
<MdEmail className=' text-orange text-lg' />
  <a href={`Mailto:${email}`} className=' flex flex-row items-center justify-center'>{email}</a>
</div>

</div>

<div className=' flex flex-row justify-center items-center bg-orange w-1/3 h-10 text-white space-x-2'>
<a href="https://www.facebook.com/profile.php?id=61566311173095">

<FaFacebook className='     text-2xl hover:text-infobg' />
</a>
<a href="https://www.instagram.com/prorepairguru/">

<FaInstagram className=' text-2xl hover:text-infobg' />
</a>
<a href="">
<FaTwitter className='  text-2xl hover:text-infobg' />

</a>
<a href="https://www.tiktok.com/@pro.repair.guru?_t=8sBGXdd92Qs&_r=1">
<FaTiktok className='  text-2xl hover:text-infobg' />

</a>

</div>

</div>

</>
  )
}

export default InfoHeader