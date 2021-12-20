import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from "react";

export default function Home() {

  const [showMe, setShowMe] = useState(false);
  const [showMe2, setShowMe2] = useState(false);

  function toggle(){
    setShowMe(!showMe);
  }

  function toggleuser(){
    setShowMe2(!showMe2);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="web development tutorials " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
    


      <nav className="bg-gray-800 w-full h-16  px-8   shadow-md fixed z-50" >
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

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
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center text-white">
         <a href="https://www.codeaddon.com/"> CODEADDON</a>

        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">

            <a href="https://www.codeaddon.com/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>

            <a href="https://www.codeaddon.com/articles" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Articles</a>

            <a href="https://www.codeaddon.com/playlists" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Video Tutorials</a>

            <a href="https://www.codeaddon.com/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>
            <a href="https://www.codeaddon.com/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
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

      <a href="https://www.codeaddon.com/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2  text-base font-medium">About Us</a>
      <a href="https://www.codeaddon.com/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2  text-base font-medium">Contact Us</a>
    </div>
  </div>
</nav>



{/* //------------------- */}

<div className="bg-gray-800">

<div className=" mx-auto  py-24 ">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    <div className="   py-12  pl-12">

    <h4 className="font-medium text-gray-300">Same chats, new different experience</h4>
      <h2 className="font-bold text-5xl text-white leading-tight mt-3 mb-6">It looks better and cleaner!</h2>
      <span className="font-normal text-gray-300">Your favorite messaging app just got the best looking update yet! Now it feels like a breath of fresh air.</span>
      <div id="buttons" className="font-medium flex flex-row mt-6">
        <div className="mr-3 pl-0 p-2 cursor-pointer hover:underline  text-gray-300"><a href="#watch-video">Watch video</a></div>
        <div className="mx-4 p-2 px-4 border-2 text-white border-white rounded-lg hover:text-white hover:bg-gray-400 cursor-pointer">Download</div>
      </div>


    </div>
    <div className=" justify-center   ">


    <figure className="relative">



<img className="object-cover h-full w-full" src="https://res.cloudinary.com/masterdevs/image/upload/v1639856212/codeaddon/12_ykiumq.jpg" />
<figcaption className="absolute right-0 top-12 text-lg -mt-16 text-white px-4">

  <div>
    <h1  className="bg-sky-600 px-2 ">F</h1>
    <h1  className="bg-red-500 px-2 ">Y</h1>
    <h1  className="bg-sky-300 px-2 ">T</h1>
  </div>
  </figcaption>

</figure>

    </div>
  </div>
</div>



  </div>



{/* 
  -------------------------------------7----------- */}


<div className="flex flex-col min-h-screen">
  <div className="">
    
    
    <div className="flex justify-center border-t  py-5">
      <a href="#" className="mx-4 p-2 px-4 border-2 bg-gray-900 text-white border-white rounded-lg hover:text-white hover:bg-gray-800 cursor-pointer">Articles</a>
      <a href="#" className="text-gray-600 mx-5 hover:text-gray-500">Recommends</a>
      <a href="#" className="text-gray-600 mx-5 hover:text-gray-500">Subscriptions</a>
    </div>
  </div>
  <div className=" pt-12 pb-6 flex-1">
    <div className="container mx-auto">
      <div className="flex flex-wrap md:-mx-3">
        
        <div className="md:w-1/2 px-3 mb-6 w-full">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div className="w-2/6">
              <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80" />
            </div>
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
      <div className="text-center">
        <button className="border border-gray-600 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white">Show More</button>
      </div>
    </div>
  </div>
</div>


{/* 
  ------------------------------------------------- */}
<div className=" bg-gray-800 ">

<div className="flex flex-col items-center w-2/3 sm:w-3/3 mx-auto pb-12 ">
	<h1  className="font-bold text-4xl pt-6 text-white leading-tight mt-3 mb-6">Video Tutorials</h1>

	<div 
    	className="relative h-0 overflow-hidden max-w-full w-full" 
		style={{paddingBottom: '56.25%'}}
 	>
		<iframe id="watch-video" 
       		src="https://www.youtube.com/embed/UBOj6rqRUME"
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full "
        ></iframe>
	</div>
</div>  

</div>



  
  <div  id="beta-test" className="py-24">
    <h2 className="text-center text-4xl font-bold">Sign up for beta</h2>
      <form id="form"  action="https://www.freecodecamp.com/email-submit">
        <div className="w-2/3 mt-12 mx-auto flex flex-row flex-no-wrap shadow-xl">
          <input className="flex-grow bg-transparent py-4  placeholder-gray-500 bg-gray-800 rounded-l-lg text-gray-300 outline-none" type="email" id="email" name="email" placeholder="Enter your email address" required />
          <input className="py-2 px-4 text-white bg-gray-900 rounded-r-lg text-gray-500" type="submit" id="submit" value="Sign up" />
        </div>
      </form>
  </div>
 
 



      </main>

      <footer className={styles.footer}>


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
                  <p className="text-white">&copy; <strong>CODEADDON</strong></p>
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
  )
}
