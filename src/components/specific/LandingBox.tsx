import LocationCard from '../shared/LocationCard'

const LandingBox = () => {
    const serviceLocation = [{
        imageUrl: "./ktm.jpeg",
        location: "Kathmandu",
    },
    {
        imageUrl: "./rasuwa.jpg",
        location: "Rasuwa",
    }
]
  return (
    <>
    <div className=' w-screen bg-infobg py-4 overflow-hidden max-w-full'>

        <div className=' flex flex-row justify-center items-center w-full overflow-hidden m-1'>

            <img src='./landing.jpg' alt='logo' className='hidden lg:flex w-1/2 rounded-md'/>

            <div className=' flex flex-col justify-center items-center space-y-3'>


            <h1 className=' text-3xl text-white inline-block font-bold'> Your Dream, <section className=' inline-block text-orange'>Our Passion</section></h1>

            <div className=' flex flex-col sm:grid sm:grid-cols-2 items-center justify-center space-y-5 sm:space-x-5 ml-3 overflow-hidden '>
                {/* <LocationCard  />
                <LocationCard /> */}
             {serviceLocation.map((location) => (
                            <LocationCard key={location.location} location={location.location} imageUrl={location.imageUrl} />
                        ))}
            </div>
            </div>
           
        </div>

    </div>
    </>
  )
}

export default LandingBox