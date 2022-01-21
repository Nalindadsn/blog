import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import React, { useEffect, useContext, useReducer } from 'react';

import { getError } from '../../utils/error';
import { Store } from '../../utils/Store';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreate: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      state;
  }
}

function AdminProdcuts() {
  const { state } = useContext(Store);
  const router = useRouter();
  const { userInfo } = state;

  const [
    { loading, error, products, loadingCreate, successDelete, loadingDelete },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    products: [],
    error: '',
  });

  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/products`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [successDelete]);


  const createHandler = async () => {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const { data } = await axios.post(
        `/api/admin/products`,
        {},
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: 'CREATE_SUCCESS' });
      alert('Product created successfully');
      router.push(`/admin/product/${data.product._id}`);
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      alert(getError(err));
    }
  };
  const deleteHandler = async (productId) => {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    try {
      dispatch({ type: 'DELETE_REQUEST' });
      await axios.delete(`/api/admin/products/${productId}`, {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: 'DELETE_SUCCESS' });
      alert('Product deleted successfully');
    } catch (err) {
      dispatch({ type: 'DELETE_FAIL' });
      alert(getError(err));
    }
  };
  return (
    <div title="Products">
      <div>
        <div>
          <div >
            <div>
              <div>
                <div>
                  <div>
                    <p>
                      Products
                    </p>
                    {loadingDelete && "loading..."}
                  </div>
                  <div>
                    <button
                      onClick={createHandler}
                    >
                      Create
                    </button>
                    {loadingCreate && "loading..."}
                  </div>
                </div>
              </div>

              <div>
                {loading ? (
                  "loading..."
                ) : error ? (
                  <p >{error}</p>
                ) : (
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>NAME</th>
                          <th>PRICE</th>
                          <th>CATEGORY</th>
                          <th>COUNT</th>
                          <th>RATING</th>
                          <th>ACTIONS</th>
                        </tr>

                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product._id}>
                            <td>
                              {product._id.substring(20, 24)}
                            </td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.countInStock}</td>
                            <td>{product.rating}</td>
                            <td>
                              <NextLink
                                href={`/admin/product/${product._id}`}
                                passHref
                              >
                                <button size="small" variant="contained">
                                  Edit
                                </button>
                              </NextLink>{' '}
                              <button
                                onClick={() => deleteHandler(product._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(AdminProdcuts), { ssr: false });
