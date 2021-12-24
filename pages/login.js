
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
    <Layout>----------test
        <form className='pt-20' onSubmit={submitHandler} >
            <input type="text" name="email" id="email" className="border" 
            onChange={e=>setEmail(e=e.target.value)}
             /><br/>
            <input type="password" name="password" id="password" className="border" 
            onChange={e=>setPassword(e=e.target.value)} /><br/>
            <button type="submit">submit</button>

        </form>----------
    </Layout>
  )
}
