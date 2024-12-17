import {useLocation} from "react-router-dom"

const ServiceDetails = () => {
    const location = useLocation();
    const {name, image} = location.state;
  return (
    <>
          <>
          <div className=' w-full flex justify-center items-center'>

        
    <div className=" flex flex-col bg-[#efefef] justify-center items-center  rounded-lg space-y-5  mb-8 w-2/3 ml-3">
<div className=" w-full flex flex-row justify-center items-center  h-16 px-4 pt-5  opacity-100 z-50 my-5">
    <div className=" font-bold text-xl text-black">{name}</div>


</div>
    <img src={image} alt=""  width="300px" height="200px" className=' rounded-lg'/>
    <form action="https://getform.io/f/amddgvkb" method="POST" className=" flex flex-col space-y-3 z-10 w-full">

    <label className="pl-2">Plan Name.*</label>
    <input name="planType" type="text" value={name.toUpperCase()} className=" w-full border-2 border-grey px-2 h-10 rounded-lg bg-white" disabled/>
    <label className="pl-2"> Name.*</label>
    <input type="text" name="name" className=" w-full border-2 border-grey px-2 h-10 rounded-lg"/>
    <label className="pl-2"> Email.*</label>
    <input type="email" name="email" className=" w-full border-2 border-grey px-2 h-10 rounded-lg"/>
    <label className="pl-2"> Phone.*</label>
    <input type="text" name="phone" className=" w-full border-2 border-grey px-2 h-10 rounded-lg"/>
    <label className="pl-2"> Location.*</label>
    <input type="text" name="location" className=" w-full border-2 border-grey px-2 h-10 rounded-lg"/>
    <label className="pl-2"> Description.*</label>
    <textarea name="description" cols={3} className=" w-full border-2 border-grey px-2 rounded-lg"/>



  <button className=" bg-infobg cursor-pointer font-bold px-5 py-2 w-fit shadow-lg ml-3 text-white rounded-lg hover:bg-blue-600 ease-in-out delay-150 duration-300 mb-4">
    Submit
  </button>

    </form>
    </div>
    </div>
    </>
    </>
  )
}

export default ServiceDetails
