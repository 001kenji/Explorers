import React, { memo, useState } from "react";
import '../App.css'
import { GiStarMedal } from "react-icons/gi";
import AI from '../assets/images/AI.jpeg'
import p1 from '../assets/images/p1.jpeg'
import p2 from '../assets/images/p2.jpeg'
import p3 from '../assets/images/p3.jpeg'
import p4 from '../assets/images/p4.jpeg'
import p5 from '../assets/images/p5.jpeg'
import p6 from '../assets/images/p6.jpeg'
function Clients() {
    const [Rotate,setRotate] = useState(10)
    const clientDb = [
        {
            'name' : 'John Doe',
            'location' : 'Paris, France',
            'description' : 'This website ignites my wanderlust! With breathtaking visuals and diverse expeditions, it\'s a treasure trove of inspiration for my next adventure.',
            'rating' : '4',
            'Img' : p1
        },
        {
            'name' : 'Cloe Jeck',
            'location' : 'London, UK',
            'description' : 'This platform goes beyond booking tours. Their curated expeditions cater to every explorer type, ensuring a safe and unforgettable journey tailored to my specific interests.',
            'rating' : '2',
            'Img' : p3
        },
        {
            'name' : 'Tailor Mosca',
            'location' : 'Washington DC, USA',
            'description' : 'I love the sense of community here. From connecting with experienced explorers to sharing travel tips, it fosters collaboration and fuels the spirit of exploration.',
            'rating' : '3',
            'Img' : p4
        },
        {
            'name' : 'Mescofa Juskaf',
            'location' : 'Nairobi, Kenya',
            'description' : 'This website is a breath of fresh air. It pushes me to explore beyond the mainstream tourist traps, offering unique experiences that unveil hidden gems and forgotten corners of the world.',
            'rating' : '5',
            'Img' : p5
        }
    ]

    const ShowStars = (props) => {
        var num = Number(props)
        var str = []
        var x = 0
        for (x; x < num; x++) {
            str.push(<GiStarMedal key={x} />)
        }
        return str
    }
    const ClietntMapper = clientDb.map((items,i) => {
        return (
            <div key={i} className=" cursor-pointer shadow-md shadow-slate-600 flex flex-col w-full min-h-[200px] min-w-full m-auto  rounded-sm p-3 text-sm text-left align-middle justify-around h-fit">
                <div   className=" flex flex-row gap-3 w-full align-middle py-2 bg-transparent">
                    <img className=" rounded-full w-[80px] h-[80px] my-auto border-none" src={items.Img} alt="" />
                    <div   className=" flex flex-col gap-2 left-2">
                        <h1 >{items.name}</h1>
                        <span >{items.location}</span>
                        <blockquote  className=" flex flex-row gap-2 align-middle w-fit my-auto" >{ShowStars(items.rating)}</blockquote>
                    </div>
                </div>
                <blockquote className=" text-sm text-slate-600 font-mono px-2 align-middle my-auto">{items.description}</blockquote>

            </div>
        )
    })

    const Stopper = (props) => {
        if(props == 'stop'){
            var doc = document.getElementById('rotateClient')
            doc.style.animationPlayState = 'paused'
        }else if(props == 'proceed'){
            var doc = document.getElementById('rotateClient')
            doc.style.animationPlayState = 'running'
        }
    }

    return (
        <>
            <div className=" flex  bg-slate-100 flex-col gap-3 justify-around w-full p-3">
                <h1 className=' mx-auto text-xl md:text-2xl underline underline-offset-8 py-4'>WHAT SAYS OUR CLIETS</h1>
                <div className=" flex flex-row overflow-hidden w-[80%] max-w-[700px] mx-auto p-3">
                    <div id="rotateClient" onMouseLeave={() => Stopper('proceed')} onMouseEnter={() => Stopper('stop')}  className={` gap-5  flex transition-all  duration-500  flex-row w-full my-auto`}>
                       {ClietntMapper} 
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default memo(Clients)