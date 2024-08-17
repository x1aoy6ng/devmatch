import React from 'react';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='py-16 bg-white'>
      <h1 className='text-4xl font-bold text-center mb-14 relative group'>
        Explore Our Top Picks
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] h-1 w-40 bg-blue-500 rounded-full transition-all duration-300 ease-in-out group-hover:w-64"></span>
      </h1>
      <div className='max-w-screen-lg mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <CardItem
            src='/src/assets/img/kuala-lumpur.jpg'
            text='Kuala Lumpur, Malaysia'
            label='Best seller'
          />
          <CardItem
            src='/src/assets/img/melaka.jpg'
            text='Melaka, Malaysia'
            label='Featured'
            path='/'
          />
          <CardItem
            src='/src/assets/img/kota-kinabalu.jpg'
            text='Kota Kinabalu, Malaysia'
            label='Exclusive'
            path='/'
          />
          <CardItem
            src='/src/assets/img/genting-highlands.jpg'
            text='Genting Highlands, Malaysia'
            label='Popular'
            path='/'
          />
          <CardItem
            src='/src/assets/img/johor-bahru.jpg'
            text='Johor Bahru, Malaysia'
            label='Staff Favorite'
            path='/'
          />
          <CardItem
            src='/src/assets/img/ipoh.jpg'
            text='Ipoh, Malaysia'
            label='New Arrival'
            path='/'
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
