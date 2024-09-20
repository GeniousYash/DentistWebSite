import React, { useEffect } from 'react'
import "./Aboutusdiv.css"
import img1 from "../assets/ServiceImages/img1.png";
import img2 from "../assets/AboutImages/img2.png";
import { Link } from 'react-router-dom';
import Buttoncomp from '../Componants/Buttoncomp';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Aboutusdiv = () => {
    useEffect(() => {
        // Initialize Locomotive Scroll
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
        });

        // Destroy Locomotive Scroll instance on unmount
        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);
    return (
        <div data-scroll-container className='w-[95%] m-auto'>
            <div className='w-[100%] flex flex-col'>
                <div className='w-[100%] py-[10vh]'><h1 className='aboutpagehead text-[6.5vw] text-center text-[#313131]'>LEARN MORE ABOUT US</h1></div>
                <div className='w-[100%] h-[60vh] flex flex-row gap-[20px] mb-[20px]'>
                    <div className='w-[50%] rounded-lg overflow-hidden'><img data-scroll data-scroll-speed=".3" className='img1 object-cover' src={img1} alt="" /></div>
                    <div className='w-[50%] h-[100%] p-6 rounded-lg bg-[#f0f1f5] flex flex-col justify-between'>
                        <div className='text-3xl text-[#313131] uppercase'>About Us</div>
                        <div>
                            <h1 className='text-3xl font-medium text-[#313131] uppercase'>YOUR SMILE MATTERS TO US</h1>
                            <p className='text-xl text-[#767676] pt-[20px]'>Experience the difference at Neem dental. Contact us today to schedule your appointment and take the first step towards a healthier, more confident smile.
                            </p>
                            <Link to="/contact"><div className="w-[35%] h-[30%] bg-zinc-900 rounded-lg mt-[20px] text-white bottom-0 flex justify-center items-center">
                                <Buttoncomp btnname="appointment" />
                            </div></Link>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] h-[50vh] flex flex-row gap-[20px] mb-[20px]'>
                    <div className='w-[100%] h-[100%] p-6 rounded-lg bg-[#f0f1f5] flex flex-col justify-between'>
                        <div className='text-5xl text-[#313131] uppercase'>/ 2</div>
                        <div>
                            <h1 className='text-3xl font-medium text-[#313131] uppercase'>Expertise You Can Trust</h1>
                            <p className='text-xl text-[#767676] pt-[20px]'>Our team of highly skilled dentists and dental hygienists brings years of experience in general, cosmetic, and restorative dentistry.
                            </p>
                        </div>
                    </div>
                    <div className='w-[100%] rounded-lg overflow-hidden'><img data-scroll data-scroll-speed=".1" className='img2 object-cover' src={img2} alt="" /></div>
                </div>
                <div className='w-[100%] flex flex-row mb-[10px]'>
                    <div className='w-[100%] h-[50vh] flex flex-row gap-[20px]'>
                        <div className='w-[100%] h-[100%] px-10 py-[3em] rounded-lg bg-[#f0f1f5] flex flex-col justify-between'>
                            <div className='text-xl text-[#313131]'>YEARS OF EXPERIENCE</div>
                            <div><h1 className='text-7xl font-medium text-[#313131]'>14+</h1></div>
                        </div>
                        <div className='w-[100%] h-[100%] px-10 py-[3em] rounded-lg bg-[#37465d] flex flex-col justify-between'>
                            <div className='text-xl text-[#b6b7bb]'>ON-TIME APPOINTMENTS</div>
                            <div><h1 className='text-7xl font-medium text-[#f9fcfd]'>99%</h1></div>
                        </div>
                        <div className='w-[100%] h-[100%] px-10 py-[3em] rounded-lg bg-[#f0f1f5] flex flex-col justify-between'>
                            <div className='text-xl text-[#b6b7bb]'>SATSIFIED CLIENTS</div>
                            <div><h1 className='text-7xl font-medium text-[#313131]'>200+</h1></div>
                        </div>
                        <div className='w-[100%] h-[100%] px-10 py-[3em] rounded-lg bg-[#37465d] flex flex-col justify-between'>
                            <div className='text-xl text-[#b6b7bb]'>PAIN-FREE PROCEDURES</div>
                            <div><h1 className='text-7xl font-medium text-[#f9fcfd]'>100%</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutusdiv
