// src/components/Products.jsx

import React from 'react';
import ProductCard from './reuseable_images/ProductCard.jsx';
import products from '../components/reuseable_images/products.js';
import Header from './shared/Header.jsx';
import Footer from './shared/Footer.jsx';

const Products = () => {
  // Handler for adding a product to the cart
  const handleAddToCart = (product) => {
    // For demonstration, we'll just log the product
    console.log(`Added to cart: ${product.description}`);
    // In a real application, you'd update the cart state or context here
  };

  return (
    <><div> <Header/> </div>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.imageSrc}
            description={product.description}
            price={product.price}
            rating={product.rating}
            altText={product.altText}
            onAddToCart={() => handleAddToCart(product)} />
        ))}
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default Products;
