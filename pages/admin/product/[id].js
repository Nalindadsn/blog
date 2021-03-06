import axios from 'axios'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import Editor from './Editor'
import React, { useEffect, useContext, useReducer, useState } from 'react'

import { getError } from '../../../utils/error'
import { Store } from '../../../utils/Store'
import { Controller, useForm } from 'react-hook-form'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: '' }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true, errorUpdate: '' }
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false, errorUpdate: '' }
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false, errorUpdate: action.payload }
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' }
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      }
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload }

    default:
      return state
  }
}

function ProductEdit({ params }) {
  const productId = params.id
  const { state } = useContext(Store)
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    })
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm()

  const router = useRouter()
  const { userInfo } = state

  useEffect(() => {
    setEditorLoaded(true)
    if (!userInfo) {
      return router.push('/login')
    } else {
      const fetchData = async () => {
        try {
          dispatch({ type: 'FETCH_REQUEST' })
          const { data } = await axios.get(`/api/admin/products/${productId}`, {
            headers: { authorization: `Bearer ${userInfo.token}` },
          })
          dispatch({ type: 'FETCH_SUCCESS' })
          setValue('name', data.name)
          setValue('slug', data.slug)
          setValue('price', data.price)
          setValue('image', data.image)
          setValue('featuredImage', data.featuredImage)
          setIsFeatured(data.isFeatured)
          setValue('category', data.category)
          setValue('brand', data.brand)
          setValue('countInStock', data.countInStock)
          setValue('description', data.description)
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: getError(err) })
        }
      }
      fetchData()
    }
  }, [])
  const uploadHandler = async (e, imageField = 'image') => {
    const file = e.target.files[0]
    const bodyFormData = new FormData()
    bodyFormData.append('file', file)
    try {
      dispatch({ type: 'UPLOAD_REQUEST' })
      const { data } = await axios.post('/api/admin/upload', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${userInfo.token}`,
        },
      })
      dispatch({ type: 'UPLOAD_SUCCESS' })
      setValue(imageField, data.secure_url)
      alert('File uploaded successfully')
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) })
      alert(getError(err))
    }
  }

  const submitHandler = async ({
    name,
    slug,
    price,
    category,
    image,
    featuredImage,
    brand,
    countInStock,
    description,
  }) => {
    
    try {
      dispatch({ type: 'UPDATE_REQUEST' })
      await axios.put(
        `/api/admin/products/${productId}`,
        {
          name,
          slug,
          price,
          category,
          image,
          isFeatured,
          featuredImage,
          brand,
          countInStock,
          description,
        },
        { headers: { authorization: `Bearer ${userInfo.token}` } }
      )
      dispatch({ type: 'UPDATE_SUCCESS' })
      alert('Product updated successfully')
      router.push('/admin/products')
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL', payload: getError(err) })
      alert(getError(err))
    }
  }

  const [isFeatured, setIsFeatured] = useState(false)
  const [editorLoaded, setEditorLoaded] = useState(false)
  const [data, setData] = useState('')

  return (
    <div title={`Edit Product ${productId}`}>
      <div container spacing={1}>
        <div md={3} xs={12}>
          
        </div>
        <div md={9} xs={12}>
          <div>
            <div>
              <div>
                <p component="h1" variant="h1">
                  Edit Product {productId}
                </p>
              </div>
              <div>
                {loading && "loadig..."}
                {error && (
                  <p>{error}</p>
                )}
              </div>
              <div>
                <form
                  onSubmit={handleSubmit(submitHandler)}
                  >
                  <div>
                    <div>
                      n
                          <input type="text" id="name" name="name"/>
                          
                    </div>
                    <div>
                          <input type="text" id="slug" name="slug"/>
                    </div>
                    <div>
                        <input type="text" id="price" name="price"/>
                    </div>
                    <div>
                          <input type="text" id="image" name="image"/>
                    </div>
                    <div>
                      <button variant="contained" component="label">
                        Upload File
                        <input type="file" onChange={uploadHandler} hidden />
                      </button>
                      {loadingUpload && "loading..."}
                    </div>
                    <div>
                      <div
                        label="Is Featured"
                        control={
                          <input type="checkbox" id='isFeatured' name="isFeatured" onClick={(e) => setIsFeatured(e.target.checked)}/>
                          
                        }></div>
                    </div>
                    <div>
                          <input type="text" id="featuredImage" name="featuredImage"/>
                    </div>
                    <div>
                      <button variant="contained" component="label">
                        Upload File
                        <input
                          type="file"
                          onChange={(e) => uploadHandler(e, 'featuredImage')}
                          hidden
                        />
                      </button>
                      {loadingUpload && "loading..."}
                    </div>
                    <div>
                          <input type="text" id="category" name='category'/>
                    </div>
                    <div>
                          <input type="text" id="brand" id="name"/>
                    </div>
                    <div>
                          <input type="text" id="countInStock" name="countInStock"/>
                    </div>
                    <div>
   
                    <Editor
                              name="description"
                              id="description"
                              label="Description"
                              error={Boolean(errors.description)}
                              helperText={
                                errors.description
                                  ? 'Description is required'
                                  : ''
                              }
                              onChange={(data) => {
                                setData(data)
                              }}
                              editorLoaded={editorLoaded}
                              
                            />
                    </div>

                    <div>
                      <button
                        variant="contained"
                        type="submit"
                        fullWidth
                        color="primary">
                        Update
                      </button>
                      {loadingUpdate && "loading..."}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  return {
    props: { params },
  }
}

export default dynamic(() => Promise.resolve(ProductEdit), { ssr: false })
