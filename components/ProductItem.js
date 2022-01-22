import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductItem({ product, addToCartHandler }) {
  return (


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
      
      <Image width={50} height={50} className="w-12 h-12 rounded-full " src={"https://res.cloudinary.com/masterdevs/image/upload/v1640114706/codeaddon/nalinda-dissanayaka_u5uh0z.jpg"} alt="Nalinda Dissanayaka"/>
      <div className="text-sm">
        <h4 className="text-gray-900 font-medium leading-none hover:text-amber-500 ml-2">Nalinda Dissanayaka</h4>
        <p className="text-gray-600">{product.createdAt}</p>
      </div>
    </div>
</div>        




  )
}
