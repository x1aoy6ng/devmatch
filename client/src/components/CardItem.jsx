import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ src, text, label, path }) {
  return (
    <Link
      to={path}
      className='block w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'
    >
      <figure className='relative w-full pb-[67%] overflow-hidden'>
        <img
          className='absolute inset-0 w-full h-full object-cover'
          alt='Destination Image'
          src={src}
        />
        <div className='absolute bottom-0 left-0 bg-blue-500 text-white px-3 py-1 text-xs font-bold tracking-wider'>
          {label}
        </div>
      </figure>
      <div className='p-4'>
        <h5 className='text-gray-900 text-lg font-semibold'>{text}</h5>
      </div>
    </Link>
  );
}

export default CardItem;
