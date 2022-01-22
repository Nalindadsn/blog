import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import db from '../utils/db';
import Product from '../models/Product';
import Category from '../models/Category';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
const Home = (props) => {
 
  const router = useRouter()
    const { state, dispatch } = useContext(Store)
    const { darkMode, cart, userInfo } = state
  
  const { products,categories } = props;
  
  return(
    <div>
      <Head>
        <title>Home Page -codeaddon</title>
      </Head>
{/* //------------------- */}
<NavBar/>

<div className="bg-gray-800 relative">
{/* <div className=' bg-gray-900   z-20' style={{width:"100%",height:"100%",position:"fixed"}}></div> */}


<div className=" mx-auto  ">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    
    
    <div className="relative  py-12  pl-12 ml-12  hidden md:block ">
    <div className="m-auto">
    <figcaption className="absolute -left-5 top-24 text-lg -mt-16 text-white px-4 pt-12  ">
    <div className="shadow">
      <h1  className="bg-sky-600 px-2 ">F</h1>
      <h1  className="bg-red-500 px-2 ">Y</h1>
      <h1  className="bg-sky-300 px-2 ">T</h1>
    </div>
    </figcaption>
    <h4 className="font-medium text-gray-300 pt-20"><i className="fa fa-globe "></i> Web Development</h4>
      <h2 className="font-bold text-5xl text-white leading-tight mt-3 mb-6">WELCOME TO <span className="text-amber-500 shadow">CODEADDON</span></h2>
      <span className="font-normal text-gray-300"> Solve all your web designing and development conflicts with our advanced and easy tutorials.</span>
      <div id="buttons" className="font-medium flex flex-row mt-6">
        {
          userInfo?(
            <div className='text-white'>Hello, <span className='bg-white text-gray-800 py-1 px-2 rounded'>{userInfo.name}</span></div>
          ):(
            
        <Link href="/login">
        <a className='mx-4 p-2 px-4 border-2 text-white border-white rounded-lg hover:text-white hover:bg-gray-900 cursor-pointer'>Sign In</a>
        </Link>
          )
        }
      </div></div>
    </div>


    <div className=" justify-center relative  my-auto ">
<div className='bg-gray-900/50 md:bg-gray-900/0 absolute w-full h-full z-20' ></div>
    <figcaption className="absolute right-0 top-28 text-lg -mt-16 text-white px-4 pt-12 z-30  block md:hidden ">
    <div className=" p-5">
      <h1  className="bg-sky-600 px-2 ">F</h1>
      <h1  className="bg-red-500 px-2 ">Y</h1>
      <h1  className="bg-sky-300 px-2 ">T</h1>
    </div>
    </figcaption>
    <figcaption className="absolute -left-5 top-0 text-lg -mt-16 text-white px-4 pt-12 block md:hidden z-20">

<div className=" py-5 pl-5  mr-6 pr-7">
      <h4 className="font-medium text-white pt-12 mt-5 text-shadow-lg  	 ml-10"><i className="fa fa-globe"></i> Web Development</h4>
      <h2 className="font-bold text-4xl text-white leading-tight  text-shadow-lg pt-1 pb-2	">WELCOME TO <span className="text-amber-500 shadow">CODEADDON</span></h2>
      <span className="font-small text-white pt-0 text-shadow-lg	 "> Solve all your web designing and development conflicts with our advanced and easy tutorials.</span>
      <div id="buttons" className="font-medium flex flex-row py-2 rounded">
      {
          userInfo?(
            <div className='text-white'>Hello, <span className='bg-white text-gray-800 py-1 px-2 rounded'>{userInfo.name}</span></div>
          ):(
            
        <Link href="/login">
        <a className=' underline  text-slate-200 hover:text-white  cursor-pointer z-30'>Sign In</a>
        </Link>
          )
        }
        {/* <a className="mx-4 p-2 px-4 border-2 text-white border-white rounded-lg  bg-gray-800 hover:text-white hover:bg-gray-900 cursor-pointer">Register</a> */}
      
      </div>
</div>
</figcaption>

<div className='bg-white h-12'></div>
<Image width="675" height="528" className="z-10 pb-14 object-cover h-full w-full block md:hidden sm:hidden" src="https://res.cloudinary.com/masterdevs/image/upload/v1640121452/codeaddon/codeaddon-banner-web-development_vibee4.png" alt='codeaddon-banner-web-development' />




    </div>

    
  </div>
</div>



  </div>



{/* 
  -------------------------------------7----------- */}


<div className='text-center  w-full p-5 pt-12'>
{categories?.map((category) => (
  <Link href='/' key={category._id}>
    <a className="md:w-1/5 px-3 mb-1 bg-gray-800 text-white p-2 m-1 inline-block">
        {category.name}
      </a>
  </Link>
      ))}
</div>



  {/* --------------------------------------
   */}


<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
  
  <div className="border-b mb-5 flex justify-between text-sm">
    <div className="text-amber-500 flex items-center pb-2 pr-2 border-b-2 border-amber-500 uppercase">
  
      <h4 className="font-semibold inline-block">Latest Posts</h4>
    </div>
    <Link href="/articles">
      <a>See All</a>
    </Link>
    
  </div>
  
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
<a className="text-xs text-amber-500 transition duration-500 ease-in-out"><i className="	fa fa-circle"></i> {product.category}</a>
</Link>
      
      

  
</div>
<Link href={`/post/${product.slug}`}>
  <a className="font-medium text-lg inline-block hover:text-amber-500 transition duration-500 ease-in-out inline-block mb-2">{product.name}</a>
</Link>
    <p className="text-gray-500 text-sm">
    {product.descriptionShort}
    </p>
  </div>
  <div className="flex items-center px-6 pb-4">
      
      <Image width={50} height={50} className="w-12 h-12 rounded-full mr-2" src={"https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg"} alt="Nalinda Dissanayaka"/>
      <div className="text-sm">
        <h4 className="text-gray-900 font-medium leading-none hover:text-amber-500">Nalinda Dissanayaka</h4>
        <p className="text-gray-600">{product.createdAt}</p>
      </div>
    </div>
</div>        

))}        
      

    
  </div>
  <div className='text-center pt-12'>
