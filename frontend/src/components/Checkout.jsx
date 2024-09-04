// src/components/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './shared/Header';
import Footer from './shared/Footer';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();
  const totalPrice = localStorage.getItem('totalPrice'); // Retrieve totalPrice from localStorage

  const handlePayment = (method) => {
    setPaymentMethod(method);
    localStorage.setItem('paymentMethod', method); // Store payment method in localStorage
    navigate('/mycart/confirmation'); // Navigate to confirmation page
  };

  return (
    <><div>
          <Header />
      </div><div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
              <div className="bg-gray-100 border border-gray-300 p-4 rounded-md">
                  <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                  <p>Total Price: PKR {totalPrice}</p>
                  <h3 className="text-lg font-semibold mt-4">Payment Method</h3>
                  <button
                      className="bg-green-500 text-white px-4 py-2 rounded-md mt-2 w-full"
                      onClick={() => handlePayment('Cash on Delivery')}
                  >
                      Cash on Delivery
                  </button>
                  {/* Add more payment methods here if needed */}
              </div>
          </div>
          <div>
        <Footer />
      </div>
          </>
  );
};

export default Checkout;
