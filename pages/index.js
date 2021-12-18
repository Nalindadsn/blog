import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
    



      <nav className="bg-gray-800 w-full h-16  px-8   shadow-md fixed" >
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          
          
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
          <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">

            <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>

          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>


        <div className="ml-3 relative">
          <div>
            <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </button>
          </div>


          {/* <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
          </div> */}
        </div>
      </div>
    </div>
  </div>




  <div className="sm:hidden" id="mobile-menu">
    
    <div className="px-2 pt-2 pb-3 space-y-1">

      <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>




{/* //------------------- */}

<div className="bg-gray-800">
  <div  id="overview" className="w-4/5 mx-auto py-24 flex flex-row flex-no-wrap">
    <div id="landing-text" className="w-1/2 flex flex-col">
      <h4 className="font-medium text-white">Same chats, new different experience</h4>
      <h2 className="font-bold text-5xl text-white leading-tight mt-3 mb-6">It looks better and cleaner!</h2>
      <span className="font-normal text-gray-600">Your favorite messaging app just got the best looking update yet! Now it feels like a breath of fresh air.</span>
      <div id="buttons" className="font-medium flex flex-row mt-6">
        <div className="mr-3 pl-0 p-2 cursor-pointer hover:underline"><a href="#watch-video">Watch video</a></div>
        <div className="mx-4 p-2 px-4 border-2 text-white border-white rounded-lg hover:text-white hover:bg-blue-400 cursor-pointer">Download</div>
      </div>
    </div>
    
    <div id="landing-image" className="w-1/2">
      <Image src="https://res.cloudinary.com/masterdevs/image/upload/v1639856212/codeaddon/12_ykiumq.jpg" width={1000} height={500} alt="landing-image" />
    </div>
  </div>
  </div>


<div>

</div>




  <div id="watch-video" className="bg-gray-800 py-24">
    <iframe id="video" className="responsive-iframe mx-auto shadow-2xl" width="600" height="300" src="https://www.youtube.com/embed/U8EwCd1xJqA" frameBorder="0" allowFullScreen></iframe>
  </div>
  
{/* 
  ------------------------------------------------ */}




{/* 
  ------------------------------------------------- */}
  <div  id="beta-test" className=" py-24">
    <h2 className="text-center text-4xl font-bold text-white">Sign up for beta</h2>
      <form id="form"  action="https://www.freecodecamp.com/email-submit">
        <div className="w-1/3 mt-12 mx-auto flex flex-row flex-no-wrap shadow-xl">
          <input className="flex-grow bg-transparent py-4 px-6 placeholder-blue-300 bg-blue-800 rounded-l-lg text-blue-300 outline-none" type="email" id="email" name="email" placeholder="Enter your email address" required />
          <input className="py-2 px-4 text-white bg-blue-900 rounded-r-lg text-blue-500" type="submit" id="submit" value="Sign up" />
        </div>
      </form>
  </div>
 
  <div  id="download" className="bg-black py-16">
    <h2 className="text-center text-4xl font-bold text-white">Download</h2>
    <div className="flex justify-center mt-6">
      <img src="https://i.imgur.com/dqNmjHG.png" alt="Download app button" width="300"/>
    </div>
  </div>
  



      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
