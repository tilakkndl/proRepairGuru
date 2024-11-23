import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaFacebook,  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const InfoHeader = () => {
  return (
<>
<div className=' flex flex-row justify-center items-center w-full h-10 text-white overflow-hidden'>

<div className=' flex flex-row  justify-evenly  items-center bg-infobg  w-2/3 h-full'>
  <div className=' flex flex-row items-center justify-center space-x-1'>
<CiLocationOn className=' text-orange text-lg' />
<p className=''>Dudhapti-01,Bhaktapur</p>
  </div>
<div className=' flex flex-row justify-center items-center space-x-1'>
<CiPhone className=' text-orange text-lg' />
  <a href={`Tel:${import.meta.env.VITE_APP_NUMBER}`} className=' flex flex-row items-center justify-center'>{import.meta.env.VITE_APP_NUMBER}</a>
</div>

<div className=' flex flex-row justify-center items-center space-x-1'>
<MdEmail className=' text-orange text-lg' />
  <a href={`Mailto:${import.meta.env.VITE_APP_EMAIL}`} className=' flex flex-row items-center justify-center'>{import.meta.env.VITE_APP_EMAIL}</a>
</div>

</div>

<div className=' flex flex-row justify-center items-center bg-orange w-1/3 h-10 text-white space-x-2'>

<FaFacebook className='     text-2xl hover:text-infobg' />
<FaInstagram className=' text-2xl hover:text-infobg' />
<FaTwitter className='  text-2xl hover:text-infobg' />
<FaTiktok className='  text-2xl hover:text-infobg' />

</div>

</div>

</>
  )
}

export default InfoHeader