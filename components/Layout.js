import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link';
import NavBar from './NavBar'
import Notify from './Notify'
import { Store } from '../utils/Store'
import { useRouter } from 'next/router';



function Layout({ children}) {
    
  const router = useRouter()
    const { state, dispatch } = useContext(Store)
    const { darkMode, cart, userInfo } = state
  

    return (
        <div>
<NavBar/>
 
{/* Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem    */}
{/* {console.log(JSON.parse(JSON.stringify(userInfo.name)))} */}
            {/* <Notify/> */}
            {/* <Modal /> */}
            {children}
 
        </div>
    )
}

export default Layout





