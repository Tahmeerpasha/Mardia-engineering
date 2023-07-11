import React from 'react';

const Header = () => {
    return (
        <div className="relative w-full">
            <div className="w-full h-1/2 md:h-full bg-white flex justify-center items-center">
                <img
                    className="h-full"
                    src="https://static.wixstatic.com/media/1a8dae_ceea70d8f1404e4485e2e0ab9eb56c17~mv2.png/v1/fill/w_81,h_93,al_c,lg_1,q_85,enc_auto/me_logo.png"
                    alt="Logo"
                />
            </div>

            <div className="absolute inset-0 flex flex-col  sm:items-center justify-center text-white">
                <h1 className="text-4xl md:text-5xl sm:text-2xl sm:mt-40 text-center">
                    MARDIA ENGINEERING CANADA
                </h1>
                <p className="text-xl md:text-2xl sm:text-base font-light text-center">
                    Our Tailor-made spare parts add life to your machines
                </p>
            </div>

            <img
                className="w-full h-auto"
                src="https://static.wixstatic.com/media/1a8dae_8105ef8deedd4fb796dd2015fb7e3bf4~mv2.jpg/v1/fill/w_1839,h_625,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/1a8dae_8105ef8deedd4fb796dd2015fb7e3bf4~mv2.jpg"
                alt="Background"
            />
        </div>
    );
};

export default Header;
