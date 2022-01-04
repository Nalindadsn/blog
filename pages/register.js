
  import axios from 'axios';
  import { useRouter } from 'next/router';
  import Link from 'next/link';
  import React, { useContext, useEffect, useState } from 'react';
  import Layout from '../components/Layout';
  import { Store } from '../utils/Store';
  import Cookies from 'js-cookie';
import Image from 'next/image';
  
  export default function Register() {
    const router = useRouter();
    const { redirect } = router.query;
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    useEffect(() => {
      if (userInfo) {
        router.push('/');
      }
    }, []);
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const submitHandler = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }
      try {
        const { data } = await axios.post('/api/users/register', {
          name,
          email,
          password,
        });
        dispatch({ type: 'USER_LOGIN', payload: data });
        Cookies.set('userInfo', JSON.stringify(data));
        router.push(redirect || '/');
      } catch (err) {
        alert(err.response.data ? err.response.data.message : err.message);
      }
    };
    return (
      <div>

<div>



<div className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="py-12   flex justify-center lg:justify-start lg:px-12">
              <div className="cursor-pointer flex items-center">
                  <div>
                      
                  </div>
              </div>
          </div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
              <h2 className="text-center text-4xl text-gray-800 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold">Log in</h2>
              <div className="mt-12">
                  <form  onSubmit={submitHandler}>
                      <div>
                          <div className="text-sm font-bold text-gray-700 tracking-wide">Full Name</div>
                      

                          <input
                id="name"
                placeholder="Name"
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                onChange={(e) => setName(e.target.value)}
              />
                      
                      </div>
                      <div>
                          <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                     
 
                          <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                id="email"
                placeholder="Email"
                inputProps={{ type: 'email' }}
                onChange={(e) => setEmail(e.target.value)}
              ></input>                    
                     
                      </div>
                      <div>
                          <div className="text-sm font-bold text-gray-700 tracking-wide">Password</div>

                          <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                id="password"
                placeholder="Password"
                inputProps={{ type: 'password' }}
                onChange={(e) => setPassword(e.target.value)}
              ></input>



                      </div>
                      <div className="mt-8">
                          <div className="flex justify-between items-center">
                              <div className="text-sm font-bold text-gray-700 tracking-wide">
                                  Confirm Password
                              </div>
                              
                          </div>

                      

                          <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                id="confirmPassword"
                placeholder="Confirm Password"
                inputProps={{ type: 'password' }}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
                      
                      </div>
                      <div className="mt-10">
                          <button className=" text-gray-100 p-4 w-full rounded-full tracking-wide bg-amber-500
                          font-semibold font-display focus:outline-none focus:shadow-outline 
                          shadow-lg">
                              Register
                          </button>
                      </div>
                  </form>
                  <div className="my-12 text-sm font-display font-semibold text-gray-700 text-center">
                      Already have an account ? 
                      <Link href="/login">
                      <a className="cursor-pointer text-indigo-600 hover:text-indigo-800"> Login</a>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
      <div className="hidden lg:flex items-center justify-center  flex-1 h-screen">
          <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
             
             <Image className="w-5/6 mx-auto" src="https://res.cloudinary.com/masterdevs/image/upload/v1641315776/codeaddon/login_Icon_oufkgj.png" width="300" height="308" alt="user login image"/>
                 
          </div>
      </div>
  </div>



</div>






      </div>
    );
  }