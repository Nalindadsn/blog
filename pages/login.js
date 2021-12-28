
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Layout from '../components/Layout'


export default function Login() {
    const router = useRouter();
    const { redirect } = router.query; // login?redirect=/shipping
    const { state, dispatch } = useContext(Store);
    const { userInfo } = state;
    useEffect(() => {
      if (userInfo) {
        router.push('/');
      }
    }, []);
  

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const submitHandler = async(e) => {
e.preventDefault()
try {
const {data}=await axios.post('/api/users/login',{email,password})
dispatch({ type: 'USER_LOGIN', payload: data });
console.log(data)
Cookies.set('userInfo',JSON.stringify(data));
router.push(redirect || '/');
} catch (err) {
    alert(err.response.data ?err.response.data.message : err.message)
   
}
      };
    return (
      <div>

      <div className='w-full max-w-xs pt-20'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ' onSubmit={submitHandler} >
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" >email</label>
            <input type="text" name="email" id="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            onChange={e=>setEmail(e=e.target.value)}
             /><br/>
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password" >password</label>
            <input type="password" name="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            onChange={e=>setPassword(e=e.target.value)} /><br/>
            <button type="submit">submit</button>

        </form>


      </div>

      </div>
  )
}
