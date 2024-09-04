import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import CartList from './components/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';

// Layout component to include Header and Footer in every page
const Layout = () => (
  <>
    {/* <Header /> */}
    <Outlet /> {/* This will render the current route's element */}
    {/* <Footer /> */}
  </>
);

// Define your routes using createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout for all routes
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/mycart',
        element: <CartList />
      },
      {
       path:"/mycart/checkout",
      element:<Checkout />},

      { path:"/mycart/confirmation", 
      element:<Confirmation />} 
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      {/* Provide the router to your app */}
      <RouterProvider router={appRouter} />
    </CartProvider>
  );
}

export default App;
