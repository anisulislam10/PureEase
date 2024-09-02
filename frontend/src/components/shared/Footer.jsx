import React from 'react'
import { Facebook, Twitter, Instagram, Youtube, SubscriptIcon, X } from 'lucide-react'

function Footer() {
  return (
    <div className='grid grid-cols-4 bg-gradient-to-r from-green-600 to-yellow-500 gap-14 pl-9 text-white'>
        <div>
            <h1 className='text-white font-bold text-[20px] mt-4 text-center bg-green-500'>About company</h1>
            <p className='  mt-4 text-center'>kadjfljdflkjafdkljsldkf Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto fugiat dolor optio ducimus unde, vero laboriosam exercitationem repudiandae magni neque minima omnis ea sit. Eaque alias possimus error ullam soluta? </p>
        </div>
        <div className='gird grid-flow-row items-start'>
        <div className='text-black font-bold text-[20px] mt-4 text-start'> <h1  className='bg-green-500 mr-[150px] shadow-md'>Quick Links</h1></div> 
         <div className='  mt-4 text-start'>   <a href="">home</a></div>
         <div className='  mt-4 text-start'>  <a href="">our products</a></div> 
         <div className='  mt-4 text-start'> <a href="">about us</a></div> 
         <div className='  mt-4 text-start'>   <a href="">contact us</a></div> 
        </div>
        <div className='text-black font-bold text-[20px] mt-4 text-start'>
            <h1  className='bg-yellow-300 mr-[190px] shadow-md'>contact</h1>
            <div className='  mt-4 text-start text-[12px] text-white '> <a href="mailto:anis.inbox10@gmail.com">anis.inbox10@gmail.com</a></div>
            <div className='  mt-4 text-start text-[12px] text-white items-end te'> +92 343 92 75550 </div>
            <div className='  mt-4 text-start text-[12px] text-white items-start'> Phase # 2, Behria Town, Islamabad </div>
            <div className='  mt-4 text-start text-[12px] text-white items-start'> Chitral KPK, Pakistan </div>


        </div>
        <div className='text-black font-bold text-[20px] mt-4 text-start '>
            <h1 className='bg-yellow-500 mr-[160px] shadow-md'>Follow us</h1>
           <div className='mt-5'> <Facebook/>
             <p className=' mt-[-20px] text-start text-[12px] text-white pl-[35px]'> PureEaseOfficial </p></div>
           <div className='mt-5'><Twitter/> <p className='  mt-[-20px] text-start text-[12px] text-white pl-[35px]'>PureEaseOfficial</p></div>
           <div className='mt-5'><Instagram/>  <p className='  mt-[-20px] text-start text-[12px] text-white pl-[35px]'>PureEaseOfficial</p></div>
           <div className='mt-5'> < Youtube/> <p className='  mt-[-20px] text-start text-[12px] text-white pl-[35px]'>PureEaseOfficial</p></div>
          

      
    </div>
    </div>
  )
}

export default Footer