import React from 'react'
import { CategoryCardData } from './data'
import { Button } from '../ui/button'

const CategoriesCard = () => {
  return (
    <div className='grid grid-cols-3 gap-10 justify-between'>
      {CategoryCardData.map((ele, idx) =>{
        return (
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={ele.image} alt="" />
    </a>


    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-4 text-sm font-medium text-center text-white bg-[#C93F2E] rounded-full ">
            <Button className="">Browse Category</Button>
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

        )
      })}
    </div>


  )
}

export default CategoriesCard