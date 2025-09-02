import React from 'react'
import invetoryvectorimg from "../../../public/inventoryvector.png"
import Layout from '../../styles/Layout'
// import Button from '../../styles/Button'
import { Button } from '../ui/button'

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
      <Button className="bg-[#C93F2E] text-white">Add Categories</Button>
      <Button className="bg-[#C93F2E] text-white">Add Products</Button>
      </div>
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