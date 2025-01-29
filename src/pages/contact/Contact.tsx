import RouteTitle from '../../components/shared/RouteTitle'
import OfficeInfo from "../../components/specific/OfficeInfo"
import JoinTeamForm from "../../components/specific/JoinTeamForm"

const Contact = () => {
  const contactFormInfo = {
    title: "Get in touch",
    namePlaceholder: "Your Name",
    name: "name",
    email: "email",
    emailPlaceholder: "Your Email",
    address: "address",
    addressPlaceholder: "Your Address",
    subject: "subject",
    subjectPlaceholder: "Your Subject",
    description : "message",
    descriptionPlaceholder: "Your Message"
  }
  return (
    <>
      <RouteTitle/>
      <div className=' bg-grey-100 w-full'>

      <div className=' lg:grid lg:grid-cols-[1fr_2fr] grid-cols-2  gap-4 items-center justify-center  rounded-lg'>
        
<OfficeInfo />
<JoinTeamForm  {...contactFormInfo}/>

      </div>
      </div>
    </>
  )
}
export default Contact
