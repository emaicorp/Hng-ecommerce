import React, { useState, useRef } from 'react';
// import './ProgressBar.css';

const ProgressBar = () => {
  const initialProgress = 10; // Starting progress at 10%
  const initialPrice = Math.round((initialProgress / 100) * 20000);

  const [progress, setProgress] = useState(initialProgress);
  const [price, setPrice] = useState(initialPrice);
  const progressBarRef = useRef(null);

  const handleMouseMove = (event) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const newWidth = event.clientX - rect.left;
    const newProgress = (newWidth / rect.width) * 100;

    if (newProgress >= initialProgress && newProgress <= 100) {
      setProgress(newProgress);
      const newPrice = Math.round((newProgress / 100) * 20000);
      setPrice(newPrice);
    }
  };

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="progress-bar-container">
        <h6><s>N</s>2000 - <s>N</s>{price}</h6>
      <div className="progress-bar" ref={progressBarRef} onMouseDown={handleMouseDown}>
        <div className="progress" style={{ width: `${progress}%` }}></div>
        <div className="thumb" style={{ left: `calc(${progress}% - 10px)` }}></div>
      </div>
     
    </div>
  );
};

export default ProgressBar;
