import React from 'react'

const Cards = () => {
    return (
        <div>
            <h1 className="text-center text-4xl md:text-5xl m-8">Why Work with us in Canada?</h1>

            <div className="relative">
                <img
                    className="w-[150vh] h-[150vh] sm:h-[40vh] sm:w-full md:w-full md:h-[40vh] lg:h-[70vh] -z-10"
                    src="https://static.wixstatic.com/media/4b2a574b8a8e4c9a85009f628f3a2cf6.jpg/v1/fill/w_1839,h_741,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4b2a574b8a8e4c9a85009f628f3a2cf6.jpg"
                    alt="Background"
                />
                <div className="absolute inset-1  items-center justify-center">
                    <div className="flex flex-wrap sm:flex-nowrap lg:flex-wrap sm:pt-10 justify-center sm:justify-start lg:justify-center">
                        <div className="bg-white flex flex-col items-center p-6 sm:p-2 lg:p-10 mx-4 my-4 relative w-80">
                            <div className="bg-gray-300 p-10 rounded-full w-16 h-16 flex items-center justify-center absolute sm:-top-8">
                                <h2 className="text-black text-3xl font-bold">1</h2>
                            </div>
                            <h1 className="text-gray-600 text-lg font-bold pt-24 sm:pt-10 mb-2">Superior Quality</h1>
                            <p className="text-gray-600 p-2 font-light text-center">
                                ISO 9001: 2008 certified company. Speaks of the quality we deliver. We use cutting-edge 3D scanners to scan
                                your parts on-site and deliver accuracy within 30 microns for parts you order from us.
                            </p>
                        </div>
                        <div className="bg-white flex flex-col items-center sm:p-2 p-6 mx-4 my-4 relative w-80">
                            <div className="bg-gray-300 p-10 rounded-full w-16 h-16 flex items-center justify-center absolute sm:-top-8">
                                <h2 className="text-black text-3xl font-bold">2</h2>
                            </div>
                            <h1 className="text-gray-600 text-lg font-bold mb-2 pt-24 sm:pt-10">Cost & Time Savings</h1>
                            <p className="text-gray-600 p-2 font-light text-center">
                                We can reduce your cost of purchase by up to 40% with substantially faster delivery times than other suppliers
                                or OEMs operating in North America.
                            </p>
                        </div>
                        <div className="bg-white flex flex-col sm:p-2 items-center p-6 mx-4 my-4 relative w-80">
                            <div className="bg-gray-300 p-10 rounded-full w-16 h-16 flex items-center justify-center absolute sm:-top-8">
                                <h2 className="text-black text-3xl font-bold">3</h2>
                            </div>
                            <h1 className="text-gray-600 text-lg font-bold mb-2 pt-24 sm:text-center sm:pt-10">One Stop Shop for Spares</h1>
                            <p className="text-gray-600 p-2 font-light text-center">
                                We supply {'>'}90% of the spares required in a tire manufacturing plant to over 100+ tire plants across the
                                world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards