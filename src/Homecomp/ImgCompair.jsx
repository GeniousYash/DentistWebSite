import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import img11 from "../assets/images/teethimg11.png";
import img12 from "../assets/images/teethimg12.png";
import img21 from "../assets/images/teethimg21.png";
import img22 from "../assets/images/teethimg22.png";

const ImgCompair = () => {
    return (
        <div className="m-auto w-[95%] h-screen bg-zinc-200 text-6xl flex flex-col items-center rounded-lg mt-[25px]">
            <div className='w-[80%] m-auto'>
                <p className='text-2xl pb-4'>Neem Dental Clinic</p>
                <h1 className='text-6xl text-[#2276bf]'>Patient Cases</h1>
            </div>
            <div className='m-auto w-[80%] h-[50%] flex justify-between gap-[100px] p-0 mt-[-10vh]'>
                <ReactCompareSlider className='w-[80%] border-8 border-amber-500 rounded-3xl overflow-hidden'
                    itemOne={<ReactCompareSliderImage src={img11} srcSet={img11} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={img12} srcSet={img12} alt="Image two" />}
                />
                <ReactCompareSlider className='w-[80%] border-8 border-amber-500 rounded-3xl overflow-hidden'
                    itemOne={<ReactCompareSliderImage src={img22} srcSet={img22} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={img21} srcSet={img21} alt="Image two" />}
                />
            </div>
        </div>
    )
}

export default ImgCompair
