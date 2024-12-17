import { FaQuoteLeft } from "react-icons/fa";
import Rating from './Rating'

interface ratingPropType {
    rating: number;
    review: string;
    name: string;
}

const ClientReview = ({rating=4.5, review="It was the best service i ever recieved. The service was so good that I would use same paltform for the future work as well. Similarly, I would suggest other people to select same platform without any hesitation. You won't regret with your decison", name= "Ram krishna"}: ratingPropType) => {
  return (
    <>
    <div className=' flex flex-col justify-center items-center w-[350px] h-96 shadow-lg p-5 bg-white rounded-lg'>
<Rating rating={rating}/>
<p className='text-justify'>{review}</p>
<div className=' flex flex-row justify-between items-center w-full mt-6'>
<h1 className='text-center text-black text-3xl font-bold'> {name}</h1>
<div className=' border-2 rounded-full border-orange p-4 bg-orange'>
<FaQuoteLeft className='text-white '/>
</div>
</div>
    </div>

    </>
  )
}

export default ClientReview