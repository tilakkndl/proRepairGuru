import { Link } from "react-router-dom"

interface MobileHeaderPropType {
    onClose: ()=>void
}
const PlanForm = ({onClose}: MobileHeaderPropType) => {
    const navLinks = [
        {
            name: "Home",
            link: "/"
            },
            {
            name: "Services",
            link: "/services"
            },
            {
            name: "Contact",
            link: "/contact",
        },
        {
            name: "Join Us",
            link: "/joinus",
        }
    ]
  
  return (
    <>
    <div className="h-screen  ">
    <div className="overflow-y-scroll flex flex-row bg-[#efefef] w-[490px] rounded-lg space-y-5 mb-8 justify-end" onClick={(e)=>e.stopPropagation()}>
<div className=" sticky w-full flex flex-row justify-end items-end h-16 px-4 pt-5  opacity-100 z-50 my-5 ">
    <div className="  cursor-pointer text-5xl text-blue-950 hover:text-black mr-4" onClick={onClose}>X</div>
    </div>

</div>
<div className=" flex flex-col justify-center items-center space-y-3 mt-20">

{navLinks.map((navLink)=>(
    <div key={navLink.name} className=" text-2xl font-bold text-white hover:text-orange my-3">
        <Link to={navLink.link} >{navLink.name}</Link>
    </div>
))}
</div>

</div>
 
      
    </>
  )
}

export default PlanForm
