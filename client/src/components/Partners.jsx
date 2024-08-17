import React from 'react';

import logo1 from '/src/assets/img/oyo.png';
import logo2 from '/src/assets/img/ritz.jpg';
import logo3 from '/src/assets/img/ruma.jpg';
import logo4 from '/src/assets/img/genting-skyworlds-hotel.jpg';
import logo5 from '/src/assets/img/sunway.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

function Partners() {
  return (
    <div className='py-16 bg-gray-100'>
      <h2 className='text-4xl font-bold text-center mb-12'>Our Partners</h2>
      <div className='max-w-screen-lg mx-auto px-4 mb-5'>
        <div className='flex flex-wrap justify-center gap-8'>
          {logos.map((logo, index) => (
            <div key={index} className='flex-shrink-0 w-40 h-40 overflow-hidden rounded-full'>
              <img src={logo} alt={`Partner Logo ${index + 1}`} className='w-full h-full object-cover' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;