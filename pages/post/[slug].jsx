
import db from '../../utils/db';
import Product from '../../models/Product';

import Prism from "prismjs";
import "prismjs/components/prism-hcl";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';


export default function PostScreen(props) {
    const { product } = props;
    if (!product) {
        return <div>Product Not Found</div>;
      }
      useEffect(() => {
        if (typeof window !== 'undefined') {
          Prism.highlightAll();
        }
      }, []);




  return (

<div>
<Head>
        <title>{product.name} - Codeaddon </title>
        <meta name="description" content={product.description}></meta>
      </Head>
  <div className='bg-gray-800 '>
    
  </div>
  








<NavBar/>

<div  className="relative min-h-screen md:flex" data-dev-hint="container">


    <div id="content"  className="flex-1 p-6 lg:px-8">
        <div  className="max-w-7xl mx-auto">
            <div  className="px-4 py-6 sm:px-0">
                <div  className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <h1 className=' p-5 pt-12 pl-0 text-4xl '><strong>{product.name}</strong></h1>
                <div className='bg-gray-800 p-3 rounded'>
                <Image src={product.image} width="882" height="332" alt="Check Email Availaility tutorial_php"/>

                </div>
                <div dangerouslySetInnerHTML={{__html:product.description}} className='mb-5'></div>
                <br/>
                </div>
            </div>
        </div>
    </div>
    

    <aside id="sidebar"  className=" shadow md:w-64 w-3/4 space-y-6  px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
        <div  className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
            
            

            <nav data-dev-hint="main navigation">
                
                
            </nav>
        </div>


    </aside>

</div>












</div>
 



  )
}
export async function getServerSideProps(context) {
    const { params } = context;
    const { slug } = params;
  
    await db.connect();
    const product = await Product.findOne({ slug }).lean();
    await db.disconnect();
    return {
      props: {
        product: db.convertDocToObj(JSON.parse(JSON.stringify(product))),
        
      },
    };
  }