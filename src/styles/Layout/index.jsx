import React from 'react'

const Layout = ({children}) => {
  return (
    <div className=' max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>{children}</div>
  )
}

export default Layout