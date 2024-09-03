import React from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';

const ContactUs = () => {
  return (

    <><div> <Header /> </div>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-600 to-yellow-500 p-4 mt-5 mb-5">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>

        <div className="flex flex-col md:flex-row">
          {/* Contact Form */}
          <form className="flex-1 space-y-4 md:w-1/2 md:pr-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name" />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email" />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your message" />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Location Section */}
          <div className="flex-1 md:w-1/2 md:pl-4 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Locations</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-gray-200 p-2 rounded-lg">Islamabad</div>
              <div className="text-center bg-gray-200 p-2 rounded-lg">Karachi</div>
              <div className="text-center bg-gray-200 p-2 rounded-lg">Peshawar</div>
              <div className="text-center bg-gray-200 p-2 rounded-lg">Lahore</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default ContactUs;
