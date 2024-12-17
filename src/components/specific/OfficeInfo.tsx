import { CiLocationOn } from "react-icons/ci";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const OfficeInfo = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-start my-4' >

        <div className=" flex flex-row justify-center items-center mb-10">
          <div className=" p-2 bg-orange rounded-full mx-10">
<CiLocationOn className=" text-white text-3xl"/>
          </div>
          <div className=" flex flex-col justify-center items-start">
<p className=" text-lg font-bold leading-relaxed">Office address</p>
<p className="">Siddha Pokhari, Bhaktapur</p>
          </div>
        </div>


        <div className=" flex flex-row justify-center items-center mb-10">
          <div className=" p-2 bg-orange rounded-full mx-10">
<IoCallSharp className=" text-white text-3xl"/>
          </div>
          <div className=" flex flex-col justify-center items-start">
<p className=" text-lg font-bold leading-relaxed">Call us</p>
<p className="">9818055984</p>
          </div>
        </div>

        <div className=" flex flex-row justify-center items-center mb-10">
          <div className=" p-2 bg-orange rounded-full mx-10">
<MdEmail className=" text-white text-3xl"/>
          </div>
          <div className=" flex flex-col justify-center items-start">
<p className=" text-lg font-bold leading-relaxed">Email address</p>
<p className="">prorepairguru@gmail.com</p>
          </div>
        </div>

        <div className=" flex flex-row justify-center items-center mb-10">
          <div className=" p-2 bg-orange rounded-full mx-10">
<IoMdTime className=" text-white text-3xl"/>
          </div>
          <div className=" flex flex-col justify-center items-start">
<p className=" text-lg font-bold leading-relaxed">Office Opens</p>
<p className="">Sun-Fri (08AM-10PM</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default OfficeInfo
