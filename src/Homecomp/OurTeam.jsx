import React from 'react'
import SliderComp from '../Componants/SliderComp'
import Texthover from '../Componants/Texthover'
import { Link } from 'react-router-dom'
import "./OurTeam.css"

const OurTeam = () => {
    return (
        <div className='w-[95%] p-4 m-auto flex flex-col mt-[20vh]'>
            <div className='max-w-[60%]'>
                <p className='text-[#767676]'>WHO ARE WE</p>
                <h1 className='text-6xl font-medium text-[#313131] pt-[20px]'>OUR TEAM</h1>
                <p className='text-[#767676] text-lg pt-[20px] pb-[20px]'>Meet our team of dental experts, committed to delivering top-quality care. Highly trained and friendly, our staff ensures a welcoming experience for every patient</p>
            </div>
            <div className='w-[100%] h-[60vh] flex flex-row relative'>
                <div className='w-[29%] mr-[20px]'>
                    <div className='w-[100%] h-[100%] p-6 rounded-lg bg-[#37465d] mr-[20px] flex flex-col justify-between'>
                        {/* <div className='text-4xl text-[#b6b7bb]'></div> */}
                        <div>
                            <p className='text-[#f9fcfd] pt-[20px]'>MEET US</p>
                            <h1 className='text-3xl font-medium text-[#f9fcfd] pt-[20px]'>We are a team of experts</h1>
                            <p className='text-lg font-thin text-[#f9fcfd] pt-[20px]'>Our clinic stands at the forefront of dental innovation and patient care. We are equipped with the latest technology to provide optimal results.</p>
                            <Link to="/about"><div className="btnhover w-[60%] h-auto rounded-lg bg-gray-200 flex justify-center items-center mt-[20px]">
                                <Texthover textname="About Us" />
                            </div></Link>
                        </div>
                    </div>
                </div>
                <div className='w-[70%] h-[100%] absolute right-[0px]'><SliderComp /></div>
            </div>
        </div>
    )
}

export default OurTeam
