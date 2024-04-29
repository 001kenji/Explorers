import React, { memo } from "react";
import '../App.css'
import AI from '../assets/images/AI.jpeg'
import p1 from '../assets/images/p1.jpeg'
import p2 from '../assets/images/p2.jpeg'
import p3 from '../assets/images/p3.jpeg'
import p4 from '../assets/images/p4.jpeg'
import p5 from '../assets/images/p5.jpeg'
import p6 from '../assets/images/p6.jpeg'
import earth from '../assets/images/earth.jpeg'
import HyperCar from '../assets/images/HyperCar.jpeg'
import madeLand from '../assets/images/madeLand.jpeg'
import natureDiscover from '../assets/images/natureDiscover.jpeg'
import pyramids from '../assets/images/pyramids.jpeg'
import { MdSaveAlt } from "react-icons/md";
import { FaExpandArrowsAlt } from "react-icons/fa";
function Discover() {
    
    const DbInfo = [
        {
            'bgImage' : pyramids,
            'RatingTitle' : 'BestRated',
            'title' :'Wonder Of The World',
            'Stars' : '5.0',
            'Rating' : '10',
            'Cost' : '$200-$400',
            'Resort' : 'Piramids',
            'Description' : 'Witness history\'s giants: Stand beside the Pyramids, the only wonder of the ancient world that remains. Marvel at their engineering marvel and ponder the mysteries they hold.',
            'PostImg' :p1,
            'OpenStatus' : 'Opened',
            'Location' : 'Egypt'
        },
        {
            'bgImage' : madeLand,
            'RatingTitle' : 'Most Visited',
            'title' :'Man-made Land',
            'Stars' : '4.5',
            'Rating' : '12',
            'Cost' : '$600-$900',
            'Resort' : 'Palm Island',
            'Description' : 'Explore man-made wonders that reshape landscapes. From towering artificial islands to reclaimed landmasses, discover how humans push boundaries and redefine the Earth\'s canvas.',
            'PostImg' :p2,
            'OpenStatus' : 'Opened',
            'Location' : 'Dubai'
        },
        {
            'bgImage' : natureDiscover,
            'RatingTitle' : 'Most Iconic',
            'title' :'Beauty Of Nature',
            'Stars' : '5.0',
            'Rating' : 'Undefined',
            'Cost' : 'Comming-Soon',
            'Resort' : 'Mars',
            'Description' : ' Witness breathtaking landscapes, from cascading waterfalls to vibrant coral reefs. Immerse yourself in the raw beauty of our planet and reconnect with the wonders that leave you speechless.',
            'PostImg' :p3,
            'OpenStatus' : 'Closed',
            'Location' : 'Space'
        },
        {
            'bgImage' : earth,
            'RatingTitle' : 'Most Viewed',
            'title' :'Mother Nature',
            'Stars' : '5.0',
            'Rating' : '10',
            'Cost' : '$500-$700',
            'Resort' : 'Amazon Forest',
            'Description' : 'Explore the awe-inspiring power and delicate balance of the natural world. Hike through ancient forests, trek across glaciers, and witness the untamed beauty that recharges the soul.',
            'PostImg' :p4,
            'OpenStatus' : 'Openned',
            'Location' : 'location here'
        },
        {
            'bgImage' : HyperCar,
            'RatingTitle' : 'Most Rated',
            'title' :'Hyper Car',
            'Stars' : '4.5',
            'Rating' : '12',
            'Cost' : '$300-$500',
            'Resort' : 'Hennessy Venom GT',
            'Description' : 'Explore the pinnacle of automotive engineering.  Unleash the thrill of piloting a Hyper Car, a machine pushing the boundaries of performance and design.  Feel the rush of innovation on four wheels.',
            'PostImg' :p5,
            'OpenStatus' : 'Opened',
            'Location' : 'U.S.A,GERMAY,etc'
        },
        {
            'bgImage' : AI,
            'RatingTitle' : 'Highly Recommended',
            'title' :'Error Of AI',
            'Stars' : '4.5',
            'Rating' : '12',
            'Cost' : '$300-$400',
            'Resort' : 'Technology',
            'Description' : 'Join the expedition into the frontier of Artificial Intelligence.  Uncover the possibilities of AI as it transforms every aspect of exploration, from unearthing hidden ruins to predicting weather patterns on uncharted planets. Be part of the next wave of discovery.',
            'PostImg' :p6,
            'OpenStatus' : 'Opened',
            'Location' : 'GERMANY,U.S.A,CHINA,etc'
        }
    ]
    function ShowDiv(props) {
        var name = `${props}div`
        var item = document.getElementById(name)
        item.classList = 'translate-y-0 z-0 transition-all duration-500  flex flex-row w-full gap-2 mb-0 my-auto  align-middle justify-between'
    }
    function HideDiv(props) {
        var name = `${props}div`
        var item = document.getElementById(name)
        item.classList = 'translate-y-10 z-0 transition-all duration-500 flex flex-row w-full gap-2 mb-0 my-auto  align-middle justify-between'
    }
    const DiscoverMapper = DbInfo.map((items,index) => {
        return (
            <div key={index} onMouseLeave={()=> HideDiv(index,this)} onMouseEnter={()=> ShowDiv(index,this)} className=" z-40 flex flex-col min-w-[250px] sm:min-w-[300px] max-w-[300px] min-h-[300px] shadow-md shadow-slate-800 rounded-sm m-4 bg-slate-50">
                <div className="relative  flex flex-col w-full justify-around min-h-[200px] ">
                    <img className=" absolute h-full z-0 w-full " src={items.bgImage} alt="img-Alt" />
                    <div  id={`${index}div`} className={`  transition-all duration-500 z-0 translate-y-10 flex flex-row w-full gap-2 mb-0 my-auto  align-middle justify-between`}>
                        <small className="  bg-red-500 text-slate-50 px-1 py-1 font-semibold text-center align-middle my-auto text-[x-small] rounded-sm cursor-pointer hover:text-red-500 hover:bg-transparent">{items.RatingTitle}</small>
                        <div className=" pb-2  flex flex-row justify-center gap-3 w-fit h-fit min-w-[20%] my-auto">
                                <p className=" p-1 bg-slate-800 text-slate-200 py-1 rounded-sm hover:text-sky-600 cursor-pointer"><FaExpandArrowsAlt /></p>
                                <p className=" p-1 bg-slate-800 text-slate-200 py-1 rounded-sm hover:text-sky-600 cursor-pointer"><MdSaveAlt /></p>
                        </div>
                    </div>
                </div>
                <div className=" px-2 z-50 bg-slate-50 flex flex-col align-middle justify-around gap-2">
                    <h1 className="">{items.title}</h1>
                    <div className=" flex flex-row flex-wrap text-right align-middle justify-end w-full gap-1 text-slate-500 text-sm">
                        <p className=" px-1 text-sm text-slate-50 bg-cyan-600 rounded-sm text-center my-auto">{items.Stars}</p>
                        <p>{items.Rating} Ratigs |</p>
                        <p className=" flex flex-row gap-1">From <span className=" font-semibold text-red-500">{items.Cost}</span> |</p>
                        <p>{items.Resort} |</p>
                    </div>
                    <img className=" rounded-lg p-1 w-[80px] h-[80px]  align-middle my-auto" src={items.PostImg} alt="profile-img" />
                    <span className=" text-slate-600 font-mono text-sm">{items.Description}</span>
                    <hr className=" h-[1px] bg-gray-500 w-full my-1" />
                    <p className=" cursor-pointer text-sm font-semibold hover:text-slate-900 w-fit transition-all duration-500 text-red-500 text-left">{items.OpenStatus}</p>
                    <div className=" flex flex-row gap-2 text-sm">
                        <p>location Icon</p>
                        <p>download Icon</p>
                        <p className=""> heart Icon</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className=" w-full">
                <div className=" flex flex-row flex-wrap align-middle justify-around w-full px-4 py-2">
                        {DiscoverMapper}
                </div>
            </div>
        </>
    )
}

export default memo(Discover)