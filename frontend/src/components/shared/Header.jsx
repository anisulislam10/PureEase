import React, { useContext } from 'react';
import { Origami, ShoppingCart, User2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div className='bg-gradient-to-r from-green-600 to-yellow-500 grid grid-flow-rows grid-cols-3'>
        <div>
          <Origami className='mt-[5px] ml-[50px]' />
          <h2 className='bg-white ml-[50px] mr-[250px] text-[20px] font-semibold text-center mt-[-25px] pl-[10px] rounded-md shadow-md'>PureEase</h2>
          <p className='ml-11 mr-[250px] text-[10px] font-semibold text-white text-center'>Where Purity Meets Ease</p>
        </div>
        <ul className='grid grid-flow-col gap-0 mr-[270px] ml-[-150px] items-center'>
          <li className='text-white font-bold hover:bg-yellow-500 hover:rounded-xl hover:text-green-100 cursor-pointer'><Link to={"/"}>Home</Link></li>
          <li className='text-white font-bold hover:bg-yellow-500 hover:rounded-xl hover:text-green-100 cursor-pointer'><Link to={"/products"}>Products</Link></li>
          <li className='text-white font-bold hover:bg-yellow-500 hover:rounded-xl hover:text-green-100 cursor-pointer'><Link to={"/contact"}>Contact</Link></li>
        </ul>
        <div className='flex items-center justify-end mt-2 pr-[20px]'>
          <button className='flex items-center bg-white rounded-sm p-[5px] ml-12'>
            <Link to={"/mycart"} className="flex items-center">
              <ShoppingCart className="mr-1" /> {/* Add margin to the right for spacing */}
              <span className='text-green-500'>({cartItems.length})</span> {/* Display number of items */}
            </Link>
          </button>
          <button className='bg-white rounded-sm p-[5px] ml-[10px]'>
            <User2Icon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
