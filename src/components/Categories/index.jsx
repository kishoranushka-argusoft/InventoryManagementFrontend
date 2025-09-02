import React from 'react'
import Layout from '../../styles/Layout'
import Search from '../Search'
import CategoriesCard from '../CategoriesCard'
// import Button from '../../styles/Button'
import { Button } from '../ui/button'

const Categories = () => {
  return (
   <Layout>
     <div className='py-16 text-4xl font-semibold text-[#181818]'>Categories</div>
     <div className='flex justify-between w-full'>
        <div className='w-1/2  '>
            <Search />
        </div>
        <Button className="bg-[#C93F2E] text-white">View All Categories</Button>
     </div>
     <div className='mt-16'>
      <CategoriesCard />
     </div>
   </Layout>
  )
}

export default Categories