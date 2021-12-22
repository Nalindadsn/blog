import Head from 'next/head';
// import React, { useContext, useState } from 'react';

// import NextLink from 'next/link';


export default function Layout({ children }) {

    
  return (
    <div>
    <Head>

    <title>Create Next App</title>
        <meta name="description" content="web development tutorials " />
        <link rel="icon" href="../favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>

    <main>
      {children}
      
    </main>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span>

        </span>
      </a>
    </footer>
  </div>
 
  );
}