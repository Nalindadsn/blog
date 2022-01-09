import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div>
      <NextLink href={`/product/${product.slug}`} passHref>
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={500}
            />
          <div>
            <p>{product.name}</p>
          </div>
        </div>
      </NextLink>
      <div>

      </div>
    </div>
  )
}
