
import db from '../../utils/db';
import Product from '../../models/Product';

import Prism from "prismjs";
import "prismjs/components/prism-hcl";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import { useEffect } from 'react';
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
  <div className='bg-gray-800 '>
    <h1 className=' p-5 pl-12 pt-20 text-4xl text-white'>{product.name}</h1>
  </div>
  


<div class="flex flex-col h-screen container mx-auto">
  <div class="flex flex-1 overflow-hidden">
    <div class="flex flex-1 flex-col">
      <div class="flex bg-gray-300 h-16 p-4"><h2>Directory List</h2></div>
      <div class="flex flex-1 bg-blue-300 overflow-y-auto paragraph px-4">

      <div dangerouslySetInnerHTML={{__html:product.description}}></div>
  

      </div>
    </div>
    <div class="flex bg-gray-100 w-32 p-4 hdv">Sidebar Sidebar Sidebar Sidebar Sidebar testststst</div>


  </div>

</div>

<Footer/>

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