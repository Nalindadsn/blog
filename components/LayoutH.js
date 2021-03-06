import Head from 'next/head';

import React, { useState,useContext } from "react";
import { Store } from '../utils/Store';



export default function LayoutH({ children }) {
    const {state,dispatch}=useContext(Store);
    const {darkMode}=state;
    const [showMe, setShowMe] = useState(false);
    const [showMe2, setShowMe2] = useState(false);
  
    function toggle(){
      setShowMe(!showMe);
    }
  
    function toggleuser(){
      setShowMe2(!showMe2);
    }
  
    
  return (
    <div>
    <Head>

    <title>Create Next App</title>
        <meta name="description" content="web development tutorials " />
        <link rel="icon" href="../favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>

    <main>

    {/* 
style={{ backgroundColor: darkMode?"black":"red"}} 
      */}
 

 <nav className="bg-gray-800 w-full h-16  px-1   shadow-md fixed z-50" >
  <div className="max-w-7xl mx-0 p-0 sm:px-2 lg:px-6">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center md:hidden">

        <button  onClick={toggle} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          
          
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex items-center  md:items-stretch ">
        <div className="flex-shrink-0 flex items-center text-white">
         <a href="https://www.codeaddon.com/" className='font-bold '> <span className='text-amber-500 pl-8 md:pl-0 '><i className="fa fa-chevron-left"></i>CODE<i className="fa fa-chevron-right"></i></span>ADDON</a>

        </div>
        <div className="hidden md:block md:ml-2 lg:ml-6">
          <div className="flex space-x-4">

            <a href="https://www.codeaddon.com/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>

            <a href="https://www.codeaddon.com/articles" className="ml-1  text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Articles</a>

            <a href="https://www.codeaddon.com/playlists" className="ml-1 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Videos</a>
            <a href="https://www.codeaddon.com/quizzes" className="ml-1 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Quizzes</a>

            <a href="https://www.codeaddon.com/about" className="ml-1 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="https://www.codeaddon.com/contact" className="ml-1 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

      <button type="button" className=" mr-2 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>

          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <a href='' className="border-2 text-white border-white  py-1 px-3 mr-1 rounded-full text-gray-400 hover:text-gray-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          Login
        </a>
        <a href='' className="border-2 text-white border-white  py-1 px-3  rounded-full text-gray-400 hover:text-gray-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          Register
        </a>
        <div className="ml-3 relative">
          <div>
            {/* <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img  onClick={toggleuser}  className="h-8 w-8 rounded-full" src="https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg" alt="" />
            </button> */}
          </div>


          <div  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1"  style={{
        display: showMe2?"block":"none"
      }}>

            <a href="https://www.codeaddon.com/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="https://www.codeaddon.com/settings" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
            <a href="https://www.codeaddon.com/logout" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>




  <div className="sm:hidden bg-gray-900" id="mobile-menu"  style={{
        display: showMe?"block":"none"
      }}>
    
    <div className=" space-y-1">

      <a href="https://www.codeaddon.com/" className="bg-gray-700   text-white block px-3 py-2  text-base font-medium" aria-current="page">Home</a>

      <a href="https://www.codeaddon.com/articles" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2  text-base font-medium">Articles</a>

      <a href="https://www.codeaddon.com/playlists" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2  text-base font-medium">Video Tutorials</a>
      <a href="https://www.codeaddon.com/quizzes" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2  text-base font-medium">quizzes</a>

      <a href="https://www.codeaddon.com/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2  text-base font-medium">About Us</a>
      <a href="https://www.codeaddon.com/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2  text-base font-medium">Contact Us</a>
    </div>
  </div>
</nav>




{/* //------------------- */}

<div className="bg-gray-800">

<div className=" mx-auto  ">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    <div className="  relative  py-12  pl-12 ml-12  hidden md:block ">
    <figcaption className="absolute -left-5 top-24 text-lg -mt-16 text-white px-4 pt-12  ">


<div className="shadow">
  <h1  className="bg-sky-600 px-2 ">F</h1>
  <h1  className="bg-red-500 px-2 ">Y</h1>
  <h1  className="bg-sky-300 px-2 ">T</h1>
