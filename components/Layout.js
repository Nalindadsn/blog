import React, { useState } from 'react'
import Link from 'next/link';
import NavBar from './NavBar';
import Footer from './Footer';

function Layout({children}) {



    return (
        <div>
<NavBar/>
            {children}
 <Footer/>           
        </div>
    )
}

export default Layout





