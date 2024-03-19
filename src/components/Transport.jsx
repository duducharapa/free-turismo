import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Buss from '../assets/img3.jpeg';
import BussO from '../assets/img1.jpeg';
import van from '../assets/img5.jpeg';
import vanO from '../assets/img4.jpeg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Transport = () => {
  return (
    <div className="text-white md:h-[100vh] h-[110vh] mx-auto text-center flex flex-col align-center bg-[#FF7D3C]">
      <div className=" px-[5%] w-screen text-left">
        <div className="flex flex-row items-center font-bold py-5 md:text-4xl text-3xl">
          <i class="fa fa-bus icon-black" aria-hidden="true"></i>
          <h1 className="pl-4">
            Transporte/translado
          </h1>
        </div>
        <div className="py-[1%]">
          <p className="text-[#212121] text-1xl">
            O <strong>serviço perfeito</strong> para quem precisa de <strong>rotas planejadas</strong>, seja ela com<br></br>
          </p>
          <p className="text-[#212121] text-1xl">
          <strong>uma ou mais paradas.</strong>
          </p>
        </div>
      </div>

      <Carousel className="w-[100%]"
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        <img className='object-contain h-[100%] max-w-[80%] rounded-md mx-auto' src={BussO} alt="/" />
        <img className='object-contain h-[100%] max-w-[80%] rounded-md mx-auto' src={Buss} alt="/" />
        <img className='object-contain h-[100%] max-w-[80%] rounded-md mx-auto' src={vanO} alt="/" />
        <img className='object-contain h-[100%] max-w-[80%] rounded-md mx-auto' src={van} alt="/" />

      </Carousel>

      <div className="infos mt-[7%]">
        <h1 className="text-2xl font-bold">Possui dúvidas sobre nossos serviços?</h1>

        <button className='bg-[#212121]  rounded-md px-4 text-xl text-white w-[300px] font-medium my-6 mx-auto py-3 '>
          <a href="https://wa.me/+558899099358">Entre em contato conosco</a></button>
      </div>

    </div>
  )
}
export default Transport;