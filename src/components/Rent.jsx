import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Buss from '../assets/presImg.png'
import First from '../assets/img1.jpeg'
import Second from '../assets/img2.jpeg'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 3 // optional, default to 1.
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

const Rent = () => {
  return (
    <div className="text-white h-[120vh] mx-auto text-center flex flex-col align-center bg-[#FF7D3C]">
      <h3 className=" py-20 font-bold text-5xl">Nossos Serviços</h3>
      <div className="px-[5%] w-screen text-left">
        <h1 className="font-bold py-5 text-4xl">Aluguel de veículos</h1>
        <p className="text-[#212121] text-1xl">Temos uma <b>frota variada</b> à sua disposição para todas as necessidades e</p>
        <p className="text-[#212121] text-1xl"><b>motoristas capacitados</b>, oferecendo <b>o melhor serviço para você.</b></p>
        <p className="text-[#212121] text-1xl"> Alguns dos nossos veículos disponíveis são:</p>
      </div>

      <Carousel className="w-[100%]"
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
      // itemClass="carousel-item-padding-40-px"
      >
        <img className='h-[80%] max-w-[80%] rounded-md mx-auto' src={Buss} alt="/" />
        <img className='h-[80%] max-w-[80%] rounded-md mx-auto' src={First} alt="/" />
        <img className='h-[80%] max-w-[80%] rounded-md mx-auto' src={Second} alt="/" />
        <img className='h-[80%] max-w-[80%] rounded-md mx-auto' src={Buss} alt="/" />
      </Carousel>
    </div>
  )
}
export default Rent;