import React from 'react'
import Sidebar from './Components/Sidebar';
import BottomNavbar from './Components/BottomNavbar';
import Academics from './Pages/Academics';
import gmrit from './Assets/gmrit.png'
import Examinations from './Pages/Examinations';

const Mainpage = () => {
  return (
    <div className="w-[100vh] w-[100vw] flex flex-col items-start">
      <div className='w-[20vw]'>
        <Sidebar />
      </div>
      <div className='sm:pl-[20%] md:pl-[20%] lg:pl-[20%] w-[100vw]'>
        {/* < Examinations /> */}
        < Academics />
        {/* <Outlet /> */}
      </div>
      <div className=''>
        <BottomNavbar />
      </div>
    </div>
  )
}

export default Mainpage