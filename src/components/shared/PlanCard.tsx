import { FaArrowRight } from "react-icons/fa6";
import Modal from "../specific/Model";
import PlanForm from "../specific/PlanForm";
type planCardPropType = {
open: boolean,
onClose: () => void
onOpen: () => void

}
const PlanCard = ({open, onClose, onOpen}: planCardPropType) => {
    const offerInfo = {
        offteName: "Basic Plan",
        price: "4000",
        paymentType: "one Time payment",
        services: [
          "One Hours Response Time",
          "Two Routine Visits",
          "9 Emergency Visits",
          "Office Hour Service",
          "Free Tank Cleaning upto 2000 Ltrs",
          "Free Helper and Consulation"
        ]
    }

  return (
    <>
    <div>
<div className=" flex flex-col justify-center items-center  w-60  text-white ml-5 my-12 shadow-lg hover:-translate-y-3 ease-in-out delay-150 duration-300 space-y-5 rounded-lg pb-8">
  <div className=" uppercase text-lg font-bold bg-orange w-full py-8 px-5 rounded-lg">

{offerInfo.offteName}
  </div>
  <div className=" flex flex-col justify-center items-center w-full bg bg-greyWhite text-black  mb-5 space-y-3">
<div className=" text-5xl font-extrabold ">NPR  {offerInfo.price}</div>
<div className=" text-[#757f95]">{offerInfo.paymentType}</div>
<div className=" border-b-2 border-dashed w-full border-[#757f95]"> </div>
<div className=" flex flex-col justify-center items-center space-y-3 mt-3 pb-5">

{offerInfo.services.map((service)=><div key={service} className=" text-center">{service}</div>)}
</div>
  <button className=" bg-orange flex flex-row justify-center items-center hover:bg-infobg group rounded-2xl " onClick={()=>{
    onOpen()
  }
    }>
<div className=" uppercase text-xl font-bold text-white  py-2 px-6">Buy now</div>
    <div className="  rounded-full bg-white mr-3 p-3 -ml-4">
<FaArrowRight className=" text-orange group-hover:text-infobg"/>
    </div>
  </button>

  </div>
</div>

<Modal open = {open} onClose = {onClose} onOpen= {onOpen}
>
   <PlanForm planType = {offerInfo.offteName} onClose={onClose}/>
      </Modal>
      </div>
    </>
  )
}

export default PlanCard
