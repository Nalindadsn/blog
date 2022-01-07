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
      Cookies.set('userInfo', data)

      alert('Profile updated successfully')
    } catch (err) {
      alert(getError(err))
    }
  }
  return (
    <div className="Profile pt-20">














{/* 
      //////////////////////////////////////////// */}
      <div container spacing={1}>
        <div item md={3} xs={12}>
          <div>
            <div>
              <div href="/profile" passHref>
                <div selected button component="a">
                  <p primary="User Profile"></p>
                </div>
              </div>
              <div href="/order-history" passHref>
                <div button component="a">
                  <p primary="Order History"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div item md={9} xs={12}>
          <confirmPassword>
            <div>
              <div>
                <p component="h1" variant="h1">
                  Profile
                </p>
              </div>
              <div>
                <form
                  onSubmit={handleSubmit(submitHandler)}
                  >
                  <div>
                    <div>
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
                            variant="outlined"
                            fullWidth
                            id="password"
                            label="Password"
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
                            variant="outlined"
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
                        fullWidth
                        color="primary">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </confirmPassword>
        </div>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false })
