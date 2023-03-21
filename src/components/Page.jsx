import React, { Component } from 'react'
import './Page.css'
import logo from '../logo.jpg'
import leetcode from '../Social Links/leetcode.svg'
import gfg from '../Social Links/gfg.svg'

class Page extends Component {

    render() {
        return (
            <>
                <div className='flex flex-col sm:h-[calc(100vh-48px)] justify-center items-center'>
                    <div className='sm:absolute sm:bg-[#4fa7e7] sm:w-[100vw] sm:top-[48px] z-[-1] sm:min-h-[50vh] '></div>
                    
                    <div className='sm:absolute md:block z-1 sm:flex sm:flex-col sm:w-[80vw] sm:min-h-[50vh] sm:bg-white sm:rounded-2xl sm:shadow-[0_5px_15px_rgba(0,0,0,0.35)] md:w-[70vw]'>
                        <div className='sm:flex sm:flex-row'>
                            <img src={logo} className=' sm:h-28 sm:w-28 sm:ml-1 sm:mt-1 sm:text-center sm:rounded-full
                                                        md:h-28 md:w-28 md:ml-4 md:mt-4'></img>

                            <div className='sm:mt-3 sm:ml-auto sm:w-[10rem] sm:h-max'>
                                <h1 className='sm:text-xl sm:text-center sm:font-medium'>Shlok Prajapati</h1>
                                <p className='sm:mx-1 sm:text-xs sm:float-right sm:mr-3'>Second Year TCET</p>
                                <br />
                                <ul className='sm:place-content-around sm:mt-2 sm:flex sm:flex-row sm:items-center'>
                                    <i className='fa-brands fa-github sm:text-[25px] cursor-pointer'></i>

                                    <i className='fa-brands fa-linkedin sm:text-[25px] cursor-pointer'></i>

                                    <img src={leetcode} className='sm:h-[25px] sm:w-[25px] sm:inline cursor-pointer'></img>

                                    <img src={gfg} className='sm:h-[25px] sm:w-[25px] sm:inline cursor-pointer'></img>
                                </ul>
                            </div>
                        </div>

                        <div className='sm:mx-2 sm:mt-2 sm:text-justify sm:text-sm'>
                            <p>Hi there! My name is Shlok. I am passionate about DSA and Front-End Development, and I am 
                            extremely driven by a passion for code and to build tech stuff.</p>
                            <p> I also believe in giving back to my community, and I am involved in Cerritus Coders.</p>

                            <span className='sm:block sm:mt-1 sm:font-bold sm:text-sm text-left'>
                            Experience: <label className='sm:text-sm sm:font-normal '>Problem Setter, TCET Shashtra</label>
                            </span>

                            <span className='sm:mt-1 sm:font-bold sm:text-sm sm:text-left'>
                            Technology: <label className='sm:text-sm sm:font-normal sm:text-left sm:underline'>HTML, CSS, JavaScript, BootStrap, Tailwind, React, C, C++, Python, Git and Github</label>
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Page