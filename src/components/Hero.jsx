    import React from 'react';
    import Buss from '../assets/presImg.png'
    const Hero = () => {
    return (
        <div className='text-[#212121] pt-8 '>
        <div className='max-w-[800px] mt-[] w-full h-[110vh] mx-auto text-center flex flex-col justify-center align-center'>
            <h2 className='mb-[30px] md:text-6xl sm:text=3xl text-5xl font-bold md:py-6'>
            Vai uma carona?
            </h2>

            <p className='md:text-lg text-2xl'>Somos a <b>Free Turismo</b>, uma empresa especializada em transporte.</p>
            <p className='md:text-lg text-2xl'><b>Você escolhe</b> o serviço, nós <b>garantimos a qualidade.</b></p>
            <img className='h-[50%] mx-auto mt-[0.5rem] mb-[2rem] ' src={Buss} alt="/"/>

            <button className='bg-[#212121] text-xl text-white w-[300px] rounded-md font-medium my-6 mx-auto py-3 '>Conheça nossos serviços</button>
        </div>
        </div>
    );
    };

    export default Hero;