import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import Header from './shared/Header';
import Footer from './shared/Footer';

const MyCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  const handleQuantityChange = (index, delta) => {
    updateQuantity(index, delta);
  };

  const handleSelectItem = (itemId) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(itemId)
        ? prevSelected.filter((id) => id !== itemId)
        : [...prevSelected, itemId]
    );
  };

  const handleCheckout = () => {
    // Calculate total price and store in localStorage
    const totalPrice = selectedItemsDetails.reduce((total, item) => total + item.price * item.quantity, 0);
    localStorage.setItem('totalPrice', totalPrice);
    navigate('/mycart/checkout'); // Navigate to checkout page
  };

  const selectedItemsDetails = cartItems.filter(item => selectedItems.includes(item.id));
  const totalItems = selectedItemsDetails.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = selectedItemsDetails.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <><><div>
      <Header />
    </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">My Cart</h1>
        <div className="flex">
          {/* Cart Items */}
          <div className="w-3/4">
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={item.id} className="border p-4 mb-4 flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                      className="mr-4" />
                    <div className="flex items-center flex-grow">
                      <img
                        src={item.imageSrc}
                        alt={item.description}
                        className="w-24 h-24 object-cover mr-4" />
                      <div className="flex-grow">
                        <h2 className="text-xl font-semibold">{item.description}</h2>
                        <p className="text-gray-700">Price: PKR {item.price}</p>
                        <div className="flex items-center mt-2">
                          <button
                            className="bg-red-500 text-white px-3 py-1 rounded-md mr-2"
                            onClick={() => handleRemoveFromCart(index)}
                          >
                            Delete
                          </button>
                          <div className="flex items-center">
                            <button
                              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l-md"
                              onClick={() => handleQuantityChange(index, -1)}
                              disabled={item.quantity <= 1} // Disable if quantity is 1
                            >
                              -
                            </button>
                            <span className="px-3">{item.quantity}</span>
                            <button
                              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r-md"
                              onClick={() => handleQuantityChange(index, 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-bold">Total: PKR {item.price * item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>

          {/* Summary Order */}
          <div className="w-1/4 ml-4">
            <div className="bg-gray-100 border border-gray-300 p-4 rounded-md">
              <h2 className="text-lg font-semibold mb-4">Summary Order</h2>
              <p>Total Items: {totalItems}</p>
              <p>Total Price: PKR {totalPrice.toFixed(2)}</p>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-4 w-full"
                onClick={handleCheckout} // Use handleCheckout here
                disabled={totalItems === 0} // Disable button if no items selected
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>

    </><div>
        <Footer />
      </div></>
  );
};

export default MyCart;
