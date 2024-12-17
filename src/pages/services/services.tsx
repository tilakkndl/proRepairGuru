import PlanCard from "../../components/shared/PlanCard"
import RouteTitle from "../../components/shared/RouteTitle"
import serviceController from "./services.controller"

const Services = () => {
    const { open, onClose, onOpen } = serviceController()
  return (
<>
<RouteTitle/>
<PlanCard  open = {open} onClose = {onClose} onOpen = {onOpen}/>
</>
  )
}

export default Services
