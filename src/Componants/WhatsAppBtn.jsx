import React from 'react'
import "./WhatsappBtn.css"
import whatsapplogo from "../assets/HomeImages/whatsappimg.png"

const WhatsAppBtn = () => {
    return (
        <div className='whatsappbtndiv w-[50px] h-[50px] fixed'>
            <a href='https://wa.me/918882715717?text=Hello, Mam!' target='_blank'><img className='w-[100%] h-[100%]' src={whatsapplogo} alt="" /></a>
        </div>
    )
}

export default WhatsAppBtn
