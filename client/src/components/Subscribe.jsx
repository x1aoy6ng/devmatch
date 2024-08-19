import React, { useState } from 'react';

function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here (e.g., send email to the server)
    console.log('Subscribed with email:', email);
  };

  return (
    <div className='bg-stone-800 py-16 px-4'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-start justify-between'>
        {/* Left Side */}
        <div className='text-center md:text-left mb-8 md:mb-0 md:w-1/2 md:pr-8'>
          <h1 className='text-4xl font-bold text-white mb-4'>
            Join the Newsletter
          </h1>
          <p className='text-lg text-gray-300'>
            Get weekly promotions straight to your inbox
          </p>
        </div>

        {/* Right Side */}
        <div className='flex flex-col md:flex-row items-start md:w-1/2 md:pl-8'>
          <form onSubmit={handleSubmit} className='flex flex-col md:flex-row items-center'>
            <input
              type='email'
              placeholder='Enter your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='py-3 px-4 mb-4 md:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-80'
            />
            <button
              type='submit'
              className='py-3 px-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 md:ml-4 font-bold'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
