import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import React, { useEffect, useContext } from 'react'


import { Store } from '../utils/Store'

function Profile() {
  const { state, dispatch } = useContext(Store)

  const router = useRouter()
  const { userInfo } = state

  useEffect(() => {
    if (!userInfo) {
      return router.push('/login')
    }
    setValue('name', userInfo.name)
    setValue('email', userInfo.email)
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
    <div title="Profile">
 <br/> <br/> <br/>
 
    </div>
  )
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false })
