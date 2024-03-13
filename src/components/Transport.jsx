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
    <div className="text-white h-[120vh] mx-auto text-center flex flex-col align-center bg-[#FF7D3C]">
      <div className="py-[5%] px-[5%] w-screen text-left">
        <h1 className="font-bold py-5 text-4xl">Transporte/translado</h1>
        <p className="text-[#212121] text-1xl">O <strong>serviço perfeito</strong> para quem precisa de <strong>rotas planejadas</strong>, seja com um ou mais pontos.</p>
        <p className="text-[#212121] text-1xl">Você decide aonde ir, e a Free Turismo te ajuda nisso!</p>
      </div>
      <Carousel className="w-[100%] my-10"
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
      >
        <img className='object-contain h-[100%] max-w-[80%] rounded-md mx-auto' src={BussO} alt="/" />
        <img className='object-contain h-[80%]  max-w-[80%] rounded-lg mx-auto' src={Buss} alt="/" />
        <img className='object-contain h-[100%] max-w-[80%] rounded-md mx-auto' src={vanO} alt="/" />
        <img className='object-contain h-[100%] max-w-[80%] rounded-md mx-auto' src={van} alt="/" />
      </Carousel>

      <div className="infos mt-[7%]">
        <h1 className="text-2xl font-bold">Possui dúvidas sobre nossos serviços?</h1>
        <a href="https://wa.me/+558899099358"><button className='bg-[#212121] text-xl text-white w-[300px] rounded-md font-medium my-6 mx-auto py-3 '>
         Entre em contato conosco</button> </a>
      </div>

    </div>
  )
}
export default Transport;