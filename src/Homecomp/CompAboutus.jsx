import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Owenerimg from "../assets/images/NeemDentalClinicOwener.jpg";
import Buttoncomp from "../Componants/Buttoncomp";
import "./CompAboutus.css"


const CompAboutus = () => {

    return (
        <div className="container w-[95%] m-auto flex justify-center items-center mt-[10vh]">
            <div className="w-[100%] h-[70vh] flex flex-row justify-between gap-[5%] items-center">
                <div className="w-[70%]">
                    <div className="">
                        <h1 className="text-4xl font-semibold pb-8">Welcome to <span className="text-[#2276bf]">Neem Dental Care Centre</span></h1>
                        <p className="text-[#7b7a7a] tracking-wide pb-8 text-xl">"Perfect one stop solution for all Dental problems by experienced dentist, rct specialist, braces treatment, dental implant, cosmetic dentist , Orthodontist , gum problem, laser dentistry, teeth whitening , tooth surgery"</p>
                        <p className="text-[#7b7a7a] tracking-wide pb-8 text-xl">We believe in specialized treatment, for each and every dental problem which a patient may have. Dental or oral health is concerned with your teeth, gums and mouth. The goal is to prevent complications such as tooth decay (cavities) and gum disease and to maintain the overall health of your mouth.</p>
                        <div className="flex flex-row items-center cursor-pointer text-xl">
                            <p className="btnTextCompAboutus text-[#2276bf] font-semibold">
                                <Link to="/contact"><Buttoncomp btnname="appointment" /></Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[30%] h-[80%] rounded-tr-3xl rounded-bl-3xl overflow-hidden">
                    <img data-scroll data-scroll-speed="-.1" className="w-full h-full object-cover" src={Owenerimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CompAboutus;
