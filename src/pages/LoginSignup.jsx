import React from 'react'

const LoginSignup = () => {
  return (
    <div className='loginsignup my-container bg-[#fce3fe]'>
      <div className="loginsignup-container bg-white m-auto px-[40px] py-[60px]">
        <h1 className="py-5 text-4xl text-center">Sign Up</h1>
        <div className="loginsignup-fields flex flex-col gap-7 mt-7">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password' />
        </div>
        <button className="w-[580px] h-[72px] bg-[#ff4141] text-white mt-8 border-none cursor-pointer text-2xl font-medium text-center">Continue</button>
        <p className="loginsignup-login my-5 text-[#5c5c5] text-lg font-medium">Already have an account? <span className='text-[#ff4141] font-semibold'>Login here</span></p>
        <div className='loginsignup-agree flex items-center mt-6 gap-5 text-[#5c5c5c] text-lg font-medium'>
          <input type="checkbox" name="" id="" />
          <p>By contnuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup