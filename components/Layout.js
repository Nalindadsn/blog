import React, { useState } from 'react'
import Link from 'next/link';
import NavBar from './NavBar'
import Notify from './Notify'
// import Modal from './Modal'


function Layout({children}) {



    return (
        <div>
<NavBar/>

<NavBar />
            <Notify/>
            {/* <Modal /> */}
            {children}
        </div>
    )
}

export default Layout





