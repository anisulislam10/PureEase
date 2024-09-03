import React from 'react'
import FeaturedProductCard from './reuseable_images/FeaturedProductCard.jsx';
import products from './reuseable_images/FeaturedProductCard.js';
import { Link, useNavigate } from 'react-router-dom'
import Products from './Products.jsx';
// import ReusableImage from './reuseable_images/ReusableImage';

const FeaturedProducts = () => {
  return (
    <>
    <div>
<h1 className='text-[30px] mx-[30px] font-medium'>Featured Products</h1>
    </div>
    <div className='bg-gradient-to-r from-blue-500 to-yellow-400 '>
      <div className="grid grid-flow-cols grid-cols-3 gap-[100px] mx-5">
        {products.map((prodcut) => (
          <FeaturedProductCard
            key={prodcut.id}
            imageSrc={prodcut.imageSrc}
            description={prodcut.description}
            price={prodcut.price}
            altText={prodcut.altText} />
        ))}
      </div>
      <div className='text-center'>
        <button className='bg-blue-600 rounded-md shadow-md font-bold text-white w-[200px]'><Link to={"/products"}>Explore All Products</Link></button>
      </div>
    </div>
   </>

  );
};

export default FeaturedProducts