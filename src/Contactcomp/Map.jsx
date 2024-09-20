import "./Map.css"




const Map = () => {
    return (
        <div className="w-[95%] m-auto mt-[25px] bg-zinc-200 overflow-hidden rounded-lg">
            <div className="w-[100%]">
                <div className='w-[100%] pt-[10vh] pb-4'><h1 className='text-2xl text-center text-[#313131]'>NEEM DENTAL CLINIC</h1></div>
                <div className='w-[100%] pb-4'><h1 className='text-6xl text-center text-[#313131]'>WHERE TO FIND US</h1></div>
                <div className='w-[100%] pb-[10vh]'><h1 className='text-xl text-center text-[#313131]'>Bass road, opposite Power House, Santosh Colony, Dharuhera, Haryana 123106</h1></div>
                <div className="w-[95%] m-auto rounded-lg overflow-hidden pb-[7vh]">
                    <iframe className="w-[100%] h-[80vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.199534883624!2d76.78849807458631!3d28.201249703536487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d499159c5187f%3A0xe419716292574b01!2sNeem%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1725277742704!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Map
