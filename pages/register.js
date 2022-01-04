
  import axios from 'axios';
  import { useRouter } from 'next/router';
  import NextLink from 'next/link';
  import React, { useContext, useEffect, useState } from 'react';
  import Layout from '../components/Layout';
  import { Store } from '../utils/Store';
  import Cookies from 'js-cookie';
  
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
      <Layout>
        <form onSubmit={submitHandler} className="pt-20">
          <p>
            Register
          </p>
          <div>
            <div>
              <input
                variant="outlined"
                id="name"
                placeholder="Name"
                
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                variant="outlined"
                id="email"
                placeholder="Email"
                inputProps={{ type: 'email' }}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                variant="outlined"
                id="password"
                placeholder="Password"
                inputProps={{ type: 'password' }}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                variant="outlined"
                id="confirmPassword"
                placeholder="Confirm Password"
                inputProps={{ type: 'password' }}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <button variant="contained" type="submit" fullWidth color="primary">
                Register
              </button>
            </div>
            <div>
              Already have an account? &nbsp;

            </div>
          </div>
        </form>
      </Layout>
    );
  }