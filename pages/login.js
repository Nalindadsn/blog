
import axios from 'axios';
import React, { useState } from "react";

import Layout from '../components/Layout'


export default function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const submitHandler = async(e) => {
e.preventDefault()
try {
const {data}=await axios.post('/api/users/login',{email,password})
    alert('success')
} catch (err) {
    alert(err.message)
   
}
      };
    return (
    <Layout>---------
        <form onSubmit={submitHandler} >
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
