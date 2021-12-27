import React, { useState } from 'react'
import Link from 'next/link';
import NavBar from './NavBar';
import Footer from './Footer';

function Layout({children}) {



    return (
        <div>
<NavBar/>
            {children}
        </div>
    )
}

export default Layout





