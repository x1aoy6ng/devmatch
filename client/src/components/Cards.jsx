import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardItem from './CardItem';

function Cards() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });

    AOS.refresh();
  }, []);

  return (
    <div className='py-16 bg-white'>
      <h1
        className='text-4xl font-bold text-center mb-14 relative group'
        data-aos="fade-up"
      >
        Explore Our Top Picks
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] h-1 w-40 bg-blue-500 rounded-full transition-all duration-300 ease-in-out group-hover:w-64"></span>
      </h1>
      <div className='max-w-screen-lg mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <CardItem
            src='/src/assets/img/jujutsukaisen.jpg'
            text='Jujutsu Kaishen Exhibition'
            label='Best seller'
            path='/search'
            animation='fade-up'
          />
          <CardItem
            src='/src/assets/img/fullmetal.jpg'
            text='Fullmetal Alchemist Exhibition'
            label='Staff Favorite'
            path='/'
            animation='fade-up'
          />
          <CardItem
            src='/src/assets/img/onepiece.jpg'
            text='One Piece Asia Tour'
            label='Popular'
            path='/'
            animation='fade-up'
          />
          <CardItem
            src='/src/assets/img/naruto.webp'
            text='Naruto Pop Up Store'
            label='Featured'
            path='/'
            animation='fade-up'
          />
          <CardItem
            src='/src/assets/img/attack.jpeg'
            text='Attack On Titan: Final Exhibition'
            label='Popular'
            path='/'
            animation='fade-up'
          />
          <CardItem
            src='/src/assets/img/chainsawman.jpg'
            text='Chainsaw Man Exhibition'
            label='New Arrival'
            path='/'
            animation='fade-up'
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;