// src/components/Confirmation.jsx
import React from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';

const Confirmation = () => {
  const paymentMethod = localStorage.getItem('paymentMethod'); // Retrieve payment method from localStorage

  return (
    <><div>
          <Header />
      </div>
      <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-6 text-center">Thank You for Shopping!</h1>
              <div className="bg-gray-100 border border-gray-300 p-4 rounded-md text-center">
                  <h2 className="text-lg font-semibold mb-4">Order Placed Successfully</h2>
                  <p>Your order has been placed successfully.</p>
                  <p>Payment Method: {paymentMethod}</p>
              </div>
          </div>
          <Footer/>
          
          </>
  );
};

export default Confirmation;
