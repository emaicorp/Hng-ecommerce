import React from 'react';

const StarRating = ({ rating }) => {
    const totalStars = 5;
    const filledStars = rating;
    const emptyStars = totalStars - filledStars;

    const filledStarsArray = Array(filledStars).fill('★');
    const emptyStarsArray = Array(emptyStars).fill('★');

    return (
        <div>
            {filledStarsArray.map((star, index) => (
                <span key={index} style={{ color: 'green',height:'24px' ,width:'24px' }}>{star}</span>
            ))}
            {emptyStarsArray.map((star, index) => (
                <span key={index + filledStars} style={{ color: 'gray' ,height:'24px',width:'24px'}}>{star}</span>
            ))}
        </div>
    );
};

export default StarRating;
