import React from 'react'
// import officialLogo from '../../assets/logo/logo.png'
import { Origami, ShoppingCart,User2Icon} from 'lucide-react';



function Header() {
  return (
    <div>
        <div className='bg-gradient-to-r from-green-600 to-yellow-500 grid grid-flow-rows grid-cols-3'>
            <div className=''> 
                <Origami className='mt-[5px] ml-[50px]'/>
                <h2 className='bg-white ml-[50px] mr-[250px] text-[20px] font-semibold text-center mt-[-25px] pl-[10px] rounded-md shadow-md'>PureEase</h2>
                <p className=' ml-11 mr-[250px] text-[10px] font-semibold text-white text-center'>Where Purity Meets Ease</p>
            </div>
            {/* <img src={officialLogo} alt="" width="10%"  className='lg:mt-[-40px] lg:ml-[10px]'/> */}
        
        
            <ul className=' grid grid-flow-col gap-0 mr-[270px] ml-[-150px] items-center '>
                <li className='text-white font-bold hover:bg-yellow-500 hover:rounded-xl hover:text-green-100 hover: cursor-pointer'>Home</li>
                <li className='text-white font-bold hover:bg-yellow-500 hover:rounded-xl hover:text-green-100 hover: cursor-pointer'>Products</li>
                <li className='text-white font-bold hover:bg-yellow-500 hover:rounded-xl hover:text-green-100 hover: cursor-pointer'>Contact</li>
            </ul>
            <div className='items-center text-center mt-2 pr-[10px]'>
            <button className='bg-white rounded-sm p-[5px]'><ShoppingCart className=''/></button> 
            <button className='bg-white rounded-sm p-[5px] ml-[10px] '><User2Icon className=''/></button> 
            
          

            </div>
          
            </div>
    </div>
  )
}

export default Header