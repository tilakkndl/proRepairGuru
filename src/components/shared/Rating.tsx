import { MdStarRate } from "react-icons/md";
import { FaRegStarHalf } from "react-icons/fa";

interface ratingPropType {
    rating: number
}

const Rating = ({rating}: ratingPropType) => {
  const ratingInt  = parseInt(rating.toString());
  const ratingDecimal = rating - ratingInt;
  return (
    <>
<div>
    <div className=' flex flex-row items-center justify-center space-x-1 mb-3'>
        {[...Array(ratingInt)].map((_, index) => {
            return <MdStarRate key={index} className='text-orange text-4xl'/>
        })}
        {ratingDecimal > 0 && <FaRegStarHalf className='text-orange'/>}
        <p></p>
    </div>
</div>
    
    </>
  )
}

export default Rating