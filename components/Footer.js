import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Footer() {
    return (

        <footer>


        <div className="footer-2   border-gray-900">

    
            <div className="border-t border-solid  py-4 bg-gray-800">
              <div className="container px-4 mx-auto">
    
                <div className="md:flex md:-mx-4 md:items-center ">
                  <div className="md:flex-1 md:px-4 text-center md:text-left">
                    <div className="text-white">&copy; 
                    <Link href="/">
                      <a>
                      <Image width="130" height="23" src="https://res.cloudinary.com/masterdevs/image/upload/v1640546396/codeaddon/CODEADDON_LOGO_ypghfy.png" />

                      </a>
                    
                    </Link>
                    </div>
                  </div> 
                  <div className="md:flex-1 md:px-4 text-center md:text-right">
                    <a href="#" className="py-2 px-4 text-white inline-block hover:underline">Terms of Service</a>
                    <a href="#" className="py-2 px-4 text-white inline-block hover:underline">Privacy Policy</a>
                  </div>
                </div>
    
              </div>
            </div>
    
      </div>
    
        </footer>
    )
}

export default Footer

