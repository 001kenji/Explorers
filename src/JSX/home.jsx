import React, { memo } from "react";
import AOS from "aos";
import '../App.css'
import { } from "react-icons/gi";
import Aos from "aos";

import Wonders from '../assets/images/wonders.jpeg'
import Health from '../assets/images/Health.png'
import Infrustructure from '../assets/images/Infrustructure.png'
import Machines from '../assets/images/machines.png'
import nature from '../assets/images/nature.jpeg'
import Universe from '../assets/images/Universe.jpeg'


function Home() {
    Aos.init()

    function Push() {
        alert('Glad you pushed...')
    }
    return (
        <>
            <div id='Master-Home' className=" w-full">
                {/* top home */}
                <div className=" flex flex-col text-center align-middle min-h-[300px] md:min-h-[400px]" id="TopHome">
                    <div className=" flex min-h-[300px] md:min-h-[400px] lg:min-h-[420px] flex-col top-10  px-2 gap-4 justify-center text-center w-full m-auto">
                        <h1 data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-sine" data-aos-duration="1000"  className=" text-xl md:text-2xl">EXPLORE YOUR WANTS</h1>
                        <h1 data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1000"  className=" text-xl md:text-2xl">FULLFILL YOUR DESIRES</h1>
                        <span data-aos="fade-up" data-aos-delay="50" data-aos-easing="ease-in-sine" data-aos-duration="1000"  className=" font-mono text-sm sm:text-base px-auto bg-slate-300 w-fit mx-auto bg-opacity-35 rounded-sm">Malls, Villas, Hotels, Wonders of the world... name it ? Can all be found here. </span>
                    </div>
                    
                    <div className=" py-3  flex flex-col gap-6 md:gap-3 md:flex-row flex-wrap justify-around align-middle w-full">
                        <blockquote  className="bg-slate-100 bg-opacity-20 text-black rounded-sm shadow-sm shadow-slate-600 p-2 py-6 flex flex-col gap-2 w-[70%] m-auto sm:w-fit md:min-w-[45%] lg:min-w-[400px]">
                            <span className=" flex flex-row justify-around">   <p className=" text-slate-900 font-semibold">Desire ?</p> <p></p>  </span>
                            <input  className=" outline-none hover:ring-1 border-[1px] border-slate-400 rounded-sm p-2 w-full text-ellipsis text-center placeholder:text-center placeholder:font-semibold placeholder:text-sm md:placeholder:text-base" type="text" placeholder="Anything anywhere..." />
                        </blockquote>

                        <blockquote className="bg-slate-100 bg-opacity-20 rounded-sm  shadow-sm shadow-slate-600 p-2 py-6 flex flex-col gap-2 w-[70%] m-auto sm:w-fit md:min-w-[45%] lg:min-w-[400px]">
                            <span className=" flex flex-row justify-around">   <p className=" text-slate-900 font-semibold">Location ?</p> <p></p>  </span>
                            <input  className="outline-none hover:ring-1 border-[1px] border-slate-400 rounded-sm p-2 w-full text-ellipsis text-center placeholder:text-center placeholder:font-semibold placeholder:text-sm md:placeholder:text-base" type="text" placeholder="From the sky to the core..." />
                        </blockquote>

                        <button className=" xl:py-3 lg:text-lg hover:ring-1 hover:bg-transparent hover:text-pink-700 transition-all duration-500 p-2 w-fit min-w-[100px] m-auto font-semibold rounded-sm text-sm md:text-base bg-pink-700" onClick={Push}>PUSH</button>

                    </div>
                </div>
                {/* bottom home */}
                <div className=" flex min-h-[300px] transition-all duration-500 bg-slate-100 flex-row gap-3 justify-around flex-wrap w-full p-3">
                    <div data-aos="flip-left"  data-aos-easing="ease-in-sine" data-aos-duration="1000" className="w-[220px] h-fit transition-all duration-500 cursor-pointer hover:bg-pink-700 hover:text-slate-50  bg-slate-50 py-4 flex flex-col gap-3 p-2 rounded-sm shadow-sm shadow-slate-500">
                            <img className="  max-w-[50%] mx-auto w-[50%] " src={Wonders} alt="img altanative" />
                            <p id="SmTxt" className=" text-slate-900 font-semibold text-base w-fit mx-auto">Wonders</p>
                            <p id="SmTxt" className=" text-slate-600 text-sm w-fit mx-auto">Unlimited</p>
                    </div>
                    <div data-aos="flip-right"  data-aos-easing="ease-in-sine" data-aos-duration="1000" className="w-[220px] h-fit transition-all duration-500  cursor-pointer hover:bg-pink-700 hover:text-slate-50  bg-slate-50 py-4 flex flex-col gap-3 p-2 rounded-sm shadow-sm shadow-slate-500">
                            <img className="w-[50%]  max-w-[50%] mx-auto " src={Machines} alt="img altanative" />
                            <p id="SmTxt" className=" text-slate-900 font-semibold text-base w-fit mx-auto">Machines</p>
                            <p id="SmTxt" className=" text-slate-600 text-sm w-fit mx-auto">10 grand altanatives </p>
                    </div>
                    <div data-aos="flip-left"  data-aos-easing="ease-in-sine" data-aos-duration="1000" className="w-[220px] h-fit transition-all duration-500  cursor-pointer hover:bg-pink-700 hover:text-slate-50  bg-slate-50 py-4 flex flex-col gap-3 p-2 rounded-sm shadow-sm shadow-slate-500">
                            <img className="w-[50%]  max-w-[50%] mx-auto " src={Infrustructure} alt="img altanative" />
                            <p id="SmTxt" className=" text-slate-900 font-semibold text-base w-fit mx-auto">Infrustructure</p>
                            <p id="SmTxt" className=" text-slate-600 text-sm w-fit mx-auto">5 grand altanatives</p>
                    </div>
                    <div data-aos="flip-right"  data-aos-easing="ease-in-sine" data-aos-duration="1000" className="w-[220px] h-fit transition-all duration-500  cursor-pointer hover:bg-pink-700 hover:text-slate-50  bg-slate-50 py-4 flex flex-col gap-3 p-2 rounded-sm shadow-sm shadow-slate-500">
                            <img className="w-[50%]  max-w-[50%] mx-auto " src={Health} alt="img altanative" />
                            <p id="SmTxt" className=" text-slate-900 font-semibold text-base w-fit mx-auto">Health</p>
                            <p id="SmTxt" className=" text-slate-600 text-sm w-fit mx-auto">Unlimited</p>
                    </div>
                    <div data-aos="flip-left"  data-aos-easing="ease-in-sine" data-aos-duration="1000" className="w-[220px] h-fit transition-all duration-500  cursor-pointer hover:bg-pink-700 hover:text-slate-50  bg-slate-50 py-4 flex flex-col gap-3 p-2 rounded-sm shadow-sm shadow-slate-500">
                            <img className="w-[50%]  max-w-[50%] mx-auto " src={Universe} alt="img altanative" />
                            <p id="SmTxt" className=" text-slate-900 font-semibold text-base w-fit mx-auto">Universe</p>
                            <p id="SmTxt" className=" text-slate-600 text-sm w-fit mx-auto">Unlimited</p>
                    </div>
                    <div data-aos="flip-right"  data-aos-easing="ease-in-sine" data-aos-duration="1000" className="w-[220px] h-fit transition-all duration-500  cursor-pointer hover:bg-pink-700 hover:text-slate-50  bg-slate-50 py-4 flex flex-col gap-3 p-2 rounded-sm shadow-sm shadow-slate-500">
                            <img className="w-[50%]  max-w-[50%] mx-auto " src={nature} alt="img altanative" />
                            <p id="SmTxt" className=" text-slate-900 font-semibold text-base w-fit mx-auto">Nature</p>
                            <p id="SmTxt" className=" text-slate-600 text-sm w-fit mx-auto">More that enough</p>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default memo(Home)