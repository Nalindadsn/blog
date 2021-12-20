import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from "react";

export default function Playlist() {

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



      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="web development tutorials " />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <main >
    





      <nav className="bg-gray-800 w-full h-16  px-8   shadow-md  z-50" >
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center text-white">
         <a href="https://www.codeaddon.com/"> CODEADDON</a>

        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">

            <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Articles</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Video Tutorials</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
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
              <img  onClick={toggleuser}  className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-2xl font-extrabold whitespace-nowrap truncate">Your App is cool</span>
            </a>
           
            <nav data-dev-hint="main navigation">
                <a href="#" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <span>About</span>
                </a>
                <a href="#" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                    <span className="ml-6">Without Icon</span>
                </a>
                <a href="#" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white group">
                    <span className="w-4 h-4 flex-shrink-0 border border-gray-600 rounded group-hover:border-gray-400 transition duration-200"></span>
                    <span>Without Icon And a bit longer than usual</span>
                </a>
            </nav>
        </div>

        <nav data-dev-hint="second-main-navigation or footer navigation">
            <a href="#" className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                asd
            </a>
            <a href="#" className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                asd
            </a>
            <a href="#" className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                asd
            </a>
        </nav>
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
============================================== */}


<div className="flex flex-col min-h-screen">



<div className="flex ">
  <div className="w-1/2 h-12"><h1 className="font-bold text-3xl ml-12">Playlists</h1></div>
  <div className="w-1/2 h-12 text-right">Playlist</div>
</div>

  <div className=" pt-3 pb-6 flex-1">
    <div className="container mx-auto">
      <div className="flex flex-wrap md:-mx-3">
        
        <div className="md:w-1/2 px-3 mb-6 w-full">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <figure className="w-2/6 relative">



              <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
              <figcaption className="absolute text-lg -mt-16 text-white px-4">
                <div>
                  <h1>			
                    <i className="fa fa-bars  bg-gray-900 p-1 text-white"></i>
                  </h1>
                </div>
                <div>
                  <h1  className="bg-gray-900 px-2">V : 20</h1>
                </div>
                </figcaption>

            </figure>
            <div className="w-4/6 p-5">
              <h2 className="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div className="flex flex-wrap justify-between items-center mt-6">
                <div className="inline-flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/5.jpg" />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Luke Nunez</h2>
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

        
        <div className="md:w-1/2 px-3 mb-6 w-full">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div className="w-2/6">
              <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div className="flex flex-wrap justify-between items-center mt-6">
                <div className="inline-flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/8.jpg" />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Jonathan Mithu</h2>
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
        
        <div className="md:w-1/2 px-3 mb-6 w-full">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div className="w-2/6">
              <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div className="flex flex-wrap justify-between items-center mt-6">
                <div className="inline-flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/8.jpg" />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Jonathan Mithu</h2>
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
        
        <div className="md:w-1/2 px-3 mb-6 w-full">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div className="w-2/6">
              <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div className="flex flex-wrap justify-between items-center mt-6">
                <div className="inline-flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/8.jpg" />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Jonathan Mithu</h2>
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
        
        <div className="md:w-1/2 px-3 mb-6 w-full">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div className="w-2/6">
              <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div className="flex flex-wrap justify-between items-center mt-6">
                <div className="inline-flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/8.jpg" />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Jonathan Mithu</h2>
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
        
        <div className="md:w-1/2 px-3 mb-6 w-full">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div className="w-2/6">
              <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div className="flex flex-wrap justify-between items-center mt-6">
                <div className="inline-flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/8.jpg" />
                  </div>
                  <div className="flex-1 pl-2">
                    <h2 className="text-white mb-1">Jonathan Mithu</h2>
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
      
      
    </div>
  </div>
</div>

<footer >


<div className="border-t border-solid border-gray-900 mt-4 py-4">
      <div className="container px-4 mx-auto">

        <div className="md:flex md:-mx-4 md:items-center">
          <div className="md:flex-1 md:px-4 text-center md:text-left">
            <p className="text-gray-800">&copy; <strong>CODEADDON</strong></p>
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
