import React, { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        // Add image URLs or paths here
        '/assets/image1.jpg',
        '/assets/image2.jpg',
        '/assets/image3.jpg',
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide}>Previous</button>
            <img src={images[currentIndex]} alt="carousel slide" />
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default Carousel;