<Link href="/articles" > 
      <a className="border border-gray-600 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white">Show More</a>
      </Link> 

  </div>
</div>


  




{/* 
  ------------------------------------------------- */}
{/*     
    <div className="max-w-screen-xl mx-auto p-4">
  <h1 className="text-5xl font-extrabold mb-4 text-center text-indigo-700">Tailwind CSS news feed #2</h1>
  <div className="flex flex-col md:flex-row -mx-1.5 px-4 pt-4">
    <a href="https://www.bbc.co.uk/news/technology-59520815" target="_blank" className="h-64 md:h-80 w-full md:w-1/2 mx-1.5 mb-4 md:mb-0 group">
      <div className="h-64 md:h-80 relative">
        <img src="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&h=320q=80" className="absolute z-0 object-cover w-full h-64 md:h-80 rounded-lg" />
        <div className="absolute gradient w-full h-64 md:h-80 rounded-lg z-10"></div>
        <div className="absolute left-0 right-0 bottom-0 p-4 z-20">
          <h1 className="font-bold text-white leading-tight sm:mb-2 group-hover:underline text-2xl md:text-3xl">The technology helping keep women safe on the streets</h1>
          <div className="text-xs text-white hidden sm:block">
            <div className="flex items-center">
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="h-3 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
              </svg>
              <span className="text-xs text-white">20h | Stephen Ainsworth</span>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a href="https://www.bbc.co.uk/news/technology-59596267" target="_blank" className="h-64 md:h-80 w-full md:w-1/2 mx-1.5 group">
      <div className="h-64 md:h-80 relative">
        <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&h=320q=80" target="_blank" className="absolute z-0 object-cover w-full h-64 md:h-80 rounded-lg" />
        <div className="absolute gradient w-full h-64 md:h-80 rounded-lg z-10"></div>
        <div className="absolute left-0 right-0 bottom-0 p-4 z-20">
          <h1 className="font-bold text-white leading-tight sm:mb-2 group-hover:underline text-2xl md:text-3xl">Football fans spending millions on club crypto-tokens</h1>
          <div className="text-xs text-white hidden sm:block">
            <div className="flex items-center">
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="h-3 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
              </svg>
              <span className="text-xs text-white">2d | Stephen Ainsworth</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
  <div className="flex flex-col md:flex-row -mx-1.5 p-4">
    <div className="w-full md:w-1/2 mx-1.5">
      <a href="https://www.bbc.co.uk/news/technology-59609996" target="_blank" className="flex items-center group mb-3 pb-3 border-b">
        <img src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=96&q=80" className="rounded-md object-cover mr-3 h-24 w-24" />
        <div className="flex-1">
          <h2 className="text-gray-700 font-bold text-lg md:text-xl leading-tight transition group-hover:text-blue-500 mb-2">Meta releases social VR space Horizon Worlds</h2>
          <div className="flex items-center">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="h-3 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
            </svg>
            <span className="text-xs md:text-sm text-gray-700">2d | <span className="text-black">Stephen Ainsworth</span></span>
          </div>
        </div>
      </a>
      <a href="https://www.bbc.co.uk/news/technology-59346063" target="_blank" className="flex items-center group mb-3 pb-3 border-b">
        <img src="https://images.unsplash.com/photo-1517328894681-0f5dfabd463c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=formatt&fit=crop&w=96&q=80" className="rounded-md object-cover mr-3 h-24 w-24" />
        <div className="flex-1">
          <h2 className="text-gray-700 font-bold text-lg md:text-xl leading-tight transition group-hover:text-blue-500 mb-2">Google issues warning to location-sharing apps
          </h2>
          <div className="flex items-center">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="h-3 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
            </svg>
            <span className="text-xs md:text-sm text-gray-700">4d | <span className="text-black">Stephen Ainsworth</span></span>
          </div>
        </div>
      </a>
      <a href="https://www.bbc.co.uk/news/technology-59594002" target="_blank" className="flex items-center group mb-3 pb-3 border-b md:mb-0 md:pb-0 md:border-none">
        <img src="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=96&q=80" className="rounded-md object-cover mr-3 h-24 w-24" />
        <div className="flex-1">
          <h2 className="text-gray-700 font-bold text-lg md:text-xl leading-tight transition group-hover:text-blue-500 mb-2">Click News: Four-wheeled robot walks upright</h2>
          <div className="flex items-center">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="h-3 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
            </svg>
            <span className="text-xs md:text-sm text-gray-700">3d | <span className="text-black">Stephen Ainsworth</span></span>
          </div>
        </div>
      </a>
    </div>
    <div className="w-full md:w-1/2 mx-1.5">
      <a href="https://www.bbc.co.uk/news/world-asia-india-59627124" target="_blank" className="flex items-center group mb-3 pb-3 border-b">
        <img src="https://images.unsplash.com/photo-1551817958-d9d86fb29431?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=96&q=80" className="rounded-md object-cover mr-3 h-24 w-24" />
        <div className="flex-1">
          <h2 className="text-gray-700 font-bold text-lg md:text-xl leading-tight transition group-hover:text-blue-500 mb-2">Modi's Twitter hacked with bitcoin tweet</h2>
          <div className="flex items-center">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="h-3 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
            </svg>
            <span className="text-xs md:text-sm text-gray-700">3d | <span className="text-black">Stephen Ainsworth</span></span>
          </div>
        </div>
      </a>
      <a href="https://www.bbc.co.uk/news/uk-scotland-59476519" target="_blank" className="flex items-center group mb-3 pb-3 border-b">
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=formatt&fit=crop&h=96&q=80" className="rounded-md object-cover mr-3 h-24 w-24" />
        <div className="flex-1">
          <h2 className="text-gray-700 font-bold text-lg md:text-xl leading-tight transition group-hover:text-blue-500 mb-2">'Esports has massive potential in Scotland'</h2>
          <div className="flex items-center">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="h-3 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
            </svg>
            <span className="text-xs md:text-sm text-gray-700">4d | <span className="text-black">Stephen Ainsworth</span></span>
          </div>
        </div>
      </a>
      <a href="https://www.bbc.co.uk/news/technology-56996717" target="_blank" className="flex items-center group">
        <img src="https://images.unsplash.com/photo-1521542464131-cb30f7398bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=96&q=80" className="rounded-md object-cover mr-3 h-24 w-24" />
        <div className="flex-1">
          <h2 className="text-gray-700 font-bold text-lg md:text-xl leading-tight transition group-hover:text-blue-500 mb-2">Six million routers had serious security flaw</h2>
          <div className="flex items-center">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" className="h-3 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
            </svg>
            <span className="text-xs md:text-sm text-gray-700">4d | <span className="text-black">Stephen Ainsworth</span></span>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
<div className="text-center text-sm">
  Created by <a href="https://stephenainsworth.com" target="_blank" title="Stephen Ainsworth - Web Developer" className=" transition hover:text-blue-500">Stephen Ainsworth</a>
</div>
 */}


<Footer/>


    </div>
  )
}



export default Home
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