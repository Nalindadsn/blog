import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import db from '../utils/db';
import Product from '../models/Product';
import Category from '../models/Category';
const Home = (props) => {
 
  const { products,categories } = props;
  
  return(
    <div>
      <Head>
        <title>Home Page -codeaddon</title>
      </Head>
{/* //------------------- */}
{console.log(categories)}
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



  {/* --------------------------------------
   */}




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
    
    </div>
  )
}



export default Home
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
