import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
const About = (props) => {
 

  
  return(
    <div>

<NavBar/>



<div className="bg-gray-100 pt-20">
 

    <div className="container mx-auto my-5 p-5">
        <h1 className='text-4xl py-5'><strong>ABOUT US</strong> </h1>
        <p className='py-2'>Codeaddon is designed to help beginner programmers who want to learn web designing and web development. </p>

<h3 className='text-3xl pt-5'>Who Codeaddon is for</h3>
<p  className='py-2'>With the fast paced nature of technology, developers can no longer become experts in aspects of development, but now must learn the entire process of development from design to actual deployment. This has introduced a new role for developers – Full Stack Developers.</p>
<ul className='list-disc ml-8'>

<li>Student who want to become the Full Stack Web Developers will find this course very beneficial</li>
<li>Front end Developers who want to learn backend programming</li>
<li>Backend developers who want to learn front end programming concepts</li>
</ul>

<h2 className='text-3xl py-5'>Our Team</h2>
        <div className="md:flex no-wrap md:-mx-2 ">

        <div className="w-full md:w-3/12 md:mx-2">

<div className="bg-white p-3 border-t-4 border-gray-800">
        <div className="image overflow-hidden">
            <img className="h-auto w-full mx-auto"
                src="https://res.cloudinary.com/masterdevs/image/upload/v1640977237/codeaddon/nalinda-dissanayaka_oj5hhh.jpg"
                alt="" />
        </div>
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Nalinda Dissanayaka</h1>
        <h3 className="text-gray-600 font-lg text-semibold leading-6">Full Stack Web Developer.</h3>
        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6"></p>
        <ul
            className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
            <li className="flex items-center py-3">
                <span>Status</span>
                <span className="ml-auto"><span
                        className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
            </li>
        </ul>
    </div>
    <div className="my-4"></div>

</div>
            <div className="w-full md:w-3/12 md:mx-2">

            <div className="bg-white p-3 border-t-4 border-gray-800">
                    <div className="image overflow-hidden">
                        <img className="h-auto w-full mx-auto"
                            src="https://res.cloudinary.com/masterdevs/image/upload/v1640359719/codeaddon/codeaddon-user_bclsui.jpg"
                            alt="" />
                    </div>
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Lakmal K Herath</h1>
                    <h3 className="text-gray-600 font-lg text-semibold leading-6">Full Stack Web Developer.</h3>
                    <p className="text-sm text-gray-500 hover:text-gray-600 leading-6"></p>
                    <ul
                        className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3">
                            <span>Status</span>
                            <span className="ml-auto"><span
                                    className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                    </ul>
                </div>
                <div className="my-4"></div>

            </div>

        </div>
    </div>
</div>










    </div>
  )
}



export default About
