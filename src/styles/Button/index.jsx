import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-[#C93F2E] p-4 border-2 border-none  rounded-full font-semibold text-white'>{children}</button>
  )
}

export default Button