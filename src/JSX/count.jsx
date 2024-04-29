import React, {memo, useEffect,useRef,useState } from "react";
import Aos from "aos";
import '../App.css'

function CountFunc() {
    Aos.init()
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)
    const Listing = useRef()
    const [AuthCheck,SetAuthCheck] = useState(true)
    const [height,setheight] = useState(0)
    var count1End = 187
    var count2End = 292
    var count3End = 204
    var count4End = 107
  
    
    function StartThing() {
        SetStartOver(true)
        for (let x = 0; x < count1End ;) {
                            
            setTimeout(() => {
            setCount1(x) 
            x++
            }, 1000);            
            
        }
    }
    //StartThing()
    var x = 0
    
   const Starter = () =>{
   
    
   }
   setTimeout(() => {
        
    if(count1 <= count1End){
        setCount1((e) => e+1)
    }
    if(count2 <= count2End){
        setCount2((e) => e+1)
    }
    if(count3 <= count3End){
        setCount3((e) => e+1)
    }
    if(count4 <= count4End){
        setCount4((e) => e+1)
    }
    
}, 100); 
    // useEffect(() => {
    //     if (!AuthCheck) {
    //         Starter()
    //     }
        
    // }, [AuthCheck])
    
    
    // window.addEventListener('scroll', function() {
    //     console.log(scrollY,":",height,AuthCheck)

    //     if(Number(this.scrollY) >= Number(height) && AuthCheck && this.scrollY > 2000 && this.scrollY < 8000){
    //         SetAuthCheck(false)
    //         console.log('callig')
    //         Starter()
    //     }
    // })
    
    useEffect(() => {
        setheight(Listing.current.offsetTop)
    },[])
   
    // var x =document.getElementById('Listing')
    
    return (
        <>
            <div className=" w-full" id="CoverImg">
            <div data-aos="fade-up" data-aos-delay="50"  data-aos-offset="400" data-aos-duration="3000"    ref={Listing} onMouseEnter={() =>Starter()}  id='Listing' className=' flex bg-slate-800 bg-opacity-70 min-h-[500px] lg:min-h-[600px] lg:text-lg flex-col md:flex-row gap-3 justify-around h-fit w-full text-sm font-semibold'>
                <blockquote className=' hover:text-amber-500 cursor-pointer text-slate-200 flex flex-col gap-1 my-auto align-middle w-fit text-center mx-auto'>
                <p className=' mx-auto flex flex-row gap-1 align-middle my-auto ' >{count1} K <sup className=' text-xs font-semibold'>+</sup></p>
                <p className=' text-center align-middle my-auto font-semibold'>Satisfied Clients</p>
                </blockquote>
                
                <blockquote className='hover:text-amber-500 cursor-pointer text-slate-200 flex flex-col gap-1 my-auto align-middle w-fit text-center mx-auto'>
                <p className='mx-auto   flex flex-row gap-1 align-middle my-auto'>{count2} K <sup className=' text-xs font-semibold'>+</sup></p>
                <p className=' text-center align-middle my-auto font-semibold'>Approved Listing</p>
                </blockquote>
                
                <blockquote className='hover:text-amber-500 cursor-pointer text-slate-200 flex flex-col gap-1 my-auto align-middle w-fit text-center mx-auto'>
                <p className='mx-auto  flex flex-row gap-1 align-middle my-auto'>{count3} K <sup className=' text-xs font-semibold'>+</sup></p>
                <p className=' text-center align-middle my-auto font-semibold'>Contributions</p>
                </blockquote>
                
                <blockquote className='hover:text-amber-500 cursor-pointer text-slate-200 flex flex-col gap-1 my-auto align-middle w-fit text-center mx-auto'>
                <p className='mx-auto  flex flex-row gap-1 align-middle my-auto'>{count4} K <sup className=' text-xs font-semibold'>+</sup></p>
                <p className=' text-center align-middle my-auto font-semibold'>Monthly Booking</p>
                </blockquote>
                

            </div>
            </div>
        </>
    )
}

export default memo(CountFunc)