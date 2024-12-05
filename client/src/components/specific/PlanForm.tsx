interface planformType{
    onClose: ()=>void
    planType: string
}
const PlanForm = ({onClose, planType}: planformType) => {
  
  return (
    <>
    <div className="overflow-y-scroll flex flex-col bg-[#efefef] w-[490px] rounded-lg space-y-5 h-screen mb-8" onClick={(e)=>e.stopPropagation()}>
<div className=" sticky w-full flex flex-row justify-between  h-16 px-4 pt-5 shadow-xl opacity-100 z-50 my-5">
    <div className=" font-bold text-xl text-black">{planType}</div>
    <div className=" cursor-pointer text-xl text-blue-950 hover:text-black" onClick={onClose}>X</div>


</div>
    <form action="https://getform.io/f/amddgvkb" method="POST" className=" flex flex-col space-y-3 z-10">

    <label className="pl-2">Plan Name.*</label>
    <input name="planType" type="text" value={planType.toUpperCase()} className=" w-full border-2 border-grey px-2 h-10 rounded-lg bg-white" disabled/>
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



  <button className=" bg-infobg cursor-pointer font-bold px-5 py-2 w-fit shadow-lg ml-3 text-white rounded-lg hover:bg-blue-600 ease-in-out delay-150 duration-300">
    Submit
  </button>

    </form>
    </div>
      
    </>
  )
}

export default PlanForm
