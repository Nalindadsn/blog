
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from "react";

import Link from 'next/link'
import Footerb from '../../components/Footerb';
import db from '../../utils/db';
import Product from '../../models/Product';
import Category from '../../models/Category';
import Cat from '../../components/Cat';

export default function Articles(props) {


  const { products,categories } = props;
  
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



    <aside id="sidebar" className="mt-0 z-40 bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-0 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto hidden md:block  hdd" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"  style={
          showMe!==""?(showMe?{ display:"block"}:{display:"none" }):({})
      }>
        <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
    
     
          
          <a href="#" className="text-white flex items-center space-x-2 px-4" title="Your App is cool">
            
            </a>
           
            <nav data-dev-hint="main navigation">
              <Link href="/">
                <a className="mt-14 flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                    <i className="fa fa-home"></i>
                    <span>Home</span>
                </a>
              </Link>
              <Link href="/articles">
                <a className="flex items-center space-x-2 py-2 px-4 transition duration-200 bg-gray-700 hover:bg-gray-700 hover:text-white">
                    <i className="fa fa-book"></i>
                    <span>Articles</span>
                </a>
              </Link>
              {/* <Link href="/playlists">
                <a className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                <i className="fa fa-youtube-play"></i>
                    <span>Video Tutorials</span>
                </a>
              </Link> */}
              <Link href="/quizzes">
                <a className="flex items-center space-x-2 py-2 px-4 transition duration-200 text-white hover:bg-gray-700 hover:text-white">
                <i className="fa fa-sticky-note"></i>
                    <span>Quizzes</span>
                </a>
              </Link>
              <Link href="/about">
                <a className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                <i className="fa fa-info"></i>
                    <span>About Us</span>
                </a>
              </Link>
              <Link href="/contact">
                <a className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                <i className="fa fa-envelope"></i>
                    <span>Contact Us</span>
                </a>
              </Link>
              {/* <Link href="/contact">
                <a className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white bg-red-500">
                <i className="fa fa-envelope"></i>
                    <span>LOGOUT</span>
                </a>
              </Link> */}
                
            </nav>
        </div>


    </aside>

    <main id="content" className="flex-1 lg:px-0">

        <div className="max-w-7xl mx-auto">

            <div className="px-4  ">
                <div className=" rounded-lg h-96">

                <button   onClick={toggle} type="button" className="tg absolute z-30 left-3  top-16  inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-gray-900  " aria-controls="mobile-menu" aria-expanded="false">
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



<div className="flex md:pt-20 sm:pt-20">
  <div className="w-1/2 h-12"><h1 className="font-bold text-3xl ml-14">Articles</h1></div>
  <div className="w-1/2 h-12 text-right mr-3"><a href="">Home</a>/<a href="">Articles</a>   </div>
</div>

  <div className=" pt-0 pb-6 flex-1">
    <div className="container mx-auto">








    <div className="container mx-auto px-0 leading-normal">



    <div>



  {/* --------------------------------------
   */}




<div className="flex flex-col min-h-screen md:px-0">

  <div className=" pb-6 flex-1">
    <div>
      <div className="flex flex-wrap md:-mx-3">

        
 
      {products?.map((product) => (


        <div key={product._id} className="md:w-1/2 px-3 mb-6 w-full ">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded shadow">
            <div className="w-2/6">
            <div style={{position:"relative",height:"100%",paddingBottom:"100%"}}>
              <Image
      src="https://res.cloudinary.com/masterdevs/image/upload/v1640117880/codeaddon/codeaddon-banner_tmtp8t.png"
      alt={product.name}
      layout='fill'
      objectFit='cover'
    />

            </div>
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white font-bold	 leading-normal text-lg">
              <Link href={`/post/${product.slug}`}>
          <a>{product.name}</a>
        </Link>
                 </h2>

<p className='text-slate-300'>

{/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor  */}

</p>

              <div className="flex flex-wrap justify-between items-center mt-3 ">
                <div className="inline-flex items-center shadow">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ">
                    <Image width="256" height="256" src="https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg" alt='Nalinda Dissanayaka - author' />
                  </div>
                  <div className="flex-1 pl-2">
                  <Cat props={product.category} />
                    <h2 className="text-white mb-1">Nalinda Dissanayaka</h2>
                    <p className="text-white opacity-50 text-xs">{product.createdAt}</p>
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

))}        
      
      
      </div>
      
    </div>
  </div>
</div>


{/* 
  ------------------------------------------------- */}



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




      </div>

 
    </div>
  )
}

export async function getServerSideProps() {
  await db.connect()
  const products = await Product.find({}).lean().limit(6)
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