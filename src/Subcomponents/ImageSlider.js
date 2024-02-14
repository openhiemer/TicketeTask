import React, { useState } from 'react';
import { data } from '../data';
import Back from '../Assets/backward.png'
import Next from '../Assets/Forward.png'

const ImageSlider = () => {
  const [url, setUrl] = useState(0);

  const handleNext = () => {
    setUrl((prevIndex) => (prevIndex === data.ImageSlider.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setUrl((prevIndex) => (prevIndex === 0 ? data.ImageSlider.length - 1 : prevIndex - 1));
  };

  return (
    <div className='ImageSlider'>
      <img src={data.ImageSlider[url]} alt="imageurl" />
      <div className="ButtonDiv">
        <img src={Back} alt="BackButton" onClick={handlePrev} />
        <img src={Next} alt="NextButton" onClick={handleNext} />
      </div>
    </div>
  );
};

export default ImageSlider;
