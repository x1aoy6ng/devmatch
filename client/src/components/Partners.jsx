import React from 'react';

import logo1 from '/src/assets/img/ticket2u.webp';
import logo2 from '/src/assets/img/bookmyshow.png';
import logo3 from '/src/assets/img/ruma.jpg';
import logo4 from '/src/assets/img/jumpshop.png';
import logo5 from '/src/assets/img/sunway.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

function Partners() {
  return (
    <div className='py-16 bg-gray-100'>
      <h2 className='text-4xl font-bold text-center mb-14 relative group'>
        Our Partners
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-15px] h-1 w-20 bg-blue-500 rounded-full transition-all duration-300 ease-in-out group-hover:w-32"></span>
      </h2>
      <div className='max-w-screen-lg mx-auto px-4'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-5'>
          {logos.map((logo, index) => (
            <div key={index} className='flex justify-center'>
              <img
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className='w-36 h-36 object-cover rounded-full transform transition-transform duration-300 hover:scale-110'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
