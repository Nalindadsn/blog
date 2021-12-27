import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from "react";

export default function Articles() {

  const [showMe, setShowMe] = useState(true);

  
  const [showMe2, setShowMe2] = useState(false);

  function toggle(){
    setShowMe(!showMe);
  }

  function toggleuser(){
    setShowMe2(!showMe2);
  }

  return (
    <div >




      <div className='w-full' >
    





      <nav className="bg-gray-800 w-full h-16  px-8   shadow-md  z-50" >
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center text-white">
         <a href="https://www.codeaddon.com/" className='font-bold'> <span className='text-amber-500'><i className="fa fa-chevron-left"></i>CODE<i className="fa fa-chevron-right"></i></span>ADDON</a>

        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">


          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>

          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>


        <div className="ml-3 relative">
          <div>
            <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img  onClick={toggleuser}  className="h-8 w-8 rounded-full" src="https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg" alt="" />
            </button>
          </div>


          <div  className="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1"  style={{
        display: showMe2?"block":"none"
      }}>

            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>





</nav>






      <div className="relative min-h-screen md:flex" data-dev-hint="container">
    <input type="checkbox" id="menu-open" className="hidden" />

    <label htmlFor="menu-open" className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </label>



    <aside id="sidebar" className="z-50 bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"  style={{
        display: showMe?"block":"none"
      }}>
        <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
    
     
          
          <a href="#" className="text-white flex items-center space-x-2 px-4" title="Your App is cool">
            
            </a>
           
            <nav data-dev-hint="div className='w-full' navigation">
                <a href="https://www.codeaddon.com/" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                    <i className="fa fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="https://www.codeaddon.com/articles" className="flex items-center space-x-2 py-2 px-4 transition duration-200   bg-gray-700 text-white hover:bg-gray-700 hover:text-white">
                    <i className="fa fa-book"></i>
                    <span>Articles</span>
                </a>
                <a href="https://www.codeaddon.com/playlists" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                <i className="fa  fa-youtube-play"></i>
                    <span>Video Tutorials</span>
                </a>
                <a href="https://www.codeaddon.com/about" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                <i className="fa fa-info"></i>
                    <span>About Us</span>
                </a>
                <a href="https://www.codeaddon.com/contact" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                <i className="fa fa-envelope"></i>
                    <span>Contact Us</span>
                </a>
                
            </nav>
        </div>

        <nav data-dev-hint="second-main-navigation or footer navigation">
            
            <a href="#" className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white bg-red-500">
                LOGOUT
            </a>
        </nav>
    </aside>

    <div id="content" className="flex-1 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">

            <div className="px-4  sm:px-0">
                <div className=" rounded-lg h-96">

                <button   onClick={toggle} type="button" className="absolute z-50  top-0  inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white block sm:hidden md:hidden" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              
              
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>  
{/* 
============================================== */}


<div className="flex flex-col min-h-screen md:px-3">
  <div className="">
    
    
    <div className="flex justify-center   py-5">

      <h2 className=' py-5  font-bold text-4xl text-gray-900 '> Latest Atricles </h2>
    </div>
  </div>
  <div className=" pb-6 flex-1">
    <div className="container mx-auto">
      <div className="flex flex-wrap md:-mx-3">

        


      <div className="md:w-1/2 px-3 mb-6 w-full ">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded shadow">
            <div className="w-2/6">
            <div style={{position:"relative",height:"100%",paddingBottom:"100%"}}>
              <Image
      src="https://res.cloudinary.com/masterdevs/image/upload/v1640117880/codeaddon/codeaddon-banner_tmtp8t.png"
      alt="test"
      layout='fill'
      objectFit='cover'
    />

            </div>
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white font-bold	 leading-normal text-lg">
              <Link href={`/post/`}>
          <a>test</a>
        </Link>
                 </h2>

<p className='text-slate-300'>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor 

</p>

              <div className="flex flex-wrap justify-between items-center mt-3 ">
                <div className="inline-flex items-center shadow">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ">
                    <Image width="256" height="256" src="https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg" alt='Nalinda Dissanayaka - author' />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Nalinda Dissanayaka</h2>
                    <p className="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span className="text-white opacity-50">
              <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>

        


        <div className="md:w-1/2 px-3 mb-6 w-full ">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded shadow">
            <div className="w-2/6">
            <div style={{position:"relative",height:"100%",paddingBottom:"100%"}}>
              <Image
      src="https://res.cloudinary.com/masterdevs/image/upload/v1640117880/codeaddon/codeaddon-banner_tmtp8t.png"
      alt="test"
      layout='fill'
      objectFit='cover'
    />

            </div>
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white font-bold	 leading-normal text-lg">
              <Link href={`/post/`}>
          <a>test</a>
        </Link>
                 </h2>

<p className='text-slate-300'>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor 

</p>

              <div className="flex flex-wrap justify-between items-center mt-3 ">
                <div className="inline-flex items-center shadow">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ">
                    <Image width="256" height="256" src="https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg" alt='Nalinda Dissanayaka - author' />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Nalinda Dissanayaka</h2>
                    <p className="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span className="text-white opacity-50">
              <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>

        


        <div className="md:w-1/2 px-3 mb-6 w-full ">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded shadow">
            <div className="w-2/6">
            <div style={{position:"relative",height:"100%",paddingBottom:"100%"}}>
              <Image
      src="https://res.cloudinary.com/masterdevs/image/upload/v1640117880/codeaddon/codeaddon-banner_tmtp8t.png"
      alt="test"
      layout='fill'
      objectFit='cover'
    />

            </div>
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white font-bold	 leading-normal text-lg">
              <Link href={`/post/`}>
          <a>test</a>
        </Link>
                 </h2>

<p className='text-slate-300'>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor 

</p>

              <div className="flex flex-wrap justify-between items-center mt-3 ">
                <div className="inline-flex items-center shadow">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ">
                    <Image width="256" height="256" src="https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg" alt='Nalinda Dissanayaka - author' />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Nalinda Dissanayaka</h2>
                    <p className="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span className="text-white opacity-50">
              <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>

        


        <div className="md:w-1/2 px-3 mb-6 w-full ">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded shadow">
            <div className="w-2/6">
            <div style={{position:"relative",height:"100%",paddingBottom:"100%"}}>
              <Image
      src="https://res.cloudinary.com/masterdevs/image/upload/v1640117880/codeaddon/codeaddon-banner_tmtp8t.png"
      alt="test"
      layout='fill'
      objectFit='cover'
    />

            </div>
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white font-bold	 leading-normal text-lg">
              <Link href={`/post/`}>
          <a>test</a>
        </Link>
                 </h2>

<p className='text-slate-300'>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor 

</p>

              <div className="flex flex-wrap justify-between items-center mt-3 ">
                <div className="inline-flex items-center shadow">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ">
                    <Image width="256" height="256" src="https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg" alt='Nalinda Dissanayaka - author' />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Nalinda Dissanayaka</h2>
                    <p className="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span className="text-white opacity-50">
              <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>

        


        <div className="md:w-1/2 px-3 mb-6 w-full ">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded shadow">
            <div className="w-2/6">
            <div style={{position:"relative",height:"100%",paddingBottom:"100%"}}>
              <Image
      src="https://res.cloudinary.com/masterdevs/image/upload/v1640117880/codeaddon/codeaddon-banner_tmtp8t.png"
      alt="test"
      layout='fill'
      objectFit='cover'
    />

            </div>
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white font-bold	 leading-normal text-lg">
              <Link href={`/post/`}>
          <a>test</a>
        </Link>
                 </h2>

<p className='text-slate-300'>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor 

</p>

              <div className="flex flex-wrap justify-between items-center mt-3 ">
                <div className="inline-flex items-center shadow">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ">
                    <Image width="256" height="256" src="https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg" alt='Nalinda Dissanayaka - author' />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Nalinda Dissanayaka</h2>
                    <p className="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span className="text-white opacity-50">
              <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>

        


        <div className="md:w-1/2 px-3 mb-6 w-full ">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded shadow">
            <div className="w-2/6">
            <div style={{position:"relative",height:"100%",paddingBottom:"100%"}}>
              <Image
      src="https://res.cloudinary.com/masterdevs/image/upload/v1640117880/codeaddon/codeaddon-banner_tmtp8t.png"
      alt="test"
      layout='fill'
      objectFit='cover'
    />

            </div>
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white font-bold	 leading-normal text-lg">
              <Link href={`/post/`}>
          <a>test</a>
        </Link>
                 </h2>

<p className='text-slate-300'>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor 

</p>

              <div className="flex flex-wrap justify-between items-center mt-3 ">
                <div className="inline-flex items-center shadow">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ">
                    <Image width="256" height="256" src="https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg" alt='Nalinda Dissanayaka - author' />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Nalinda Dissanayaka</h2>
                    <p className="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span className="text-white opacity-50">
              <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>

        


        <div className="md:w-1/2 px-3 mb-6 w-full ">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded shadow">
            <div className="w-2/6">
            <div style={{position:"relative",height:"100%",paddingBottom:"100%"}}>
              <Image
      src="https://res.cloudinary.com/masterdevs/image/upload/v1640117880/codeaddon/codeaddon-banner_tmtp8t.png"
      alt="test"
      layout='fill'
      objectFit='cover'
    />

            </div>
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white font-bold	 leading-normal text-lg">
              <Link href={`/post/`}>
          <a>test</a>
        </Link>
                 </h2>

<p className='text-slate-300'>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor 

</p>

              <div className="flex flex-wrap justify-between items-center mt-3 ">
                <div className="inline-flex items-center shadow">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ">
                    <Image width="256" height="256" src="https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg" alt='Nalinda Dissanayaka - author' />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Nalinda Dissanayaka</h2>
                    <p className="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span className="text-white opacity-50">
              <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>

        


        <div className="md:w-1/2 px-3 mb-6 w-full ">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded shadow">
            <div className="w-2/6">
            <div style={{position:"relative",height:"100%",paddingBottom:"100%"}}>
              <Image
      src="https://res.cloudinary.com/masterdevs/image/upload/v1640117880/codeaddon/codeaddon-banner_tmtp8t.png"
      alt="test"
      layout='fill'
      objectFit='cover'
    />

            </div>
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white font-bold	 leading-normal text-lg">
              <Link href={`/post/`}>
          <a>test</a>
        </Link>
                 </h2>

<p className='text-slate-300'>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor 

</p>

              <div className="flex flex-wrap justify-between items-center mt-3 ">
                <div className="inline-flex items-center shadow">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ">
                    <Image width="256" height="256" src="https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg" alt='Nalinda Dissanayaka - author' />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Nalinda Dissanayaka</h2>
                    <p className="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span className="text-white opacity-50">
              <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>

        


        <div className="md:w-1/2 px-3 mb-6 w-full ">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded shadow">
            <div className="w-2/6">
            <div style={{position:"relative",height:"100%",paddingBottom:"100%"}}>
              <Image
      src="https://res.cloudinary.com/masterdevs/image/upload/v1640117880/codeaddon/codeaddon-banner_tmtp8t.png"
      alt="test"
      layout='fill'
      objectFit='cover'
    />

            </div>
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white font-bold	 leading-normal text-lg">
              <Link href={`/post/`}>
          <a>test</a>
        </Link>
                 </h2>

<p className='text-slate-300'>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor 

</p>

              <div className="flex flex-wrap justify-between items-center mt-3 ">
                <div className="inline-flex items-center shadow">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ">
                    <Image width="256" height="256" src="https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg" alt='Nalinda Dissanayaka - author' />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Nalinda Dissanayaka</h2>
                    <p className="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span className="text-white opacity-50">
              <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>

        


        <div className="md:w-1/2 px-3 mb-6 w-full ">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded shadow">
            <div className="w-2/6">
            <div style={{position:"relative",height:"100%",paddingBottom:"100%"}}>
              <Image
      src="https://res.cloudinary.com/masterdevs/image/upload/v1640117880/codeaddon/codeaddon-banner_tmtp8t.png"
      alt="test"
      layout='fill'
      objectFit='cover'
    />

            </div>
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white font-bold	 leading-normal text-lg">
              <Link href={`/post/`}>
          <a>test</a>
        </Link>
                 </h2>

<p className='text-slate-300'>

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor 

</p>

              <div className="flex flex-wrap justify-between items-center mt-3 ">
                <div className="inline-flex items-center shadow">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ">
                    <Image width="256" height="256" src="https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg" alt='Nalinda Dissanayaka - author' />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Nalinda Dissanayaka</h2>
                    <p className="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span className="text-white opacity-50">
              <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>

      
      
      </div>
      <div className="text-center pt-6 pb-12 ">
      <Link href="/articles" > 
      <a className="border border-gray-600 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white">Show More</a>
      </Link> 

      </div>
    </div>
  </div>
</div>



{/* 
  ------------------------------------------------- */}

                </div>
            </div>

        </div>
        
        <div className='pt-5 clear-both w-full' >



        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </div>
    </div>
</div>

























{/* //------------------- */}







{/* 
  ------------------------------------------------- */}








      </div>

 
    </div>
  )
}
