// src/components/ProductCard.jsx

import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ProductCard = ({ imageSrc, description, price, rating, altText, onAddToCart }) => {
  // Function to render star ratings
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageSrc}
        alt={altText || 'Product Image'}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{description}</h2>
        <div className="flex items-center mb-2">
          {renderStars()}
          <span className="ml-2 text-gray-600">({rating})</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">PKR{price}</span>
          <button
            onClick={onAddToCart}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
