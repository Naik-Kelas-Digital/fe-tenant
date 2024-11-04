import React from 'react'

const PaymentHeader = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-[url('/images/hero.jpg')] bg-cover bg-center ">
      {/* Black overlayy */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      {/* content */}
      <div className="flex justify-center items-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10 ">
        <h1
          data-aos="fade-right"
          data-aos-delay="150"
          className="text-white text-center font-semibold text-3xl sm:text-5xl mt-4 "
        >
          Payment
        </h1>
      </div>
    </div>
  )
}

export default PaymentHeader