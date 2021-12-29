import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link';
import NavBar from './NavBar'
import Notify from './Notify'
import { Store } from '../utils/Store'



function Layout({children}) {

      

    const { state, dispatch } = useContext(Store)
    const { darkMode,  userInfo } = state


    return (
        <div>
<NavBar userInfo={userInfo}/>
 

            {/* <Notify/> */}
            {/* <Modal /> */}
            {children}
 
        </div>
    )
}

export default Layout





