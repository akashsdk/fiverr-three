import React, { useState, useEffect } from 'react';
import './Home.css';

import box1Img1 from '../Img/delivery-man.jpeg';
import box1Img2 from '../Img/delivery-man2.avif';
import box1Img3 from '../Img/delivery-man3.jpeg';
import box1Img4 from '../Img/delivery-man4.webp';
import box1Img5 from '../Img/delivery-man5.jpeg';

export default function Home() {
  // Box-1
  const images = [box1Img1, box1Img2, box1Img3, box1Img4, box1Img5];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='home-body'>
      {/* Box-1 */}
      <div className='homeBox1'>
        <div className='homeBox1-left'>
          <img className='homeBox1-left-img' src={images[activeIndex]} alt='' />
          <div className='homeBox1-left-Div'>
            {images.map((image, index) => (
              <button
                key={index}
                className={`homeBox1-left-button ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleButtonClick(index)}
              />
            ))}
          </div>
        </div>
        <div className='homeBox1-right'>Right side</div>
      </div>
    </div>
  );
}
