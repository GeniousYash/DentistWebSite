import { useState } from "react";
// Import images
import servbanner from "../assets/images/service-banner.png";
import servicon1 from "../assets/images/service-icon-1.png";
import servicon2 from "../assets/images/service-icon-2.png";
import servicon3 from "../assets/images/service-icon-3.png";
import servicon4 from "../assets/images/service-icon-4.png";
import servicon5 from "../assets/images/service-icon-5.png";
import servicon6 from "../assets/images/service-icon-6.png";


const OurServices = () => {
    const [elem1, setElem1] = useState([
        {
            heading: "Root Canal",
            para: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
            img: servicon1
        },
        {
            heading: "Cosmetic Teeth",
            para: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
            img: servicon2
        },
        {
            heading: "Live Advisory",
            para: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
            img: servicon3
        },
    ]);
    const [elem2, setElem2] = useState([
        {
            heading: "Alignment Teeth",
            para: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
            img: servicon4
        },
        {
            heading: "Oral Hygiene",
            para: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
            img: servicon5
        },
        {
            heading: "Cavity Inspection",
            para: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
            img: servicon6
        },
    ]);
    return (
        <div className="w-full relative mt-[10vh]">
            <div className="flex flex-col justify-center items-center m-auto pb-[5vh]">
                <p className="text-2xl text-[#2276bf] font-semibold pb-[20px]">OUR SERVICES</p>
                <h1 className="text-6xl text-[#43425b] font-semibold">What We Provide</h1>
            </div>
            <div className="w-[80%] m-auto flex flex-row">
                <div className="w-[30%]">
                    {elem1.map((item, index) => {
                        return <div key={index} className="elem w-full h-[20vh] flex flex-row justify-between mt-5 border-2 px-[10px]">
                            <div className="flex justify-center">
                                <img data-scroll data-scroll-speed="-.05" className="w-[50px] object-contain" src={item.img} alt="" />
                            </div>
                            <div className="w-[70%] flex flex-col justify-center">
                                <h3 className="font-semibold">{item.heading}</h3>
                                <p className="capitalize opacity-50">{item.para}</p>
                            </div>
                        </div>
                    })}
                </div>
                <div className="w-[40%]">
                    <img data-scroll data-scroll-speed="-.05" src={servbanner} alt="" />
                </div>
                <div className="w-[30%]">
                    {elem2.map((item, index) => {
                        return <div key={index} className="elem w-full h-[20vh] flex flex-row justify-between mt-5 border-2 px-[10px]">
                            <div className="flex items-center">
                                <img data-scroll data-scroll-speed="-.05" className="w-[50px] object-contain" src={item.img} alt="" />
                            </div>
                            <div className="w-[70%] flex flex-col justify-center">
                                <h3 className="font-semibold">{item.heading}</h3>
                                <p className="capitalize opacity-50">{item.para}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default OurServices;
