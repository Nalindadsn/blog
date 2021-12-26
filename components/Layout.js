import React, { useState } from 'react'
import Link from 'next/link';
import NavBar from './NavBar';

function Layout({children}) {



    return (
        <div className="container">
<NavBar/>
            {children}
        </div>
    )
}

export default Layout





