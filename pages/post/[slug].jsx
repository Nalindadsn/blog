
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



<div class="flex h-screen bg-green-300">
  <div class="flex-1 flex flex-col overflow-hidden">

    <div class="flex h-full">

      <main class="flex flex-col w-full  overflow-x-hidden overflow-y-auto mb-14 bg-gray-800">
        <div class="flex w-full mx-auto px-6 py-8">
          <div class="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
            <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
            <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
            <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
            <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
            <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
          </div>
        </div>
      </main>
      <nav class="flex w-200 h-full bg-gray-800">
        <div class="w-full flex mx-auto px-6 py-8">
          <div class="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">Rightbar</div>
        </div>
      </nav>
    </div>
  </div>
</div>

<div class="flex flex-col h-screen">
  <div class="flex flex-1 overflow-hidden">
    <div class="flex flex-1 flex-col">
      <div class="flex bg-gray-300 h-16 p-4">Header</div>
      <div class="flex flex-1 bg-blue-300 overflow-y-auto paragraph px-4">
        Creative Writing Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing. Tackle Writers' Block A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. Beginning Writing Routine Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers. Writing Challenge Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph. Creative Writing Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing. Tackle Writers' Block A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. Beginning Writing Routine Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers. Writing Challenge Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph. Creative Writing Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing. Tackle Writers' Block A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. Beginning Writing Routine Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers. Writing Challenge Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.
      </div>
    </div>
    <div class="flex bg-gray-100 w-32 p-4 visible">Sidebar testststst</div>


  </div>
  <div class="flex">Footer</div>
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