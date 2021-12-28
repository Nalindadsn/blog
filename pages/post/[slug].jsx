
import Layout from '../../components/Layout'
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
  
<br/>
<br/>
<br/>
{product.name}

<pre class="line-numbers">
    <code class="language-css">

    </code>
</pre>

<pre class="line-numbers language-markup">
    <code>
        &lt;img src="example.png"&gt;
    </code>
</pre>


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