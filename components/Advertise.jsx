import React from 'react';

const Advertise = () => {
    return (
        <div>
            <div className="flex justify-center m-10 pl-10 pr-10">
                <div className="w-[40%] p-20 pt-36">
                    <h1 className="text-4xl md:text-5xl text-gray-800 font-light text-center md:text-left">
                        We work with leading tire manufacturers across the globe
                    </h1>
                </div>
                <div className="p-10">
                    <div className="flex m-10">
                        <div className="w-fit m-2">
                            <img
                                className="p-5 m-5 h-[auto] w-[auto]"
                                src="https://static.wixstatic.com/media/1a8dae_b278a4650ba14537b50d3b51eaa526e5~mv2.png/v1/fill/w_246,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/goodyear-logo-blue-2145C-2021.png"
                                alt="good-year"
                            />
                        </div>
                        <div className="w-fit m-2">
                            <img
                                className="p-5 m-5 h-[auto] w-[auto]"
                                src="https://static.wixstatic.com/media/1a8dae_96d2b647d7a24321b4f899e4ed4d469b~mv2.png/v1/fill/w_168,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Apollo_Tyres_logo_svg.png"
                                alt="apollo"
                            />
                        </div>
                        <div className="w-fit m-2 -mt-3">
                            <img
                                className="p-5 m-5 h-[auto] w-[auto]"
                                src="https://static.wixstatic.com/media/1a8dae_01af8cdff6214e5e845baf6787f65958~mv2.jpg/v1/crop/x_89,y_0,w_1441,h_841/fill/w_176,h_103,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Michelin_Corporate_Logo___color.jpg"
                                alt="michelin"
                            />
                        </div>
                    </div>
                    <div className="flex m-10">
                        <div className="w-fit m-2">
                            <img
                                className="p-5 m-5 h-[auto] w-[auto]"
                                src="https://static.wixstatic.com/media/1a8dae_5aafff71b9e3416ebd96dc8d97615fdd~mv2.png/v1/fill/w_225,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/BridgestoneMark-Color.png"
                                alt="bridgestone"
                            />
                        </div>
                        <div className="w-fit m-2 -mt-10">
                            <img
                                className="p-5 m-5 h-[auto] w-[auto]"
                                src="https://static.wixstatic.com/media/1a8dae_dd60f416940e48b59a73b7442d70762b~mv2.jpg/v1/crop/x_11,y_0,w_855,h_650/fill/w_188,h_143,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/yokohama-tires4177.jpg"
                                alt="yokohama"
                            />
                        </div>
                        <div className="w-fit m-2 -mt-9">
                            <img
                                className="p-5 m-5 h-[auto] w-[auto]"
                                src="https://static.wixstatic.com/media/1a8dae_46d15adb83c74dbb983011ad13bd6d39~mv2.png/v1/fill/w_174,h_103,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MRF-Tyre-Logo-PNG-1024x606.png"
                                alt="mrf"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-4xl md:text-5xl m-8">Why Work with us in Canada?</h1>
        </div>
    );
};

export default Advertise;
