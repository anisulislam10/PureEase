import React from 'react';
// import './ProductCard.css'; // Import CSS for styling (optional)

const FeaturedProductCard = ({ imageSrc, description, price, altText }) => {
  return (
    <div className=' mt-4 mb-4 items-center shadow-xl'> 
          
      <img src={imageSrc} alt={altText || 'Product Image'} className="mx-10 mt-9 rounded-lg" style={{ width: '70%', height: '70%' }}   />
      <div className='bg-green-900 text-end gap-8 ml-[50px] mr-[100px] mt-[5px] '>
        {/* <p className="product-description ml-[-100px]">{description}</p>
        <p className="product-price ">${price}</p> */}
        </div>
 
    </div>
    
  );
};

export default FeaturedProductCard;
