import React from 'react'
import whatwedoimg from "../assets/HomeImages/WhatWeDoImg.png";
// import Buttoncomp from '../Componants/Buttoncomp';
// import Magneticbtn from '../Componants/Magneticbtn';
import Texthover from '../Componants/Texthover';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
    return (
        <div className='w-[95%] h-[100vh] m-auto rounded-lg mt-[25px] overflow-hidden'>
            <div className='w-[100%] h-[100%] flex flex-col '>
                <div className='w-[100%] h-[50%] flex flex-row mb-[10px]'>
                    <div className='w-[100%] h-[100%] mr-[20px]'>
                        <div className='w-[100%] h-[100%] flex p-6 justify-center flex-col gap-[10px]'>
                            <p className='text-[#767676]'>OUR OFFERS</p>
                            <h1 className='text-6xl font-medium text-[#313131]'>WHAT WE DO</h1>
                            <p className='text-[#767676]'>Our team provides personalized care. From cleanings to advanced cosmetic procedures. Contact us!</p>
                        </div>
                    </div>
                    <div className='w-[100%] h-[100%] flex flex-row'>
                        <div className='w-[50%] h-[100%] p-6 rounded-lg bg-[#f0f1f5] mr-[20px] flex flex-col justify-between'>
                            <div className='text-4xl text-[#b6b7bb]'>/ 1</div>
                            <div>
                                <h1 className='text-3xl font-medium text-[#313131]'>Preventive Care</h1>
                                <p className='text-[#767676] pt-[20px]'>Routine check-ups, dental cleanings, and oral health education to prevent future dental problems.</p>
                            </div>
                        </div>
                        <div className='w-[50%] h-[100%] p-6 rounded-lg bg-[#37465d] mr-[20px] flex flex-col justify-between'>
                            <div className='text-4xl text-[#b6b7bb]'>/ 2</div>
                            <div>
                                <h1 className='text-3xl font-medium text-[#f9fcfd]'>Cosmetic Dentistry</h1>
                                <p className='text-[#f9fcfd] pt-[20px]'>Smile makeovers, teeth whitening, veneers, and bonding to help you achieve the confident smile you’ve always wanted.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] h-[50%] flex flex-row mt-[10px]'>
                    <div className='w-[100%] h-[100%] flex flex-row'>
                        <div className='w-[50%] h-[100%] p-6 rounded-lg bg-[#f0f1f5] mr-[20px] flex flex-col justify-between'>
                            <div className='text-4xl text-[#b6b7bb]'>/ 3</div>
                            <div>
                                <h1 className='text-3xl font-medium text-[#313131]'>Restorative Dentistry</h1>
                                <p className='text-[#767676] pt-[20px]'>Solutions like dental implants, crowns, bridges, and dentures to restore the function and appearance of your teeth.</p>
                            </div>
                        </div>
                        <div className='w-[50%] h-[100%] p-6 rounded-lg bg-[#37465d] flex flex-col justify-between'>
                            <div className='text-4xl text-[#b6b7bb]'>/ 4</div>
                            <div>
                                <h1 className='text-3xl font-medium text-[#f9fcfd]'>Orthodontics</h1>
                                <p className='text-[#f9fcfd] pt-[20px]'>Braces and Invisalign to straighten teeth and correct bite issues for children, teens, and adults.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] h-[100%] overflow-hidden rounded-lg ml-[20px] relative'>
                        <img data-scroll data-scroll-speed="-.05" className='z-0 relative width-[100%] height-[100%]' src={whatwedoimg} alt="" />
                        <Link to="/services"><div className="w-full h-[20%] absolute bg-gray-200 bottom-0 flex justify-center items-center">
                            <Texthover textname="View Services" />
                        </div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
