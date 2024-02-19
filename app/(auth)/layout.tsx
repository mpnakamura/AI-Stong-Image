import React from 'react'

const Layout = ({children} : {childern: React.ReactNode}) => {
  return (
    <main className='auth'>{children}</main>
  )
}

export default Layout