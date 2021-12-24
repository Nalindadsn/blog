import Head from 'next/head';

import Image from 'next/image'
import Link from 'next/link'
import React, { useState,useContext } from "react";
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';


export default function Layout({ children },props) {
  const router = useRouter();

    const {state,dispatch}=useContext(Store);
    const {darkMode,userInfo}=state;
    const [showMe, setShowMe] = useState(false);
    const [showMe2, setShowMe2] = useState(false);
  
    function toggle(){
      setShowMe(!showMe);
    }
  
    function toggleuser(){
      setShowMe2(!showMe2);
    }
    const darkModeChangeHandler = () => {
      dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
      const newDarkMode = !darkMode;
      Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const loginClickHandler = (e) => {
      setAnchorEl(e.currentTarget);
    };
    const loginMenuCloseHandler = () => {
      setAnchorEl(null);
    };
    const logoutClickHandler = () => {
      setAnchorEl(null);
      dispatch({ type: 'USER_LOGOUT' });
      Cookies.remove('userInfo');
      Cookies.remove('cartItems');
      toggleuser()
      router.push('/');
    };
    

  return (
    <div>
    <Head>

    <title>Create Next App</title>
        <meta name="description" content="web development tutorials " />
        <link rel="icon" href="../favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>

    <main>

    <nav className="bg-gray-800 w-full h-16  px-1   shadow-md fixed z-50" >
  <div className="max-w-7xl mx-0 p-0 sm:px-2 lg:px-6">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center md:hidden">

        <button  onClick={toggle} type="button" className="inline-flex items-center justify-center p-2  text-gray-400 hover:text-white bg-gray-700/10 hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white fixed top-16 z-50" aria-controls="mobile-menu" aria-expanded="false">
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
         <Link href="/"><a className='font-bold pl-0 md:pl-0 sm:pl-0'> <span className='text-amber-500 pl-0 md:pl-0 sm:pl-0 '><i className="fa fa-chevron-left"></i>CODE<i className="fa fa-chevron-right"></i></span>ADDON</a></Link>

        </div>
        <div className="hidden md:block md:ml-2 lg:ml-6">
          <div className="flex space-x-4">
            <Link href="/">
              <a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
            </Link>
            
            
            
<Link href="/articles">
<div className="dropdown inline-block relative ml-1">
  <button className="bg-gray-800 text-white font-semibold py-2 px-3 rounded inline-flex items-center">
    <span className="mr-1">Articles</span>
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
  </button>
  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
    <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
    <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
    <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
  </ul>
</div>
</Link>           
<Link href="/articles">
<div className="dropdown inline-block relative ml-1">
  <button className="bg-gray-800 text-white font-semibold py-2 px-3 rounded inline-flex items-center">
    <span className="mr-1">Videos</span>
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
  </button>
  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
    <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">php</a></li>
    <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
    <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
  </ul>
</div>
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
        {
            userInfo ? (
            
              ""
            ):(  
        <Link href='/login'>
        <a className="border-2 text-white border-white  py-1 px-3 mr-1 rounded-full text-gray-400 hover:text-gray-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          Login
        </a>
        </Link>
        )}
         {
            userInfo ? (
            
              ""
            ):(  
        <a href='' className="border-2 text-white border-white  py-1 px-3  rounded-full text-gray-400 hover:text-gray-800 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          Register
        </a>
            )
        }
        <div className="ml-3 relative">
          {userInfo?userInfo.name:"no"}
          {
            
            userInfo ? (

          <div>
            <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img  onClick={toggleuser}  className="h-8 w-8 rounded-full" src={userInfo.image} alt="" />
              
            </button>
          </div>
            ):(
              ""
            )

          }


          <div  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1"  style={{
        display: showMe2?"block":"none"
      }}>
        <Link href="/profile">
          <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
        </Link>
        <Link href="/settings">
          <a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
        </Link>
          <div  onClick={logoutClickHandler} className="block px-4 py-2 text-sm text-gray-700 cursor-pointer" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</div>
          </div>
        </div>
      </div>
    </div>
  </div>




</nav>



<aside id="sidebar" className="z-40 bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0  inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto hidden md:block  fixed" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"  style={
          showMe!==""?(showMe?{ display:"block"}:{display:"none" }):({})
      }>
        <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
    
     
          
          <a href="#" className="text-white flex items-center space-x-2 px-4" title="Your App is cool">
            
            </a>
           
            <nav data-dev-hint="main navigation">
                <a href="https://www.codeaddon.com/" className="mt-14 flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
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

{/* //------------------- */}
    {/* 
style={{ backgroundColor: darkMode?"black":"red"}} 
      */}
 

{children}
{/* //------------------- */}


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
export async function getServerSideProps() {
  await db.connect()
  const products = await Product.find({}).lean()
  const categories = await Category.find({}).lean()


  await db.disconnect()
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)).map(
        db.convertDocToObj
      ),
      categories: JSON.parse(JSON.stringify(categories)).map(
        db.convertDocToObj
      ),
    },
  }
}
