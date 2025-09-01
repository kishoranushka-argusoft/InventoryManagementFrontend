import React from 'react'
import Layout from '../../styles/Layout'
import Search from '../Search'
import CategoriesCard from '../CategoriesCard'

const Categories = () => {
  return (
   <Layout>
     <div className='py-16 text-4xl font-semibold text-[#181818]'>Categories</div>
     <div className='flex justify-between w-full'>
        <div className='w-1/2  '>
            <Search />
        </div>
        <button className='w-60 bg-[#C93F2E] rounded-full text-white font-semibold'>View All Categories</button>
     </div>
     <div>

     </div>
   </Layout>
  )
}

export default Categories