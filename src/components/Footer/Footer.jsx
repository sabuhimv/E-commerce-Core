import React from 'react'
import footer_logo from '../../assets/logo_big.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='my-container footer flex flex-col justify-center items-center gap-[50px]'>
        <div className="footer-logo flex items-center  gap-[20px]">
            <img src={footer_logo} alt="" />
            <p className='text-[#383838] text-[46px] font-bold'>Shopper</p>
        </div>
        <ul className="footer-links flex gap-[50px] text-[#252525] text-xl">
            <li className='cursor-pointer gap-[20px]'>Company</li>
            <li className='cursor-pointer gap-[20px]'>Products</li>
            <li className='cursor-pointer gap-[20px]'>Offices</li>
            <li className='cursor-pointer gap-[20px]'>About</li>
            <li className='cursor-pointer gap-[20px]'>Contact</li>
        </ul>
        <div className="footer-social-icon flex gap-[20px]">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright flex flex-col items-center gap-[30px] w-full mb-4 text-[#1a1a1a] text-xl">
            <hr  className='w-4/5 rounded-lg h-2'/>
            <p>Copyright @ 2024 - ALl Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer