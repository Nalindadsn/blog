
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



const a=`
<div className="treeStruc">
<ul>
<li className="root">
Root 
</li>
<li>
<div className='fa fa-folder'></div>  includes
<ul>
<li><i className='fa fa-sticky-note'></i> config.php</li>
<li><i className='fa fa-sticky-note'></i>ajax.php</li>
</ul>  
</li>
<li><i className='fa fa-sticky-note'></i> index.php</li>

</ul> 

</div> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    
<div><pre className="line-numbers language-markup">
<code>
&lt;img src="example.png"&gt;&lt;img src="example.png"&gt;
&lt;img src="example.png"&gt;&lt;img src="example.png"&gt;
</code>
</pre></div>`




  return (

<div>
  <div className='bg-gray-800 '>
    <h1 className=' p-5 pl-12 pt-20 text-4xl text-white'>{product.name}</h1>
  </div>
  
<div className='container  mx-auto'>



  

<pre className="line-numbers language-markup">
    <code>
    &lt;img src="example.png"&gt;&lt;img src="example.png"&gt;&lt;img src="example.png"&gt;&lt;img src="example.png"&gt;
    </code>
</pre>

</div>



<div className="flex flex-col h-screen container mx-auto">
  <div className="flex flex-1 overflow-hidden">
    <div className="flex flex-1 flex-col">
      <div className="flex bg-gray-300 h-16 p-4"><h2>Directory List</h2></div>
      <div className="flex flex-1 bg-blue-300 overflow-y-auto paragraph px-4">





      <div dangerouslySetInnerHTML={{__html:product.description}}></div>

      </div>
    </div>
    <div className="flex bg-gray-100 w-32 p-4 hdv">Sidebar Sidebar Sidebar Sidebar Sidebar testststst</div>


  </div>
  <div className="flex">Footer</div>
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