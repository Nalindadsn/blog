
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from "react";

import Link from 'next/link'
import Footerb from '../components/Footerb';

export default function Quiz() {


  
  const [showMe, setShowMe] = useState('');

  
  const [showMe2, setShowMe2] = useState(false);

  function toggle(){
    setShowMe(!showMe);
  }

  function toggleuser(){
    setShowMe2(!showMe2);
  }

  return (
    <div >




      <div >
    











      <div className="relative min-h-screen md:flex" data-dev-hint="container">
    <input type="checkbox" id="menu-open" className="hidden" />

    <label htmlFor="menu-open" className=" shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </label>



    <aside id="sidebar" className="mt-12 z-40 bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto hidden md:block  hdd" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"  style={
          showMe!==""?(showMe?{ display:"block"}:{display:"none" }):({})
      }>
        <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
    
     
          
          <a href="#" className="text-white flex items-center space-x-2 px-4" title="Your App is cool">
            
            </a>
           
            <nav data-dev-hint="main navigation">
                <a href="https://www.codeaddon.com/" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                    <i className="fa fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="https://www.codeaddon.com/articles" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                    <i className="fa fa-book"></i>
                    <span>Articles</span>
                </a>
                <a href="https://www.codeaddon.com/playlists" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                <i className="fa fa-youtube-play"></i>
                    <span>Video Tutorials</span>
                </a>
                <a href="https://www.codeaddon.com/quizzes" className="flex items-center space-x-2 py-2 px-4 transition duration-200 bg-gray-700 text-white hover:bg-gray-700 hover:text-white">
                <i className="fa fa-sticky-note"></i>
                    <span>Quizzes</span>
                </a>
                <a href="https://www.codeaddon.com/about" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                <i className="fa fa-info"></i>
                    <span>About Us</span>
                </a>
                <a href="https://www.codeaddon.com/contact" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                <i className="fa fa-envelope"></i>
                    <span>Contact Us</span>
                </a>
                <a href="https://www.codeaddon.com/contact" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white bg-red-500">
                <i className="fa fa-envelope"></i>
                    <span>LOGOUT</span>
                </a>
                
            </nav>
        </div>


    </aside>

    <main id="content" className="flex-1 lg:px-8">

        <div className="max-w-7xl mx-auto">

            <div className="px-4  sm:px-0">
                <div className=" rounded-lg h-96">

                <button   onClick={toggle} type="button" className="absolute z-50  top-16  inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              
              
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>  
{/* 
===================================================== */}


<div className="flex flex-col min-h-screen">



<div className="flex ">
  <div className="w-1/2 h-12"><h1 className="font-bold text-3xl ml-12">Quizzes</h1></div>
  <div className="w-1/2 h-12 text-right"><a href="">Home</a>/<a href="">Quizzes</a>   </div>
</div>

  <div className=" pt-3 pb-6 flex-1">
    <div className="container mx-auto">








    <div className="container my-8 mx-auto px-4 leading-normal">



    <div className="">
<h1 className='text-center'>
  No Quizzes
</h1>

    {/* <div className="relative p-3 mb-2 bg-gray-800 text-white  rounded-md shadow">  
  <button className=" absolute right-0 bottom-1 mt-2 mx-4 p-2  px-4 border-2 text-white text-center border-white rounded-lg hover:text-white hover:bg-gray-400 ">Start</button>
    <div className=''>
      <span className='text-gray-800 bg-white px-2 mr-2'>01.</span>
         web develpment quiz 1 web develpment quiz 1 web develpment quiz 1 web develpment quiz 1 web develpment quiz 1 web develpment quiz 1 web develpment quiz 1 web develpment quiz 1 web develpment quiz 1<br/>
        <hr className='bg-slate-900 mt-2 mb-5'/><span className='bg-slate-900 p-2 mt-5'>No of Questions : 50</span>

    </div>
  </div>



  <div className="relative p-3 mb-2 bg-gray-800 text-white  rounded-md shadow">  
  <button className=" absolute right-0 bottom-1 mt-2 mx-4 p-2  px-4 border-2 text-white text-center border-white rounded-lg hover:text-white hover:bg-gray-400 ">Start</button>
    <div className=''>
      <span className='text-gray-800 bg-white px-2 mr-2'>01.</span>
         web develpment quiz 1 web develpment quiz 1 web develpment quiz 1 web develpment quiz 1 web develpment quiz 1 web develpment quiz 1 web develpment quiz 1 web develpment quiz 1 web develpment quiz 1<br/>
        <hr className='bg-slate-900 mt-2 mb-5'/><span className='bg-slate-900 p-2 mt-5'>No of Questions : 50</span>

    </div>
  </div> */}



</div>










</div>








      
      
    </div>
  </div>
</div>

<Footerb/>
{/* 
  ------------------------------------------------- */}

                </div>
            </div>

        </div>
    </main>
</div>

























{/* //------------------- */}







{/* 
  ------------------------------------------------- */}








      </div>

 
    </div>
  )
}
