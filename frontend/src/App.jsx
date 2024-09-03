import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import CardList from './components/Cart';

// Define your routes using createBrowserRouter
const appRouter = createBrowserRouter([
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
    element: <CardList />
  },
]);

function App() {
  return (
    <div>
      {/* Provide the router to your app */}
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
