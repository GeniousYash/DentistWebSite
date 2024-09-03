import { FaArrowRight } from "react-icons/fa";
import Owenerimg from "../assets/images/NeemDentalClinicOwener.jpg";


const CompAboutus = () => {

  return (
    <div className="aboutusHome w-full flex justify-center items-center relative">
        <div className="w-[90%] h-[70vh] flex flex-row justify-between mt-[20vh] mb-[10vh] gap-[5%]">
            <div className="w-[70%]">
                <div className="">
                    <h1 className="text-4xl font-semibold pb-8">Welcome to <span className="text-[#2276bf]">Neem Dental Care Centre</span></h1>
                    <p className="text-[#7b7a7a] tracking-wide pb-8 text-xl">"Perfect one stop solution for all Dental problems by experienced dentist, rct specialist, braces treatment, dental implant, cosmetic dentist , Orthodontist , gum problem, laser dentistry, teeth whitening , tooth surgery"</p>
                    <p className="text-[#7b7a7a] tracking-wide pb-8 text-xl">We believe in specialized treatment, for each and every dental problem which a patient may have. Dental or oral health is concerned with your teeth, gums and mouth. The goal is to prevent complications such as tooth decay (cavities) and gum disease and to maintain the overall health of your mouth.</p>
                    <div className="flex flex-row items-center cursor-pointer text-xl">
                        <p className="text-[#2276bf] font-semibold">Book an appointment</p>
                        <span className="text-[#2276bf] px-4">
                            <FaArrowRight/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-[30%] rounded-tr-3xl rounded-bl-3xl overflow-hidden">
                <img data-scroll data-scroll-speed="-.5" className="w-full h-full object-cover" src={Owenerimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default CompAboutus;
