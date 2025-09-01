import React from 'react'
import invetoryvectorimg from "../../../public/inventoryvector.png"
import Layout from '../../styles/Layout'

const Hero = () => {
  return (
    <div className='bg-[#181818]  h-screen overflow-hidden text-white '>
    <Layout>
      <div className='h-screen w-full  flex items-center justify-between'>
    <div className=' md:w-1/2 '>
      <p className='text-8xl font-bold'>
      Inventory Management
      </p>
      <div className='flex gap-4 mt-10'>
      <button className='bg-[#C93F2E] p-4 border-2 border-none  rounded-full font-semibold'>Add Categories</button>
      <button className='bg-[#C93F2E] p-4 border-2 border-none  rounded-full font-semibold'>Add Products</button></div>
    </div>
    <div className='md:w-1/2  flex items-center justify-end'>
    <img src={invetoryvectorimg} alt="" />
    </div>
    </div>
    </Layout>
  </div>
  )
}

export default Hero