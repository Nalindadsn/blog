
  import axios from 'axios';
  import { useRouter } from 'next/router';
  import Link from 'next/link';
  import React, { useContext, useEffect, useState } from 'react';
  import { Store } from '../utils/Store';
import Image from 'next/image';
import NavBar from '../components/NavBar';
  
  export default function Fm() {
    const router = useRouter();
    const { redirect } = router.query;
    const { state, dispatch } = useContext(Store);
    useEffect(() => {

    }, []);
  
    const [boardType, setBoardType] = useState('color-1');
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
        const { data } = await axios.post('/api/pcb/pcb', {
          boardType
        });
        dispatch({ type: 'USER_LOGIN', payload: data });
        // router.push(redirect || '/');
        alert("Added")
        console.log(data)
      } catch (err) {
        console.log(err)
        alert(err.response.data ? err.response.data.message : err.message);
      }
    };
    return (
      <div>
        <NavBar/>


<div>



<div className="pt-20">


<div className="flex flex-wrap -mx-2 mb-8">
      <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4 ">
         <div className="border h-12 text-sm text-grey-dark flex items-center justify-center">
            <p>full / half / quarter</p>
         </div>
         <div className="border h-12 text-sm text-grey-dark flex items-center justify-center">
            <p>full / half / quarter</p>
         </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
         <div className="border h-12 text-sm text-grey-dark flex items-center justify-center">
            <p>full / half / quarter</p>
         </div>
      </div>

   </div>


      <div className="">
          <div className="">
              <div className="pt-24">
                  <div>
                      
  
	<div className="relative flex flex-col items-center group">
		<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
			<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
		</svg>
		<div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
			<span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">A top aligned tooltip.</span>
			<div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
		</div>
	</div>
                  </div>
              </div>
          </div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
              <h2 className="text-center text-4xl text-gray-800 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold">Register</h2>
              <div className="mt-12">
                  <form  onSubmit={submitHandler}>
                      <div>
                          <div className="text-sm font-bold text-gray-700 tracking-wide">Full Name</div>
                      

          

                          <div className="custom-radios">
  <div>
    <input type="radio" id="1" name="boardType" value="1"  onChange={(e) => setBoardType(e.target.value)} defaultChecked />
    <label for="1">
      <span>One
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>
  
  <div>
    <input type="radio" id="2" name="boardType" value="2"    onChange={(e) => setBoardType(e.target.value)} />
    <label for="2">
      <span>Two
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>
  <div>
    <input type="radio" id="3" name="boardType" value="3"    onChange={(e) => setBoardType(e.target.value)} />
    <label for="3">
      <span>Two
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>
  
</div>

                      </div>
                      <div>
                          <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                     
 
                          <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>                    
                     
                      </div>
                      <div>
                          <div className="text-sm font-bold text-gray-700 tracking-wide">Password</div>

                          <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>

                      </div>
                      <div className="mt-8">
                          <div className="flex justify-between items-center">
                              <div className="text-sm font-bold text-gray-700 tracking-wide">
                                  Confirm Password
                              </div>
                              
                          </div>

                      
                      
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

  </div>



</div>






      </div>
    );
  }