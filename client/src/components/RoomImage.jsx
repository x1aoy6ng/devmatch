import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

const images = [
    "/src/assets/img/jujutsukaisen.jpg",
    "/src/assets/img/banner2.png",
    "/src/assets/img/banner3.png",
    "/src/assets/img/banner4.png",
    "/src/assets/img/banner5.webp"
];

const RoomImage = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full flex justify-center items-center mt-5">
            <div className="relative rounded-2xl w-4/5 md:w-3/4 lg:w-1/2 h-96 overflow-hidden bg-white shadow-xl">
                <div className="relative w-full h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex-shrink-0"
                        >
                            <img
                                className="w-full h-full object-cover"
                                src={img}
                                alt={`Slide ${index}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows with Glass Effect */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 backdrop-blur-sm border border-gray-300 text-gray-800 p-2 rounded-full shadow-md hover:bg-white/70 flex items-center justify-center"
                >
                    <MdArrowBack size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 backdrop-blur-sm border border-gray-300 text-gray-800 p-2 rounded-full shadow-md hover:bg-white/70 flex items-center justify-center"
                >
                    <MdArrowForward size={24} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'} focus:outline-none`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomImage;
