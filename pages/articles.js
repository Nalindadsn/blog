
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from "react";

import Link from 'next/link'
import Footerb from '../components/Footerb';
import db from '../utils/db';
import Product from '../models/Product';
import Category from '../models/Category';
import NavBar from '../components/NavBar';

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


<NavBar/>


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

    <main id="content" className="flex-1 lg:px-0 ">

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




<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    






    {products?.map((product) => (



  <div key={product._id} className="rounded overflow-hidden shadow-lg flex flex-col">
<Link href={`/post/${product.slug}`}>
<a className='p-2 bg-gray-800'>
  <Image className="w-full" src={product.image} width="886" height="332" alt={product.name}/>
</a>

</Link>
<div className="px-6 py-4 mb-auto">
  <div className="mb-3">
<Link href={product.category}>
<a className="text-xs text-indigo-600 transition duration-500 ease-in-out">{product.category}</a>
</Link>
    
    


</div>
<Link href={`/post/${product.slug}`}>
<a className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{product.name}</a>
</Link>
  <p className="text-gray-500 text-sm">
  {product.descriptionShort}
  </p>
</div>
<div className="flex items-center px-6 pb-4">
    
    <Image width={50} height={50} className="w-12 h-12 rounded-full mr-2" src={"https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg"} alt="Nalinda Dissanayaka"/>
    <div className="text-sm">
      <h4 className="text-gray-900 font-medium leading-none hover:text-indigo-600">Nalinda Dissanayaka</h4>
      <p className="text-gray-600">{product.createdAt}</p>
    </div>
  </div>
</div>        

))}        
    

  
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