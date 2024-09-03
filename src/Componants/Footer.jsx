import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";



const Footer = () => {
  return (
    <div className="w-full relative bg-cyan-800 overflow-hidden">
        <div className="w-full relative px-10 py-20 text-[#e0ccbb] z-10">
            <div className="w-full"><h1 className="text-[3rem] sm:text-[5rem] font-semibold leading-none">Neem</h1></div>
            <div className="w-full"><h1 className="text-[3rem] sm:text-[5rem] font-semibold leading-none">Dental</h1></div>
            <div className="w-full sm:w-[40%] mt-8"><p>"Perfect one stop solution for all Dental problems by experienced dentist, Rct specialist, braces treatment, dental implant, cosmetic dentist , Orthodontist , gum problem, laser dentistry, teeth whitening , tooth surgery"</p></div>
            <div className="w-full mt-6 flex items-center sm:hidden">
                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 circle-outline border-[1px] border-[#e0ccbb] rounded-full"><circle cx="25" cy="25" r="23"></circle></svg>
                <h3 className="border-b-[1px] border-[#e0ccbb] text-md font-semibold ml-2">Our Story</h3>
            </div>
            <div className="w-full border-b-[1px] border-white mt-8 mb-8"></div>
            <div className="w-full flex flex-row gap-6">
                <div className="w-[100%]">
                        <li className="list-none text-gray-300 cursor-pointer">Home</li>
                        <li className="list-none text-gray-300 cursor-pointer">About</li>
                        <li className="list-none text-gray-300 cursor-pointer">Blog</li>
                        <li className="list-none text-gray-300 cursor-pointer">Contact</li>
                </div>
                <div className="w-[100%]">
                        <li className="list-none text-gray-300 cursor-pointer">Behance</li>
                        <li className="list-none text-gray-300 cursor-pointer">Dribble</li>
                        <li className="list-none text-gray-300 cursor-pointer">Twitter</li>
                        <li className="list-none text-gray-300 cursor-pointer">Instagram</li>
                </div>
                <div className="w-[100%]">
                    <div className="flex flex-row">
                         <span className="px-2 mt-[3px]"><FaLocationDot/></span>
                         <p className="text-semibold text-gray-200">Bass road, opposite Power House, Santosh Colony, Dharuhera, Haryana 123106</p>
                    </div>
                    <div className="flex flex-row">
                         <span className="px-2 mt-[3px]"><IoMdCall /></span>
                         <a href="tel:+918882715717" className="text-semibold text-gray-200">
                                +91 88827 15717
                         </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
