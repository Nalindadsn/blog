
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Layout from '../components/Layout'
import db from '../utils/db'
import Product from '../models/Product'
import ProductItem from '../components/ProductItem'
import { Store } from '../utils/Store'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../components/NavBar'
// import { Pagination } from '@material-ui/lab'

const PAGE_SIZE = 10

const prices = [
  {
    name: '$1 to $50',
    value: '1-50',
  },
  {
    name: '$51 to $200',
    value: '51-200',
  },
  {
    name: '$201 to $1000',
    value: '201-1000',
  },
]

const ratings = [1, 2, 3, 4, 5]

export default function Search(props) {
  const router = useRouter()
  const {
    query = 'all',
    category = 'all',
    brand = 'all',
    price = 'all',
    rating = 'all',
    sort = 'featured',
  } = router.query
  const { products, countProducts, brands, pages } = props

  const filterSearch = ({
    page,
    category,
    brand,
    sort,
    min,
    max,
    searchQuery,
    price,
    rating,
  }) => {
    const path = router.pathname
    const { query } = router
    if (page) query.page = page
    if (searchQuery) query.searchQuery = searchQuery
    if (sort) query.sort = sort
    if (category) query.category = category
    if (brand) query.brand = brand
    if (price) query.price = price
    if (rating) query.rating = rating
    if (min) query.min ? query.min : query.min === 0 ? 0 : min
    if (max) query.max ? query.max : query.max === 0 ? 0 : max

    router.push({
      pathname: path,
      query: query,
    })
  }
  const categoryHandler = (e) => {
    filterSearch({ category: e.target.value })
  }
  const pageHandler = (e, page) => {
    filterSearch({ page })
  }
  const brandHandler = (e) => {
    filterSearch({ brand: e.target.value })
  }
  const sortHandler = (e) => {
    filterSearch({ sort: e.target.value })
  }
  const priceHandler = (e) => {
    filterSearch({ price: e.target.value })
  }
  const ratingHandler = (e) => {
    filterSearch({ rating: e.target.value })
  }

  const { state, dispatch } = useContext(Store)
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/api/products/${product._id}`)
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock')
      return
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
    router.push('/cart')
  }
  return (
    <div title="Search">
            <Head>
        <title>Category {category !== 'all' && ' : ' + category}</title>
      </Head>
{/* //------------------- */}
<NavBar/>
      <div>
        
        <div>
          



          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
  
  <div className="border-b mb-5 flex justify-between text-sm pt-20">
    <div className="text-amber-500 flex items-center pb-2 pr-2 border-b-2 border-amber-500 uppercase">
  
      <h4 className="font-semibold inline-block">{category !== 'all' && ' : ' + category}</h4>
    </div>
    <Link href="/articles">
      <a>See All</a>
    </Link>
    
  </div>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    

  {products.map((product) => (
              <div item md={4} key={product.name}>
                <ProductItem
                  product={product}
                  addToCartHandler={addToCartHandler}
                />
              </div>
            ))}



    
  </div>

</div>

        
          {/* <Pagination
            defaultPage={parseInt(query.page || '1')}
            count={pages}
            onChange={pageHandler}></Pagination> */}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  await db.connect()
  const pageSize = query.pageSize || PAGE_SIZE
  const page = query.page || 1
  const category = query.category || ''
  const brand = query.brand || ''
  const price = query.price || ''
  const rating = query.rating || ''
  const sort = query.sort || ''
  const searchQuery = query.query || ''

  const queryFilter =
    searchQuery && searchQuery !== 'all'
      ? {
          name: {
            $regex: searchQuery,
            $options: 'i',
          },
        }
      : {}
  const categoryFilter = category && category !== 'all' ? { category } : {}
  const brandFilter = brand && brand !== 'all' ? { brand } : {}
  const ratingFilter =
    rating && rating !== 'all'
      ? {
          rating: {
            $gte: Number(rating),
          },
        }
      : {}
  // 10-50
  const priceFilter =
    price && price !== 'all'
      ? {
          price: {
            $gte: Number(price.split('-')[0]),
            $lte: Number(price.split('-')[1]),
          },
        }
      : {}

  const order =
    sort === 'featured'
      ? { featured: -1 }
      : sort === 'lowest'
      ? { price: 1 }
      : sort === 'highest'
      ? { price: -1 }
      : sort === 'toprated'
      ? { rating: -1 }
      : sort === 'newest'
      ? { createdAt: -1 }
      : { _id: -1 }

  // const categories = await Product.find().distinct('category')
  const brands = await Product.find().distinct('brand')
  const productDocs = await Product.find(
    {
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...brandFilter,
      ...ratingFilter,
    },
    '-reviews'
  )
    .sort(order)
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .lean()

  const countProducts = await Product.countDocuments({
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
    ...brandFilter,
    ...ratingFilter,
  })
  await db.disconnect()

  const products = JSON.parse(JSON.stringify(productDocs)).map(
    db.convertDocToObj
  )

  return {
    props: {
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
      // categories,
      brands,
    },
  }
}
