import React, { memo } from "react";
import '../App.css'

function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return (

        <footer className=" flex flex-col gap-3 w-full">
                <div className=" flex flex-col md:flex-row w-full align-middle justify-around p-2">
                    <big className=" w-fit rounded-sm cursor-pointer hover:shadow-slate-700 transition-all duration-500 text-xl md:text-2xl  m-auto"  title="Your number one choice">EXPLORES</big>
                    <ul className={` my-auto font-semibold text-sm md:text-base text-slate-700 transition-all duration-500 md:translate-x-0 md:translate-y-0 flex flex-row py-4 px-4 flex-wrap text-left gap-3  justify-around w-full md:w-[50%] flex-wrap`}>
                        <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 ">HOME</li>
                        <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 ">LOGIC</li>
                        <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 ">DISCOVER</li>
                        <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 ">REVIEW</li>
                        <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 ">OUR BLOGS</li>
                        <li className=" cursor-pointer w-fit overflow-hidden hover:text-amber-500 ">REACH US</li>
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
    )
}


export default memo(Footer)

