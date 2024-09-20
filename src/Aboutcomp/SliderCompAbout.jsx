import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import docimgOne from "../assets/HomeImages/sliderimgOne.png"
import docimgTwo from "../assets/HomeImages/SliderimgTwo.png"
import { GoDotFill } from "react-icons/go";
import "./SliderCompAbout.css"

const data = [
    {
        name: "Dr. Khushboo Yadav – Skilled Prosthodontist",
        img: docimgOne,
        p1: "Dr. Khushboo Yadav has 6 years of specialized expertise in prosthodontics, focusing on advanced restorative techniques.",
        p2: "She excels in creating and fitting crowns, bridges, dentures, and implants, ensuring functional and aesthetically pleasing results.",
        p3: "She customizes treatment plans to meet each patient’s unique dental needs, combining precision with a patient-centered approach.",
        p4: "Her commitment to excellence ensures long-lasting, beautiful results in prosthetic dentistry, enhancing both smiles and confidence.",
    },
    {
        name: "Dr. Piyush Mudgal – Expert Orthodontist",
        img: docimgTwo,
        p1: "Dr. Piyush Mudgal brings 14 years of experience in orthodontics, making him highly skilled in diagnosing and treating a range of alignment issues and bite problems.",
        p2: "He is proficient in both traditional braces and modern clear aligners, offering patients tailored solutions based on their specific needs.",
        p3: "By utilizing advanced techniques and technology, Dr. Mudgal creates personalized treatment plans designed to deliver optimal results for each patient.",
        p4: "His dedication to continuous learning ensures that his patients benefit from the latest orthodontic advancements, leading to effective care and improved smiles.",
    },
]

const SliderCompAbout = () => {
    var settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='w-[100%] !h-[100%] rounded-lg'>
            <Slider {...settings}>
                {data.map((item, index) => {
                    return <div key={index} className='slidermain w-[100%] !h-[70vh] flex flex-row !justify-between'>
                        <div className='w-[40%] !h-[100%] px-4 py-6 mr-[10px] bg-[#f0f1f5] rounded-lg overflow-hidden flex flex-col justify-between'>
                            <div className='w-[100%] !h-[100%]'><h1 className='text-3xl text-[#313131]'>{item.name}</h1></div>
                            <div className='w-[100%] !h-[100%]'>
                                <ul className='px-[20px] list-disc text-md text-[#767676] text-justify items-center'><li>{item.p1}</li></ul>
                                <ul className='px-[20px] list-disc text-md text-[#767676] text-justify items-center'><li>{item.p2}</li></ul>
                                <ul className='px-[20px] list-disc text-md text-[#767676] text-justify items-center'><li>{item.p3}</li></ul>
                                <ul className='px-[20px] list-disc text-md text-[#767676] text-justify items-center'><li>{item.p4}</li></ul>
                            </div>
                        </div>
                        <div className='w-[60%] h-[100%] ml-[10px] rounded-lg overflow-hidden'><img data-scroll data-scroll-speed="-.05" className='Docimages w-full !h-[100%] object-cover -mt-[3px]' src={item.img} alt="" /></div>
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default SliderCompAbout