</div>
</figcaption>

      <h2 className="font-bold text-5xl text-white leading-tight mt-3 mb-6 pt-20">It looks better and cleaner!</h2>
    </div>
    <div className=" justify-center relative  ">

<div className='bg-gray-900/50 md:bg-gray-900/0 absolute w-full h-full' ></div>

    <figcaption className="absolute right-0 top-24 text-lg -mt-16 text-white px-4 pt-12 z-40  block md:hidden ">


<div className=" p-5">
  <h1  className="bg-sky-600 px-2 ">F</h1>
  <h1  className="bg-red-500 px-2 ">Y</h1>
  <h1  className="bg-sky-300 px-2 ">T</h1>
</div>
</figcaption>


<div className="shadow py-5 pl-5  mr-6 pr-7">
<h2 className="font-bold text-5xl text-white leading-tight mt-3 mb-6 pt-20 z-50">It looks better and cleaner!</h2>

</div>






    </div>
  </div>
</div>



  </div>



{/* 
  -------------------------------------7----------- */}


      {children}
      
    </main>

    <footer>


      <div className="footer-2 bg-gray-800 pt-6 md:pt-12">
          <div className="container px-4 mx-auto">

            <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
{/* 
              <div className="footer-info lg:w-1/3 md:px-4">
                <h4 className="text-white text-2xl mb-4">19K users are using FWR blocks and making their life easy.</h4>
                <p className="text-gray-400">We have carefully crafted the blocks to suit to everyone's need.</p>
                <div className="mt-4">
                  <button className="bg-facebook py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
                    <span className="fab fa-facebook-f mr-2"></span> Follow
                  </button>
                  <button className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
                    <span className="fab fa-twitter mr-2"></span> Follow @freeweb19
                  </button>
                </div>
              </div> */}

              <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
                <div className="sm:flex">
                  <div className="sm:flex-1">
                    <h6 className="text-base font-medium text-white uppercase mb-2">About</h6>
                    <div>
                      <a href="#" className="text-gray-400 py-1 block hover:underline">Company</a>
                      <a href="#" className="text-gray-400 py-1 block hover:underline">Culture</a>
                      <a href="#" className="text-gray-400 py-1 block hover:underline">Articles</a>
                      <a href="#" className="text-gray-400 py-1 block hover:underline">Careers</a>
                    </div>
                  </div>
                  <div className="sm:flex-1 mt-4 sm:mt-0">
                    <h6 className="text-base font-medium text-white uppercase mb-2">What we offer</h6>
                    <div>
                      <a href="#" className="text-gray-400 py-1 block hover:underline">Blocks</a>
                      <a href="#" className="text-gray-400 py-1 block hover:underline">Resources</a>
                      <a href="#" className="text-gray-400 py-1 block hover:underline">Tools</a>
                      <a href="#" className="text-gray-400 py-1 block hover:underline">Tutorials</a>
                      <a href="#" className="text-gray-400 py-1 block hover:underline">Freebies</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
                <h5 className="text-lg text-white font-medium mb-4">Explore our site</h5>
                <button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded py-2 px-6 md:px-12 transition-colors duration-300">Explore</button>
              </div>

            </div>

          </div>

          <div className="border-t border-solid border-gray-900 mt-4 py-4">
            <div className="container px-4 mx-auto">

              <div className="md:flex md:-mx-4 md:items-center">
                <div className="md:flex-1 md:px-4 text-center md:text-left">
                  <div className="text-white">&copy; <a href="https://www.codeaddon.com/" className='font-bold'> <span className='text-amber-500'><i className="fa fa-chevron-left"></i>CODE<i className="fa fa-chevron-right"></i></span>ADDON</a></div>
                </div> 
                <div className="md:flex-1 md:px-4 text-center md:text-right">
                  <a href="#" className="py-2 px-4 text-white inline-block hover:underline">Terms of Service</a>
                  <a href="#" className="py-2 px-4 text-white inline-block hover:underline">Privacy Policy</a>
                </div>
              </div>

            </div>
          </div>

    </div>

      </footer>
  </div>
 
  );
}