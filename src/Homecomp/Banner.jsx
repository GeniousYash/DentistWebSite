import dentistBannervdo from "../assets/videos/dentistsBanner.mp4"
import { Link } from "react-router-dom";



const Banner = () => {
  return (
    <div className="BannerHome w-full relative">
      <div className="w-full">
        <video autoPlay muted loop className="w-[100vw] h-[100vh] object-cover z-[0]" src={dentistBannervdo}></video>
      </div>
      <div className="w-auto absolute top-[80%] left-1/2 transform -translate-x-1/2 cursor-pointer rounded-md">
        <div className="w-auto px-4 py-4 text-3xl bg-amber-500 text-white flex items-center justify-center rounded-md">
            <Link to="/contact">Book An Appointment</Link>
        </div>
      </div>
    </div>
  )
}

export default Banner;
