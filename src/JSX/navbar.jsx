import React,{memo, useEffect, useLayoutEffect, useState} from "react";
import { GiHamburgerMenu,GiCancel } from "react-icons/gi";
import '../App.css'
function Navbar() {
    const [shownav,setshownav] = useState(false)

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

    return (
        <>
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
                        <ul className={` my-auto font-semibold text-sm md:text-base justify-around text-slate-700 transition-all duration-500 md:translate-x-0 md:translate-y-0 ${shownav ? " translate-y-0  translate-x-0" :" z-0 opacity-0 -translate-y-20 -translate-x-6 " } transition-[height,h,all] duration-500 flex flex-col text-left  md:flex-row gap-3  justify-around w-full md:w-[50%] flex-wrap`}>
                            <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 hover:p-[1px]">HOME</li>
                            <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 hover:p-[1px]">LOGIC</li>
                            <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 hover:p-[1px]">DISCOVER</li>
                            <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 hover:p-[1px]">REVIEW</li>
                            <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 hover:p-[1px]">OUR BLOGS</li>
                            <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 hover:p-[1px]">REACH US</li>
                        </ul>
                        
                    </div>
                    <div className={` transition-all duration-1000 flex md:hidden w-full ${!shownav ? '-mt-44' : ''} p-0 bg-transparent `}></div>
            </div>
        </>
    )
}


export default memo(Navbar)