import React, { useContext, useState } from 'react';
import ProductCard from './reuseable_images/ProductCard.jsx';
import products from '../components/reuseable_images/products.js';
import Header from './shared/Header.jsx';
import Footer from './shared/Footer.jsx';
import { CartContext } from '../context/CartContext';

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.description} added to cart!`);
    setTimeout(() => {
      setNotification('');
    }, 3000); // Notification disappears after 3 seconds
  };

  return (
    <>
      <div><Header /></div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
        
        {/* Notification */}
        {notification && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 text-center">
            {notification}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              description={product.description}
              price={Math.ceil(product.price)}
              rating={product.rating}
              altText={product.altText}
              onAddToCart={() => handleAddToCart(product)} // Call handleAddToCart function
            />
          ))}
        </div>
      </div>
      <div><Footer /></div>
    </>
  );
};

export default Products;
