import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Buss from '../assets/img4.jpeg';
import First from '../assets/img1.jpeg'
import Second from '../assets/img2.jpeg'

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
const Recept = () => {
  return (
    <div className="text-white md:h-[90vh] h-[70vh] mx-auto text-center flex flex-col align-center bg-[#FF7D3C]">
      <div className="px-[5%] w-screen text-right">
        <h1 className="font-bold py-5 text-4xl">Receptivo em aeroportos</h1>
        <p className="text-[#212121] text-1xl">Que tal garantir <b>conforto</b> e <b>segurança</b> após as suas viagens?</p>
        <p className="text-[#212121] text-1xl">A Free Turismo disponibiliza um serviço de recepção em aeroportos de</p>
        <p className="text-[#212121] text-1xl"> forma exclusiva e <b>de acordo com a sua necessidade.</b></p>
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
        customTransition="all 0.5"
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

      </Carousel>
    </div>
  )
}
export default Recept;