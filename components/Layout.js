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
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   

            {/* <Notify/> */}
            {/* <Modal /> */}
            {children}
 
        </div>
    )
}

export default Layout





