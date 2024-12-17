import { Link } from 'react-router-dom'

interface locatonCardProp {
    location: string,
    imageUrl: string
}

const LocationCard = ({location, imageUrl}: locatonCardProp) => {
  return (
    <>
    <div className=' bg-white pb-5 rounded-md w-72 overflow-hidden'>
        <img src={imageUrl} alt="Kathmandu" className=' rounded-md w-full h-56' />
        <h2 className=' ml-3'>{location}</h2>
        <Link to = "/services_list">
        <button className=' bg-infobg text-white px-3 ml-3 py-1 rounded-md mt-2 hover:text-orange' >
            Get Services
        </button>
        </Link>
    </div>
    </>
  )
}

export default LocationCard