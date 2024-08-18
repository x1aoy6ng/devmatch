import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./Navbar";
import bannerImg from "/src/assets/img/cinema.jpg";

function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-full">
      <img 
        src={bannerImg} 
        alt="Banner" 
        className="absolute inset-0 w-full h-full object-cover z-[-1]" 
        data-aos="fade-in"
      />
      
      <h1 
        className="text-white text-6xl md:text-7xl lg:text-8xl mb-4 font-bold" 
        data-aos="fade-up"
      >
        SMTG BOOKING
      </h1>
      
      <p 
        className="text-white text-lg md:text-2xl mt-3 font-semibold" 
        data-aos="fade-up" 
        data-aos-delay="200"
      >
        Experience seamless booking for exhibitions, events, and more with our intuitive booking system. 
      </p>
      
      <div className="flex flex-col md:flex-row mt-8 space-y-4 md:space-y-0 md:space-x-4">
        <a 
          href="/search" 
          target="_blank" 
          className="text-white font-bold py-3 px-8 border border-white rounded-full hover:bg-white hover:text-black transition duration-300" 
          data-aos="zoom-in" 
          data-aos-delay="400"
        >
          GET STARTED
        </a>
        <button 
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-500 transition duration-300 flex items-center justify-center" 
          data-aos="zoom-in" 
          data-aos-delay="600"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
}

export default HeroSection;