
import db from '../../utils/db';
import Product from '../../models/Product';

import Prism from "prismjs";
import "prismjs/components/prism-hcl";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import { useEffect } from 'react';


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
  
<div className='container  mx-auto'>

<h2>Directory List</h2>
<div dangerouslySetInnerHTML={{__html:product.description}}></div>
  

<pre className="line-numbers language-markup">
    <code>
    &lt;img src="example.png"&gt;&lt;img src="example.png"&gt;&lt;img src="example.png"&gt;&lt;img src="example.png"&gt;
    </code>
</pre>

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