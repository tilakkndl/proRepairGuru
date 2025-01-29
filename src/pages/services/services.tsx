import PlanCard from "../../components/shared/PlanCard"
import RouteTitle from "../../components/shared/RouteTitle"
import serviceController from "./services.controller"

const Services = () => {
    const { open, onClose, onOpen } = serviceController()
  return (
<>
<RouteTitle/>
<div className=" flex flex-row justify-center items-center space-x-5">
<PlanCard  open = {open} onClose = {onClose} onOpen = {onOpen}/>
</div>
</>
  )
}

export default Services
