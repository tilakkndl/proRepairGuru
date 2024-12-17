import { Link } from 'react-router-dom'

const homeRepair = [
    {
        name: "Plumbing",
        image: "./services/plumbing.jpg"
    },
    {
        name: "Electrician",
        image: "./services/electrician.jpg"
    },
    {
        name: "Interior Exterior Decortion",
        image: "./services/interior_exterior_design.jpg"
    },{
        name: "Kitchen Decortion",
        image: "./services/kitchen_decor.jpg"
    },{
        name: "Water Purification",
        image: "./services/tank.jpeg"
    },
    {
        name: "CCTV Install & Maintenance",
        image: "./services/cctv.jpeg"
    },
    {
        name: "A/C Install & Maintenance",
        image: "./services/ac.jpg"
    },
    {
        name: "Roofing",
        image: "./services/roofing.jpeg"
    },
    {
        name: "Solar Panel",
        image: "./services/solar.jpg"
    },
    {
        name: "Carpentery",
        image: "./services/carpenter.jpg"
    }
 
]

const services = [
    // {
    //     name: "Home Repair",
    //     image: "./services/home.jpg"
    // },
 
    {
        name: "Tech Support",
        image: "./services/tech_support.jpg"
    },
    ...homeRepair,
   
]

const ServiceList = () => {
  return (
    <>
      <div className=' grid grid-cols-3 justify-center items-center bg-greyWhite gap-2 gap-y-9 shadow-lg rounded-lg my-16 place-items-center w-full'>
{
    services.map(({name, image})=>
        <div>
        <div className=' flex flex-col  justify-content-center align-items-center w-[350px] h-[250px] shadow-lg rounded-lg'>
<Link to="/service_details" state={{name, image}}>
    <img src ={image}  className=' rounded-lg hover:scale-105 overflow-hidden ease-in-out delay-150 duration-300 w-full h-full' />
</Link>
        </div>
    <h3 className=' font-bold text-lg'>{name}</h3>
        </div>
    )
}
      </div>
    </>
  )
}

export default ServiceList
