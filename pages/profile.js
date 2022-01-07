import axios from 'axios'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { useEffect, useContext } from 'react'

import { getError } from '../utils/error'
import { Store } from '../utils/Store'
import { Controller, useForm } from 'react-hook-form'
import Cookies from 'js-cookie'

function Profile() {
  const { state, dispatch } = useContext(Store)
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm()
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
      Cookies.set('userInfo', JSON.stringify(data))

      alert('Profile updated successfully')
    } catch (err) {
      alert(getError(err))
    }
  }
  return (
    <div className="Profile">




<div className="bg-gray-100  pt-20">
 

    <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">

            <div className="w-full md:w-3/12 md:mx-2">

                <div className="bg-white p-3 border-t-4 border-gray-800">
                    <div className="image overflow-hidden">
                        <img className="h-auto w-full mx-auto"
                            src={userInfo.image}
                            alt="" />
                    </div>
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{userInfo.name}</h1>
                    <p className="text-sm text-gray-500 hover:text-gray-600 leading-6"></p>
                   



                    <form
                  onSubmit={handleSubmit(submitHandler)}
                  >
                  <div>
                    <div  className='flex items-center py-3'>
                      <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                          minLength: 2,
                        }}
                        render={({ field }) => (
                          <input
                          className="w-full text-lg p-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
                            variant="outlined"
                            fullWidth
                            id="name"
                            label="Name"
                            inputProps={{ type: 'name' }}
                            error={Boolean(errors.name)}
                            helperText={
                              errors.name
                                ? errors.name.type === 'minLength'
                                  ? 'Name length is more than 1'
                                  : 'Name is required'
                                : ''
                            }
                            {...field}></input>
                        )}></Controller>
                    </div>
                    <div>
                      <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        }}
                        render={({ field }) => (
                          <input
                          className="w-full mb-3 text-lg p-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
                            variant="outlined"
                            fullWidth
                            id="email"
                            label="Email"
                            inputProps={{ type: 'email' }}
                            error={Boolean(errors.email)}
                            helperText={
                              errors.email
                                ? errors.email.type === 'pattern'
                                  ? 'Email is not valid'
                                  : 'Email is required'
                                : ''
                            }
                            {...field}></input>
                        )}></Controller>
                    </div>
                    <div>
                      <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{
                          validate: (value) =>
                            value === '' ||
                            value.length > 5 ||
                            'Password length is more than 5',
                        }}
                        render={({ field }) => (
                          <input
                          className="w-full mb-3 text-lg p-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
                            variant="outlined"
                            fullWidth
                            id="password"
                            label="Password"
                            placeholder=' Password'
                            inputProps={{ type: 'password' }}
                            error={Boolean(errors.password)}
                            helperText={
                              errors.password
                                ? 'Password length is more than 5'
                                : ''
                            }
                            {...field}></input>
                        )}></Controller>
                    </div>
                    <div>
                      <Controller
                        name="confirmPassword"
                        control={control}
                        defaultValue=""
                        rules={{
                          validate: (value) =>
                            value === '' ||
                            value.length > 5 ||
                            'Confirm Password length is more than 5',
                        }}
                        render={({ field }) => (
                          <input
                          className="w-full text-lg p-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
                            variant="outlined"
                            placeholder='Confirm Password'
                            fullWidth
                            id="confirmPassword"
                            label="Confirm Password"
                            inputProps={{ type: 'password' }}
                            error={Boolean(errors.confirmPassword)}
                            helperText={
                              errors.password
                                ? 'Confirm Password length is more than 5'
                                : ''
                            }
                            {...field}></input>
                        )}></Controller>
                    </div>
                    <div>
                      <button
                        variant="contained"
                        type="submit"
                        className=' text-gray-100 p-4 w-full mt-3 tracking-wide bg-amber-500 font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg'
                        >
                        Update
                      </button>
                    </div>
                  </div>
                </form>

                </div>
                <div className="my-4"></div>

            </div>

            <div className="w-full md:w-9/12 mx-2 h-64">
              
<h1 className='text-4xl p-5'>Profile</h1>
{/*               
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">About</span>
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">First Name</div>
                                <div className="px-4 py-2">Nalinda </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Last Name</div>
                                <div className="px-4 py-2">Dissanayaka</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Gender</div>
                                <div className="px-4 py-2">Male</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email</div>
                                <div className="px-4 py-2">nalindadsn@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="my-4"></div>

                
            </div>
        </div>
    </div>
</div>




















{/* 
      //////////////////////////////////////////// */}

    </div>
  )
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false })
