import React from 'react'

const Hero = () => {
    return (
        <div className='pt-28 sm:pt-0'>
            <div className=" absolute flex flex-col  text-center mt-1 text-white">
                <h1 className="text-3xl mb-2 md:text-5xl  sm:text-2xl sm:p-10 lg:pl-96  sm:pt-40 ">
                    MARDIA ENGINEERING CANADA
                </h1>
                <p className="text-xl pl-4 pr-4 mt-0 md:text-2xl sm:text-base lg:pl-80 font-light ">
                    Our Tailor-made spare parts add life to your machines
                </p>
            </div>
            <img
                className="w-full sm:h-[500px] "
                src="https://static.wixstatic.com/media/1a8dae_8105ef8deedd4fb796dd2015fb7e3bf4~mv2.jpg/v1/fill/w_1839,h_625,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1a8dae_8105ef8deedd4fb796dd2015fb7e3bf4~mv2.jpg"
                alt="Background"
            />
        </div>
    )
}

export default Hero