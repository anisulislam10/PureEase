import React from 'react'

function AboutUs() {
  return (
    <><div className='grid grid-cols-3 mt-11 bg-green-500 text-white mb-6'>
      <div>
        <h1 className='mx-8 font-bold text-white bg-green-600 mr-[100px] rounded-lg mt-[-10px] text-[25px]'>who we are</h1>
        <p className='mx-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eaque possimus exc</p>
      </div>
      <div>
        <h1 className='mx-8 font-bold text-white bg-green-600 mr-[100px] rounded-lg mt-[-10px] text-[25px]'>What we do</h1>
        <p> 1- Lorem ipsum dolor sit amet <br /> 2- consectetur adipisicing elit. <br /> 3- Eos, eaque possimus exc</p>

      </div>

      <div className=''>
        <h1 className='mx-8 font-bold text-white bg-green-600 mr-[100px] rounded-lg mt-[-10px] text-[25px]'>6000<sup className='bg-yellow-500 text-white text-[20px] rounded-3xl '>+</sup></h1>
        <p>Reviews on Daraz,Amazon, Alibaba</p>

      </div>
      <div className=''>
        <h1 className='mx-8 font-bold text-white bg-green-600 mr-[100px] rounded-lg mt-[-10px] text-[25px]'>Fast and Free Shipping</h1>
        <p className='pl-[20px]'>4 day or less delivery time, free shipping <br /> and and expedited delivery options.</p>

      </div>
      <div className=''>
        <h1 className='mx-8 font-bold text-white bg-green-600 mr-[100px] rounded-lg mt-[10px] text-[25px]'>24/7 Support</h1>
        <p className='pl-[20px]'>answer to any business related inquiry <br /> 24/7 and in real time</p>

      </div>

      <div className=''>
        <h1 className='mx-8 font-bold text-white bg-green-600 mr-[100px] rounded-lg mt-[10px] text-[25px]'>Large Assortment</h1>
        <p className='pl-[20px]'>se offer many different type of products <br /> with fewer variations in each category</p>
      </div>

    </div>
        <div>
  <h1 className='bg-white items-center text-center mb-4 mx-[100px] my-auto text-black'>customer rating: ⭐⭐⭐⭐</h1>
  
</div>
     </>
  )
}

export default AboutUs