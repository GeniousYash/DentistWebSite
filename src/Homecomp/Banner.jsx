import dentistBannervdo from "../assets/videos/dentistsBanner.mp4"
import { Link } from "react-router-dom";
import Buttoncomp from "../Componants/Buttoncomp";



const Banner = () => {
  return (
    <div className="BannerHome w-[95%] m-auto mt-[25px] rounded-lg relative ">
      <div className="w-full">
        <video autoPlay muted loop className="w-[100vw] h-[100vh] object-cover z-[0] rounded-lg" src={dentistBannervdo}></video>
      </div>
      <div className="w-auto absolute top-[80%] left-1/2 transform -translate-x-1/2 cursor-pointer rounded-md">
        <div className="w-auto px-4 py-0 text-3xl bg-amber-500 text-white flex items-center justify-center rounded-md">
            <Link to="/contact"><Buttoncomp btnname="appointment"/></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner;
