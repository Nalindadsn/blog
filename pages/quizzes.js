
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from "react";

import Link from 'next/link'

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



      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="web development tutorials " />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <main >
    






      <nav className="bg-gray-800 w-full h-16  px-1   shadow-md  z-50" >
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
         <Link href="/"><a className='font-bold '> <span className='text-amber-500 pl-8 md:pl-0 '><i className="fa fa-chevron-left"></i>CODE<i className="fa fa-chevron-right"></i></span>ADDON</a></Link>

        </div>
        <div className="hidden md:block md:ml-2 lg:ml-6">
          <div className="flex space-x-4">
            <Link href="/">
              <a className="ml-1  text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
            </Link>
            <Link href="/articles">
              <a className="ml-1  text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Articles</a>
            </Link>
            <Link href="/playlists">
              <a className="ml-1 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Videos</a>
            </Link>
            <Link href="/quizzes">            
            <a className="ml-1 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Quizzes</a>
            </Link>
            <Link href="/about">
            <a className="ml-1 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            </Link>
            <Link href="/contact">
            <a className="ml-1 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </Link>

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
        <Link href="/profile">
          <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
        </Link>
        <Link href="/settings">
          <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
        </Link>
        <Link href="/logout">
          <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
        </Link>
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



    <aside id="sidebar" className="z-50 bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto hidden md:block  hdd" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"  style={
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

                <button   onClick={toggle} type="button" className="absolute z-50  top-0  inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
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

{/* <section className="">
    <div className="">

        <div className=" bg-indigo-600 shadow-lg rounded-lg">
            <div className="px-6 py-5">
                <div className="flex items-start">
                    <svg className="fill-current flex-shrink-0 mr-5" width="30" height="30" viewBox="0 0 30 30">
                        <path className="text-indigo-300" d="m16 14.883 14-7L14.447.106a1 1 0 0 0-.895 0L0 6.883l16 8Z" />
                        <path className="text-indigo-200" d="M16 14.619v15l13.447-6.724A.998.998 0 0 0 30 22V7.619l-14 7Z" />
                        <path className="text-indigo-500" d="m16 14.619-16-8V21c0 .379.214.725.553.895L16 29.619v-15Z" />
                    </svg>

                    <div className="flex-grow truncate">

                        <div className="w-full sm:flex justify-between items-center mb-3">

                            <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">Simple Design Tips</h2>

                            <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                                <button className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">
                                    <svg className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-300 group-hover:text-gray-200" viewBox="0 0 16 16">
                                        <path d="M14.682 2.318A4.485 4.485 0 0 0 11.5 1 4.377 4.377 0 0 0 8 2.707 4.383 4.383 0 0 0 4.5 1a4.5 4.5 0 0 0-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 0 1 4.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 0 1 1.785 4.251h-.003Z" />
                                    </svg>
                                    <span>498 <span className="sr-only">likes</span></span>
                                </button>
                                <button className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">
                                    <svg className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-300 group-hover:text-gray-200" viewBox="0 0 16 16">
                                        <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7Zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8Z" />
                                    </svg>
                                    <span>64 <span className="sr-only">comments</span></span>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-end justify-between whitespace-normal">
                            <div className="max-w-md text-indigo-100">
                                <p className="mb-2">Lorem ipsum dolor sit amet, consecte adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>

                            <a className="flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2" href="#0">
                                <span className="block font-bold"><span className="sr-only">Read more</span> -></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}

{/* <div x-show="open" className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60" x-data="{ open: true }">
    <div className="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
        <div>👉 <a className="hover:underline ml-1" href="https://cruip.com/?ref=codepen-cruip-snippet-7" target="_blank">More components on Cruip.com</a></div>
        <button className="text-gray-500 hover:text-gray-400 ml-5" >
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
        </button>
    </div>
</div> */}


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

<footer >


<div className="border-t border-solid border-gray-900 mt-4 py-4">
      <div className="container px-4 mx-auto">

        <div className="md:flex md:-mx-4 md:items-center">
          <div className="md:flex-1 md:px-4 text-center md:text-left">
             <div className="text-gray-800">&copy; <a href="https://www.codeaddon.com/" className='font-bold'> <span className='text-amber-500'><i className="fa fa-chevron-left"></i>CODE<i className="fa fa-chevron-right"></i></span>ADDON</a></div>
          </div>
          <div className="md:flex-1 md:px-4 text-center md:text-right">
            <a href="#" className="py-2 px-4 text-gray-800 inline-block hover:underline">Terms of Service</a>
            <a href="#" className="py-2 px-4 text-gray-800 inline-block hover:underline">Privacy Policy</a>
          </div>
        </div>

      </div>
    </div>
</footer>
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








      </main>

 
    </div>
  )
}
