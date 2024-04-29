import { useLayoutEffect, useRef, useState } from 'react'
import { GiHamburgerMenu,GiCancel } from "react-icons/gi";
import './App.css'
import Navbar from './JSX/navbar'
import Home from './JSX/home'
import Discover from './JSX/discover'
import Clients from './JSX/clients'
import CountFunc from './JSX/count'
import Blog from './JSX/blog'
import Footer from './JSX/footer'
import undiscovered from './assets/images/undiscovered.jpeg'
import needs from './assets/images/needs.jpeg'
import event from './assets/images/event.jpeg'
import { MdArrowUpward } from "react-icons/md";
function App() {
  
  const [shownav,setshownav] = useState(false)
  const date = new Date()
  const year = date.getFullYear()

  useLayoutEffect(() => {
      if(window.innerWidth >= '768'){
          setshownav(true)
      }else{
          setshownav(false)
      }
  },[])
  window.addEventListener('resize', function() {
      if(window.innerWidth >= '768'){
          setshownav(true)
      }else{
          setshownav(false)
      }
  })
  const ScrollBtn = useRef()
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      ScrollBtn.current.style.display = "block";
    } else {
      ScrollBtn.current.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
    <div className=' w-full'>
      <div className='   top-0  z-50 opacity-100 overflow-hidden bg-slate-50 w-full'>
      <div className=" w-full relative ">
                {/* top nav */}
                <div className="  pb-2 gap-2 border-b-[1px] border-b-slate-500 flex flex-col md:flex-row justify-between w-full">
                    <div className=" flex gap-2 flex-row w-full md:w-[50%] justify-around">
                        <select className=" bg-transparent my-auto text-sm md:text-base outline-none border-none font-semibold text-gray-500 py-2 px-3" name="" id="">
                            <option value="">KIS</option>
                            <option value="">AF</option>
                            <option value="">ADD</option>
                        </select>
                        <select className="bg-transparent my-auto text-sm md:text-base outline-none border-none font-semibold text-gray-500 py-2 px-3" name="" id="">
                            <option value="">EURO</option>
                            <option value="">KSH</option>
                            <option value="">YEN</option>
                        </select>
                        <input className="bg-transparent my-auto mx-2 md:mx-0 text-ellipsis outline-none border-[1px] border-slate-500  rounded-sm py-1 w-fit min-w-3 text-sm sm:text-base font-semibold placeholder:text-center placeholder:font-semibold" type="text" placeholder="Search..." />
                    </div>
                    <div className=" z-50 flex flex-row w-full justify-around text-xs font-semibold text-slate-700 md:text-sm align-middle  md:w-[50%]">
                        <span className="hover:text-amber-500 cursor-pointer m-auto" title="call us">+2540000000000</span>
                        <span className="hover:text-amber-500 cursor-pointer m-auto">LOG-IN</span>
                        <span className="hover:text-amber-500 cursor-pointer m-auto">SIGN-UP</span>
                    </div>
                </div>
                {/* bottom nav */}
                <div className=" px-2 py-1 flex flex-col md:flex-row justify-around w-full">
                        <blockquote className=" flex flex-row w-full md:w-fit justify-around px-1 gap-3 ">
                            <span className=" -p-2 my-auto z-50 w-fit border-[1px] border-pink-700 rounded-sm">
                                { !shownav ? <GiHamburgerMenu onClick={() =>{setshownav((e) => !e)}} className=" z-50 transition-all duration-500 hover:bg-purple-600 flex md:hidden p-1 border[1px] border-red-600 rounded-sm cursor-pointer my-auto align-middle text-red-600 text-4xl" />
                            :           <GiCancel onClick={() =>{setshownav((e) => !e)}} className=" z-50 transition-all duration-500 hover:bg-purple-600 flex md:hidden  border[1px] border-red-600 rounded-sm cursor-pointer my-auto align-middle text-red-600 text-4xl font-thin" />
                            }
                            </span>
                            
                            <big className=" hover:shadow-md hover:animate-pulse  w-fit rounded-sm cursor-pointer hover:shadow-slate-700 transition-all duration-500 text-xl md:text-2xl  m-auto"  title="Your number one choice">EXPLORES</big>
                        </blockquote>
                        <ul className={` my-auto  font-semibold text-sm md:text-base justify-around text-slate-700 transition-all duration-500 md:translate-x-0 md:translate-y-0 ${shownav ? " translate-y-0  translate-x-0" :" z-0 opacity-0 -translate-y-20 -translate-x-6 " } transition-[height,h,all] duration-500 flex flex-col text-left  md:flex-row gap-3  justify-around w-full md:w-[50%] flex-wrap`}>
                            <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 hover:p-[1px] flex flex-row gap-0 my-auto text-center align-middle"><a href="#home">HOME</a> </li>
                            <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 hover:p-[1px] flex flex-row gap-0 my-auto text-center align-middle"><a href="#work">LOGIC</a> </li>
                            <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 hover:p-[1px] flex flex-row gap-0 my-auto text-center align-middle"><a href="#discover">DISCOVER</a> </li>
                            <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 hover:p-[1px] flex flex-row gap-0 my-auto text-center align-middle"><a href="#clients">CLIENTS</a>  </li>
                            <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 hover:p-[1px] flex flex-row gap-0 my-auto text-center align-middle"><a href="#count">REVIEW</a> </li>
                            <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 hover:p-[1px] flex flex-row gap-0 my-auto text-center align-middle"><a href="#blog">OUR BLOGS</a>  </li>
                        </ul>
                        
                    </div>
                    <div className={` transition-all duration-1000 flex md:hidden w-full ${!shownav ? '-mt-44' : ''} p-0 bg-transparent `}></div>
            </div>
      </div>
      
      {/* home component */}
      <div id='home' className=' h-fit w-full'>
        <Home/>
      </div>
      {/* how it works section */}
      <div id='work' className=" h-fit flex md:min-h-[500px] scroll-m-0  bg-slate-100 flex-row gap-3 justify-around flex-wrap w-full p-3">
        <h1 className=' text-xl w-fit m-auto md:text-2xl underline underline-offset-8 py-4'>How Things Happen</h1>
        
        <div className=" flex  bg-slate-100 flex-row gap-3 justify-around flex-wrap w-full p-3">
           <div className="w-[280px]  hover:shadow-purple-700 hover:shadow-lg h-fit min-h-[300px] cursor-pointer  hover:text-slate-50  bg-slate-50  flex flex-col justify-around  gap-3  rounded-sm shadow-sm shadow-slate-500">
            <img data-aos="zoom-in"  data-aos-easing="ease-in-sine" data-aos-duration="1000" className=" w-full mx-auto " src={event} alt="img altanative" />
            <p id="SmTxt" className=" p-2 text-black  font-semibold text-lg w-fit mx-auto">Pick an event</p>
            <p id="SmTxt" className="p-2 text-slate-600 text-sm w-fit mx-auto">The world is a vast adventure board. Spark your wanderlust by browsing upcoming expeditions - from scaling mountains to diving shipwrecks. Find the adventure that ignites your explorer spirit!</p>
            <button className='my-2 border-[1px] border-slate-400  hover:text-slate-950 hover:ring-1 hover:border-none rounded-sm min-w-[80px] m-auto px-2 py-1 text-sm md:text-base text-slate-500'>Read More</button>
        </div>

        <div className="w-[280px]  hover:shadow-purple-700 hover:shadow-lg h-fit min-h-[300px] cursor-pointer  hover:text-slate-50  bg-slate-50  flex flex-col justify-around  gap-3  rounded-sm shadow-sm shadow-slate-500">
            <img data-aos="zoom-in"  data-aos-easing="ease-in-sine" data-aos-duration="1000" className=" w-full mx-auto " src={needs} alt="img altanative" />
            <p id="SmTxt" className=" text-black  font-semibold text-lg w-fit mx-auto">Speculate your Needs</p>
            <p id="SmTxt" className=" text-slate-600 text-sm w-fit mx-auto">Beyond the map's edge lies the thrill of the unknown. Join us in pushing boundaries and uncovering hidden wonders. Be a part of expeditions that rewrite the narrative and unveil the world's secrets.</p>
            <button className=' my-2 border-[1px] border-slate-400  hover:text-slate-950 hover:ring-1 hover:border-none rounded-sm min-w-[80px] m-auto px-2 py-1 text-sm md:text-base text-slate-500'>Read More</button>
        </div>

        <div className="w-[280px]  hover:shadow-purple-700 hover:shadow-lg h-fit min-h-[300px] cursor-pointer  hover:text-slate-50  bg-slate-50  flex flex-col justify-around  gap-3  rounded-sm shadow-sm shadow-slate-500">
            <img data-aos="zoom-in"  data-aos-easing="ease-in-sine" data-aos-duration="1000" className=" w-full mx-auto " src={undiscovered} alt="img altanative" />
            <p id="SmTxt" className="p-2 text-black  font-semibold text-lg w-fit mx-auto">Discover the undiscovered</p>
            <p id="SmTxt" className="p-2 text-slate-600 text-sm w-fit mx-auto">We understand every explorer is unique.  Share your travel dreams and desired challenges. Our experts curate personalized itineraries to perfectly suit your skill level, interests, and thirst for adventure. Let's craft the exploration of your dreams!</p>
            <button className=' my-2 border-[1px] border-slate-400  hover:text-slate-950 hover:ring-1 hover:border-none rounded-sm min-w-[80px] m-auto px-2 py-1 text-sm md:text-base text-slate-500'>Read More</button>
        </div>
        </div>
       
      </div>
      {/* discover */}
      <div id='discover' className="  h-fit flex  bg-slate-100 flex-row gap-3 justify-around flex-wrap w-full p-3">
        <h1 className=' text-xl md:text-2xl underline underline-offset-8 py-4'>DISCOVER</h1>
        <div className='w-full'>
            <Discover/>
        </div>
      </div>
      {/* clients area */}
      <div id='clients' className=' h-fit w-full'>
        <Clients/>
      </div>
      {/* count sect*/}
      <div id='count' className=' h-fit w-full'>
        <CountFunc/>
      </div>
      {/* blog sect */}
      <div id='blog' className=' h-fit w-full'>
        <Blog/>
      </div>

      {/* footer sect */}
      <div className=' w-full' >
      <footer className=" flex flex-col gap-3 w-full">
                <div className=" flex flex-col md:flex-row w-full align-middle justify-around p-2">
                    <big className=" w-fit rounded-sm cursor-pointer hover:shadow-slate-700 transition-all duration-500 text-xl md:text-2xl  m-auto"  title="Your number one choice">EXPLORES</big>
                    <ul className={` my-auto font-semibold text-sm md:text-base text-slate-700 transition-all duration-500 md:translate-x-0 md:translate-y-0 flex flex-row py-4 px-4 flex-wrap text-left gap-3  justify-around w-full md:w-[50%] flex-wrap`}>
                    <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 hover:p-[1px] flex flex-row gap-0 my-auto text-center align-middle"><a href="#home">HOME</a> </li>
                        <li className="cursor-pointer w-fit overflow-hidden hover:text-amber-500 "><a href="#work">LOGIC</a> </li>
                        <li className="cursor-pointer w-fit overflow-hidden hover:text-amber-500 "><a href="#discover">DISCOVER</a> </li>
                        <li className="cursor-pointer w-fit overflow-hidden hover:text-amber-500 "><a href="#clients">CLIENTS</a>  </li>
                        <li className="cursor-pointer w-fit overflow-hidden hover:text-amber-500 "><a href="#count">REVIEW</a> </li>
                        <li className="cursor-pointer w-fit overflow-hidden hover:text-amber-500 "><a href="#blog">OUR BLOGS</a>  </li>
                    
                    </ul>
                </div>
                <hr className=" h-[1px] bg-slate-700 w-full my-2" />
                <div className=" my-4">
                    <blockquote className=" flex flex-row flex-wrap px-4 gap-1 text-center w-fit mx-auto my-auto text-sm md:text-base text-slate-800 ">
                        <p className=" mx-auto my-auto flex flex-row gap-1 align-middle">© <span>{year}</span>Copyright. All rights Reserved. Art designed by</p>
                        <a className=" font-mono mx-auto hover:text-amber-500 underline underline-offset-8 my-auto font-semibold" href="https://briannjuguna.netlify.app/">Brian Njuguna</a>
                    </blockquote>
                </div>
        </footer>
      </div>
      <button onClick={topFunction} ref={ScrollBtn} className=' w-fit p-2 text-base bottom-5 fixed right-6 z-50 bg-purple-700 hover:text-amber-500 hover:animate-none rounded-sm border-none animate-bounce '><MdArrowUpward className=' font-semibold text-lg' /></button>
    </div>
    
    
    </>
  )
}

export default App
