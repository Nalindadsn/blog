
  import axios from 'axios';
  import { useRouter } from 'next/router';
  import Link from 'next/link';
  import React, { useContext, useEffect, useState } from 'react';
  import Layout from '../components/Layout';
  import { Store } from '../utils/Store';
  import Cookies from 'js-cookie';
import Image from 'next/image';
import NavBar from '../components/NavBar';
  
  export default function Register() {
    const router = useRouter();
    const { redirect } = router.query;
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;

  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const submitHandler = async (e) => {
      e.preventDefault();

      try {
        const { data } = await axios.post('/api/page/contact', {
          name,
          email,
          message,
        });
        alert('Message Sent')
        setName('')
        setEmail('')
        setMessage('')
      } catch (err) {
        alert(err.response.data ? err.response.data.message : err.message);
      }
    };
    return (
      <div>
        <NavBar/>


<div>



<div className="lg:flex pb-10">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="py-12   flex justify-center lg:justify-start lg:px-12">
              <div className="cursor-pointer flex items-center">
                  <div>
                      
                  </div>
              </div>
          </div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
              <h2 className="text-center text-4xl text-gray-800 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold">GET IN TOUCH</h2>
              <div className="mt-12">
                  <form  onSubmit={submitHandler}>
                      <div>
                          <div className="text-sm font-bold text-gray-700 tracking-wide">Full Name</div>
                      

                          <input
                id="name"
                placeholder="Name"
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
                      
                      </div>
                      <div>
                          <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                     
 
                          <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></input>                    
                     
                      </div>
                      <div>
                          <div className="text-sm font-bold text-gray-700 tracking-wide">Message</div>
          <textarea
                className="w-full h-36 text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                id="message"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                ></textarea>
                

                      </div>
                      
                      <div className="mt-10">
                          <button className=" text-gray-100 p-4 w-full rounded-full tracking-wide bg-amber-500
                          font-semibold font-display focus:outline-none focus:shadow-outline 
                          shadow-lg">
                              Send <i className='fa fa-paper-plane'></i>
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      <div className="hidden lg:flex items-center justify-center  flex-1 h-screen">
          <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
             
             <Image className="w-5/6 mx-auto" src="https://res.cloudinary.com/masterdevs/image/upload/v1641564939/codeaddon/contact-codeaddon_ivfobw.png" width="400" height="475" alt="user login image"/>
                 
          </div>
      </div>
  </div>



</div>






      </div>
    );
  }