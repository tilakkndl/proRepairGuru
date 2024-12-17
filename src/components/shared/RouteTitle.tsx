    import { IoHomeOutline } from "react-icons/io5";
    import { RiArrowRightDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const RouteTitle = () => {
    const route = (window.location.pathname).split("/")[1];
  return (
<>
<div className=" flex flex-col justify-center items-center bg-slate-700 h-20 text-wrap text-white">
    <div className=" uppercase font-bold text-2xl">{route}</div>
    <div className=" flex flex-row items-center justify-center text-xl space-x-2">
    <Link to="/">
    <IoHomeOutline className=" text-3xl hover:text-orange"/>
    </Link>
    <RiArrowRightDoubleLine/>
    <div className=" text-orange">{route}</div>

    </div>

</div>
</>
  )
}

export default RouteTitle
