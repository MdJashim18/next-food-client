import React from "react";
// import b1 from '../../public/images/b4.png'
// import b2 from '../../public/images/b5.png'
// import b3 from '../../public/images/b6.png'
// import b4 from '../../public/images/b7.png'

const Hero = () => {
  return (
    <div className="py-8">
      <div className="carousel w-full rounded-2xl overflow-hidden shadow-lg">
      
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="/images/b4.png"
            className="w-full h-96 object-cover rounded-2xl"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide4" className="btn btn-circle bg-white/80 hover:bg-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-white/80 hover:bg-white">
              ❯
            </a>
          </div>
        </div>

      
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/images/b5.png"
            className="w-full h-96 object-cover rounded-2xl"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide1" className="btn btn-circle bg-white/80 hover:bg-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-white/80 hover:bg-white">
              ❯
            </a>
          </div>
        </div>

       
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/images/b6.png"
            className="w-full h-96 object-cover rounded-2xl"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide2" className="btn btn-circle bg-white/80 hover:bg-white">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-white/80 hover:bg-white">
              ❯
            </a>
          </div>
        </div>

       
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/images/b7.png"
            className="w-full h-96 object-cover rounded-2xl"
            alt="Slide 4"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide3" className="btn btn-circle bg-white/80 hover:bg-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-white/80 hover:bg-white">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
