import { BsFillSendFill } from "react-icons/bs";

interface JoinTeamFormPropType {
  title: string;
  namePlaceholder: string;
  name: string;
  email: string;
  emailPlaceholder: string;
  address: string;
  addressPlaceholder: string;
  subject: string;
  subjectPlaceholder: string;
  description: string;
  descriptionPlaceholder: string;
}


const JoinTeamForm = ({title="Get in touch", namePlaceholder="You Name", name="name", email="email", emailPlaceholder="Your Email", address="address", addressPlaceholder="Your Address", subject="subject", subjectPlaceholder="Your Subject", description="description", descriptionPlaceholder="Your Description"}: JoinTeamFormPropType) => {
  return (
   <>
   <div className=" flex flex-col items-start justify-center m-2 shadow-lg p-10 rounded-lg max-w-[h-screen]">
<h2 className=" text-2xl font-bold mb-10">{title}</h2>
<form action="https://getform.io/f/amddgvkb" method="POST" className=" flex flex-col items-center justify-between w-full gap-y-7" >
<div className=" flex flex-col md:flex-row gap-x-10 justify-center items-center w-full">
  <input type="text" name={name} placeholder={namePlaceholder} required className="placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-xl px-3 py-2 transition duration-300 ease focus:outline-none focus:border-orange hover:border-slate-300 shadow-sm focus:shadow  h-14 w-full mt-10"/>
  <input type="email" name={email} placeholder={emailPlaceholder} required className=" placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-xl px-3 py-2 transition duration-300 ease focus:outline-none focus:border-orange hover:border-slate-300 shadow-sm focus:shadow w-full h-14 mt-10"/>

</div>

<div className=" flex flex-col md:flex-row gap-x-10 justify-center items-center w-full">
  <input type="text" name={address} placeholder={addressPlaceholder} required className="placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-xl px-3 py-2 transition duration-300 ease focus:outline-none focus:border-orange hover:border-slate-300 shadow-sm focus:shadow  h-14 w-full mt-10"/>
  <input type="email" name={subject} placeholder={subjectPlaceholder} required className=" placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-xl px-3 py-2 transition duration-300 ease focus:outline-none focus:border-orange hover:border-slate-300 shadow-sm focus:shadow w-full h-14 mt-10"/>

</div>

<textarea cols={15} placeholder={descriptionPlaceholder} name={description} className=" placeholder:text-slate-800 text-slate-700 text-sm border border-slate-200 rounded-xl px-3 py-2 transition duration-300 ease focus:outline-none focus:border-orange hover:border-slate-300 shadow-sm focus:shadow w-full h-auto "/>
<button type="submit" value="Submit" className=" mt-10 flex flex-row justify-evenly items-center bg-orange hover:bg-infobg group px-5 py-2 rounded-lg w-fit"> 
<p className=" text-lg font-bold  mr-3 uppercase">Submit</p> 
<div className=" p-3 rounded-full bg-white">
  <BsFillSendFill className=" text-orange group-hover:text-infobg text-lg"/>
</div>
</button>
</form>
   </div>
   </>
  )
}

export default JoinTeamForm