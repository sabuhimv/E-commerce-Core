import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'
const Hero = () => {
  return (
    <div className='my-container h-full flex justify-between bg-heroBg'>
        <div className="hero-left flex flex-col justify-center gap-[20px]">
            <h2 className="text-3xl font-semibold text-[#090909]">New arrivlas only</h2>
            <div>
                <div className="hero-hand-icon flex items-center gap-[20px]">
                    <p className='text-[#171717] text-7xl font-medium'>new</p>
                    <img src={hand_icon}  alt=""  className='w-[55px]'/>
                </div>
                <p className='text-[#171717] text-7xl  font-medium'>collections</p>
                <p className='text-[#171717] text-7xl  font-medium'>for everyone</p>
            </div>

            <div className="hero-latest-btn flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-xl bg-[#ff4141] mt-[30px] text-white text-2xl">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>

        <div className="hero-right items-center">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero