import React, { useState, useEffect, useRef } from 'react';
import dp from '../Assets/dp.png'
import gmrit from '../Assets/gmrit.png'
import { PiExamFill } from "react-icons/pi";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { HiAcademicCap } from "react-icons/hi2";
import { MdEmojiEvents } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      
      <div className='flex flex-row justify-between items-center'>
      <button 
        onClick={toggleSidebar} 
        aria-controls="default-sidebar" 
        type="button" 
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-white bg-cyan-900 rounded-full sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <div className='w-[100%] h-[100%]'>
      {/* <img className='only-mobile ml-44 ' src={gmrit} height={130} width={130} /> */}
      </div>
      </div>

      <aside 
        ref={sidebarRef}
        id="default-sidebar" 
        className={`fixed top-0 left-0 z-40 w-64 h-screen border border-r border-2 border-gray-300 shadow-lg transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} 
        aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-zinc-200">
          <ul className="space-y-2 font-medium">
          <li className="border border-blue-950 mb-6 shadow-lg h-[28vh] bg-cyan-950 rounded-2xl">
  <a 
    href="#" 
    className="flex items-center p-2 text-gray-900 rounded-2xl hover:bg-cyan-900 group"
    onClick={closeSidebar}
  >
    <div className="relative flex items-center">
      <img 
        src={dp}
        alt="Profile"
        className="w-20 h-20 rounded-full object-cover"
      />
      <button 
        className="absolute bottom-0 right-0 bg-cyan-200 text-white rounded-full p-1 hover:bg-blue-700"
        
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15.232 5.232l3.536 3.536M9 11l3 3-6 6H3v-3l6-6z" />
        </svg>
      </button>
    </div>
    <span className="ml-3 text-white text-2xl"><span className='text-lg text-blue-100'>Hello,</span> Neelesh</span>
  </a>
</li>

            <li>
              <a 
                href="#" 
                className="flex items-center p-2 text-gray-900 rounded-2xl hover:bg-gray-100 group"
                onClick={closeSidebar}
              >
                <TbLayoutDashboardFilled className="h-[20px] w-[20px]" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group"
                onClick={closeSidebar}
              >
                <HiAcademicCap className='w-[20px] h-[20px]'/>
                <span className="flex-1 ms-3 whitespace-nowrap">Academics</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 border border-cyan-900 rounded-full ">Pro</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                onClick={closeSidebar}
              >
               <PiExamFill className='w-[20px] h-[20px]'/>
                <span className="flex-1 ms-3 whitespace-nowrap">Examinations</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 border border-cyan-900  rounded-full ">3</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                onClick={closeSidebar}
              >
                <FaTasks className='w-[20px] h-[20px]'/>
                <span className="flex-1 ms-3 whitespace-nowrap">Attendence</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                onClick={closeSidebar}
              >
                <MdWork className='w-[20px] h-[20px]'/>
                <span className="flex-1 ms-3 whitespace-nowrap">Placements</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                onClick={closeSidebar}
              >
                <MdEmojiEvents className='w-[20px] h-[20px]'/>
                <span className="flex-1 ms-3 whitespace-nowrap">Events</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                onClick={closeSidebar}
              >
                <MdFeedback className='w-[20px] h-[20px]'/>
                <span className="flex-1 ms-3 whitespace-nowrap">FeedBack</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
