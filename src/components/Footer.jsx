import React from 'react';

const Footer = () => {
  return (
    <div className='text-white bg-[#212121] mx-auto py-16 px-4 flex flex-col justify-center items-center'>
      <div className="hidden text-2xl font-semibold md:flex flex-row w-[50vw] justify-around">
        <p>Serviços</p>
        <p>Contato</p>
      </div>
      <div className=" flex flex-col py-20">
        <p className="text-2xl font-bold  flex flex-row items-center justify-center"><span class="material-symbols-outlined">location_on</span> Local</p>
        <p className='text-2xl font-light'> Rua Odete Matos Alencar, 2451, Bairro Lagoa Seca, Juazeiro do Norte - CE</p>
      </div>
      <p className='text-2xl'>Free Turismo © - Todos os direitos reservados</p>
    </div>
  );
};

export default Footer;