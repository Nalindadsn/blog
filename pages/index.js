import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { useState } from "react";
import db from '../utils/db';
import Product from '../models/Product';
import Category from '../models/Category';
import Layout from '../components/Layout';

export default function Home(props) {

  const { products,categories } = props;
  const [showMe, setShowMe] = useState(false);
  const [showMe2, setShowMe2] = useState(false);

  function toggle(){
    setShowMe(!showMe);
  }

  function toggleuser(){
    setShowMe2(!showMe2);
  }

return (
<Layout>

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
    <h4 className="font-medium text-gray-300 pt-20">Same chats, new different experience</h4>
      <h2 className="font-bold text-5xl text-white leading-tight mt-3 mb-6">under maintenance!</h2>
      <span className="font-normal text-gray-300"> Your favorite messaging app just got the best looking update yet! Now it feels like a breath of fresh air.</span>
      <div id="buttons" className="font-medium flex flex-row mt-6">
        <a href="#watch-video" className='mx-4 p-2 px-4 border-2 text-white border-white rounded-lg hover:text-white hover:bg-gray-900 cursor-pointer'>Sign In</a>
        {/* <a className="mx-4 p-2 px-4 border-2 text-white border-white rounded-lg hover:text-white hover:bg-gray-900 cursor-pointer">Register</a> */}
      </div>
      


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
    <figcaption className="absolute -left-5 top-0 text-lg -mt-16 text-white px-4 pt-12 block md:hidden">


<div className="shadow py-5 pl-5  mr-6 pr-7">
<h4 className="font-medium text-white pt-12 mt-5 text-shadow-lg  	 ml-10">Same chats, new different experience</h4>
      <h2 className="font-bold text-4xl text-white leading-tight  text-shadow-lg pt-1 pb-2	">under maintenance!</h2>
      <span className="font-small text-white pt-0 text-shadow-lg	 "> Your favorite messaging app just got the best looking update yet! Now it feels like a breath of fresh air.</span>
      <div id="buttons" className="font-medium flex flex-row mt-4">

      <a href="#watch-video" className='mx-4 p-2 px-4 border-2 text-white border-white rounded-lg hover:text-white hover:bg-gray-900 cursor-pointer'>Sign In</a>
        <a className="mx-4 p-2 px-4 border-2 text-white border-white rounded-lg hover:text-white hover:bg-gray-900 cursor-pointer">Register</a>
      
      </div>
</div>
</figcaption>


<div className='bg-white h-12'></div>
<Image width="675" height="528" className=" pb-14 object-cover h-full w-full " src="https://res.cloudinary.com/masterdevs/image/upload/v1640121452/codeaddon/codeaddon-banner-web-development_vibee4.png" alt='codeaddon-banner-web-development' />




    </div>
  </div>
</div>



  </div>



{/* 
  -------------------------------------7----------- */}



<div className='text-center  w-full p-5'>
{categories?.map((category) => (
      <a href='' key={category._id} className="md:w-1/5 px-3 mb-1 bg-gray-800 text-white p-2 m-1 inline-block">
        {category.name}
      </a>
      ))}
</div>



<div className="flex flex-col min-h-screen md:px-3">
  <div className="">
    
    
    <div className="flex justify-center   py-5">

      <h2 className=' pt-12 pb-5 font-bold text-4xl text-gray-900 '> Latest Atricles </h2>
    </div>
  </div>
  <div className=" pb-6 flex-1">
    <div className="container mx-auto">
      <div className="flex flex-wrap md:-mx-3">

        
 
      {products?.map((product) => (


        <div key={product._id} className="md:w-1/2 px-3 mb-6 w-full ">
          <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded shadow">
            <div className="w-2/6">
            <div style={{position:"relative",width:"100%",paddingBottom:"100%"}}>
              <Image
      src="https://res.cloudinary.com/masterdevs/image/upload/v1640117880/codeaddon/codeaddon-banner_tmtp8t.png"
      alt={product.name}
      layout='fill'
      objectFit='cover'
    />

            </div>
            </div>
            <div className="w-4/6 p-5">
              <h2 className="text-white leading-normal text-lg">
              <Link href={`/post/${product.slug}`}>
          <a>{product.name}</a>
        </Link>
                 </h2>
              <div className="flex flex-wrap justify-between items-center mt-6 ">
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

))}        
      
      
      </div>
      <div className="text-center">
      <Link href="/articles" > 
      <a className="border border-gray-600 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white">Show More</a>
      </Link> 

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
 
 



    </Layout>
  )
}

// export async function getServerSideProps(context) {

//   await db.connect()
//   const products = await Product.find({}).lean();
//   const categories = await Category.find({}).lean();

//   await db.disconnect()
//   return {
//     props: {
//       products: db.convertDocToObj(JSON.parse(JSON.stringify(products))),
//       categories: db.convertDocToObj(JSON.parse(JSON.stringify(categories))),
//     },
//   }
// }
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
