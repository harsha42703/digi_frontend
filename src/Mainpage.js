import React from 'react'
import Sidebar from './Components/Sidebar';

const Mainpage = () => {
  return (
    <div className="w-[100vh] w-[100vw] flex items-center justify-start">
      <div className=''>
        <Sidebar />
      </div>
      <div className=''>
        {/* <Outlet /> */}
      </div>
    </div>
  )
}

export default Mainpage