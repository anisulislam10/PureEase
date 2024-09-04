import React from 'react'
import TissueImage from './../assets/3.jpg'
import { Search } from 'lucide-react'


function HeroSection() {
  return (
    <div className='bg-gradient-to-r from-blue-600 to-yellow-300 m-[50px] rounded-md shadow-lg  '>
      <div className=' grid-flow-cols'>
        <h1 className='text-5xl font-bold pt-[20px] px-5 text-white'>BUY Tissue Papers.</h1>
        <p className='px-[25px] py-[10px] text-white'>Where Purity Meets Ease</p>

         <div className='grid grid-flow-cols grid-cols-2'>
        <input

          type='text'

          placeholder='Search Products here...'

          className='mx-[25px] w-[400px] rounded-lg px-3 border shadow-2xl max-w-[300px] max-h-[30px] py-4 mt-10'

        /> <button className=''> <Search className='ml-[-330px] my-[45px] bg-blue-500 text-white rounded-md border border-black' /></button>

        <img src={TissueImage} alt="" width='40%' className='rounded-3xl ml-[800px] mt-[-150px] pb-5' />

      </div>
      
      
      </div>

    </div>
  )
}

export default HeroSection