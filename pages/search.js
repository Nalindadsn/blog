
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import Layout from '../components/Layout'
import db from '../utils/db'
import Product from '../models/Product'
import ProductItem from '../components/ProductItem'
import { Store } from '../utils/Store'
import axios from 'axios'
// import { Pagination } from '@material-ui/lab'

const PAGE_SIZE = 3

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
    <Layout title="Search">
      <div>
        <div item md={3}>
          <div>
            <div>
            </div>
            <div>
              <div>
                <div>Brands</div>
                <div value={brand} onChange={brandHandler} fullWidth>
                  <div value="all">All</div>
                  {brands &&
                    brands.map((brand) => (
                      <div key={brand} value={brand}>
                        {brand}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>Prices</div>
                <div value={price} onChange={priceHandler} fullWidth>
                  <div value="all">All</div>
                  {prices.map((price) => (
                    <div key={price.value} value={price.value}>
                      {price.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div item md={9}>
          <div container justifyContent="space-between" alignItems="center">
            <div item>
              {products.length === 0 ? 'No' : countProducts} Results
              {query !== 'all' && query !== '' && ' : ' + query}
              {category !== 'all' && ' : ' + category}
              {brand !== 'all' && ' : ' + brand}
              {price !== 'all' && ' : Price ' + price}
              {rating !== 'all' && ' : Rating ' + rating + ' & up'}
              {(query !== 'all' && query !== '') ||
              category !== 'all' ||
              brand !== 'all' ||
              rating !== 'all' ||
              price !== 'all' ? (
                <div onClick={() => router.push('/search')}>
                  Cancel
                </div>
              ) : null}
            </div>
            <div item>
              <div component="span">
                Sort by
              </div>
              <div value={sort} onChange={sortHandler}>
                <div value="featured">Featured</div>
                <div value="lowest">Price: Low to High</div>
                <div value="highest">Price: High to Low</div>
                <div value="toprated">Customer Reviews</div>
                <div value="newest">Newest Arrivals</div>
              </div>
            </div>
          </div>
          <div container spacing={3}>
            {products.map((product) => (
              <div item md={4} key={product.name}>
                <ProductItem
                  product={product}
                  addToCartHandler={addToCartHandler}
                />
              </div>
            ))}
          </div>
          {/* <Pagination
            defaultPage={parseInt(query.page || '1')}
            count={pages}
            onChange={pageHandler}></Pagination> */}
        </div>
      </div>
    </Layout>
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
