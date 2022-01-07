import axios from 'axios'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import React, { useEffect, useContext, useState } from 'react'

import { getError } from '../utils/error'
import { Store } from '../utils/Store'
import Cookies from 'js-cookie'

function Profile() {
  const { state, dispatch } = useContext(Store)

  const router = useRouter()
  const { userInfo } = state

  useEffect(() => {
    if (!userInfo) {
      return router.push('/login')
    }
  }, [])
  const submitHandler = async ({ name, email, password, confirmPassword }) => {
    
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    try {
      const { data } = await axios.put(
        '/api/users/profile',
        {
          name,
          email,
          password,
        },
        { headers: { authorization: `Bearer ${userInfo.token}` } }
      )
      dispatch({ type: 'USER_LOGIN', payload: data })
      Cookies.set('userInfo', data)

      alert('Profile updated successfully')
    } catch (err) {
      alert(getError(err))
    }
  }
  return (
    <div className=" pt-20">
                <form
                  onSubmit={submitHandler} >
                  <div>
                    <div>
                      <input type="text" id="name" 
                      placeholder='name'
                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"/>
                    </div>
                    <div>
                          <input id="email"
                          placeholder='email'
                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"/>
                    </div>
                    <div>
                          <input 
                            id="password"
                            placeholder='password'
                            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"/>
                    </div>
                    <div>
                          <input
                            id="confirmPassword" 
                            placeholder='confirmPassword'
                            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"/>
                    </div>
                    <div>
                      <button
                        type="submit" >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false })
