import { Link } from 'react-router-dom';
import { HiOutlineEmojiSad } from "react-icons/hi";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  return (
    <>
    <div className='h-screen  bg-background flex justify-center items-center flex-col'>
        <div className=' w-1/2 flex justify-center items-center flex-col'>
        <HiOutlineEmojiSad className='text-9xl'/>
        <TbError404 className='text-5xl '/>
        <p className='text-2xl '>page not found</p>
        <Link to='/' className=' px-4 mt-5 py-1 rounded-md shadow-md  border-2 border-primary bg-primary hover:bg-background hover:text-primary active:text-lg text-black'>Go back to home</Link>
        </div>
    
        </div>  
    </>
  )
}

export default NotFound