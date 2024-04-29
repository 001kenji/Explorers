import React, { memo } from "react";
import '../App.css'
import waterfall from '../assets/images/waterfall.jpeg'
import quote from '../assets/images/quote.jpeg'
import memories from '../assets/images/memories.jpeg'
import bestEvent from '../assets/images/bestEvent.jpeg'
function Blog() {
    const DbInfo = [
        {
            'RatingTitle' : 'BestRated',
            'title' :'How to locate your desires',
            'Stars' : '5.0',
            'Rating' : '10',
            'Commit' : 'Member',
            'Period' : '2024 January',
            'Description' : 'Beyond the map\'s edge lies the thrill of the unknown. Join us in pushing boundaries and uncovering hidden wonders. Be a part of expeditions that rewrite the narrative and unveil the world\'s secrets.',
            'PostImg' :waterfall,
            'Auther' : 'Nelson Mandela',
            'Quote' : 'The greatest glory in living lies not in never falling, but in rising every time we fall'
        },
        {
            'RatingTitle' : 'Most Visited',
            'title' :'How to book an event',
            'Stars' : '4.5',
            'Rating' : '12',
            'Commit' : 'Admin',
            'Period' : '2024 April',
            'Description' : ' Secure your spot on unforgettable adventures in just a few clicks! Our user-friendly platform guides you through the booking process, making planning your next exploration a breeze.',
            'PostImg' :bestEvent,
            'Auther' : 'Mark Twain',
            'Quote' : 'Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover'
        },
        {
            'RatingTitle' : 'Most Iconic',
            'title' :'Best of memories',
            'Stars' : '5.0',
            'Rating' : 'Undefined',
            'Commit' : 'Founder',
            'Period' : '2024 February',
            'Description' : 'Don\'t let precious moments fade! This website equips you with creative ideas for capturing photos, videos, and journaling entries that bring your memories back to life.',
            'PostImg' :memories,
            'Auther' : 'J.R.R. Tolkien',
            'Quote' : 'Not all those who wander are lost'
        },
        {
            'RatingTitle' : 'Most Viewed',
            'title' :'Find quotes of the day',
            'Stars' : '5.0',
            'Rating' : '10',
            'Commit' : 'Member',
            'Period' : '2024 March',
            'Description' : 'Start your day with a thought-provoking quote! This website provides a curated selection of daily quotes, offering wisdom, motivation, or a touch of humor to fuel your day.',
            'PostImg': quote,
            'Auther' : 'Oprah Winfrey',
            'Quote' : 'The biggest adventure you can take is to live the life of your dreams'
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

    const BlogMapper = DbInfo.map((items,index) => {
        return (
            <div key={index} onMouseLeave={()=> HideDiv(index,this)} onMouseEnter={()=> ShowDiv(index,this)} className=" my-auto h-fit z-40 flex flex-col min-w-[250px] sm:min-w-[300px] max-w-[300px] min-h-[300px] shadow-md shadow-slate-800 hover:shadow-purple-700 hover:shadow-lg cursor-pointer rounded-sm  m-4 bg-slate-50">
                <div className="relative  flex flex-col w-full justify-around min-h-[200px] ">
                    <img className=" h-fit absolute  z-0 w-full " src={items.PostImg} alt="img-Alt" />
                    
                </div>
                <div className=" px-2  z-50 bg-slate-50 flex flex-col align-middle justify-around gap-2">
                    <h1 className="">{items.title}</h1>
                    <div className=" flex flex-row flex-wrap text-right align-middle justify-end w-full gap-1 text-slate-500 text-sm">
                        <p className=" flex flex-row gap-1">Commited by: <span className=" font-semibold text-red-500">{items.Commit}</span> |</p>
                        <p>{items.Period}</p>
                    </div>
                    <span className=" py-4 text-slate-600 font-mono text-sm">{items.Description}</span>
                    <hr className=" h-[1px] bg-gray-500 w-full my-1" />
                    <p className=" cursor-pointer text-sm font-semibold hover:text-slate-900 w-fit transition-all duration-500 text-red-500 text-left">{items.Auther}</p>
                    <div className=" h-fit flex flex-row gap-2 text-sm">
                        <p>{items.Quote}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className=" flex  bg-slate-100 flex-col gap-3 justify-around w-full p-3">
                <h1 className=' mx-auto text-xl md:text-2xl underline underline-offset-8 py-4'>OUR BLOGS</h1>
                <p className=" text-center mx-auto italic" id="SmTxt">Stay up to date via our intel</p>
                <div className=" flex flex-row gap-8 flex-wrap align-middle justify-around w-full px-4 py-2">
                        {BlogMapper}
                </div>

                <div className=" flex  bg-slate-100 flex-col gap-3 justify-around w-full p-3">
                    <h1 className=' mx-auto text-xl md:text-2xl underline underline-offset-8 py-4'>Subscribe To Our Channel</h1>
                    <p className=" text-center mx-auto italic" id="SmTxt">By so doing, will be able to support your Busiess with ease...</p>
                    <div className=" min-h-[200px] py-5 flex flex-col gap-1 md:flex-row md:gap-0 w-full max-w-[800px] mx-auto my-auto">
                        <input className="xl:py-3 mx-auto bg-slate-800 text-center min-h-[40px] text-slate-200 placeholder:text-slate-200 my-auto md:mx-0 text-ellipsis outline-none p-2 border-[1px] border-slate-500  rounded-sm py-1 w-[80%] min-w-[80%] md:min-w-[70%] text-sm sm:text-base font-semibold placeholder:text-center placeholder:font-semibold" type="text" placeholder="Enter Email" />
                        <button className=" xl:py-3 lg:text-lg hover:ring-1 hover:bg-transparent hover:text-pink-700 transition-all duration-500 py-2 w-fit min-w-[100px] m-auto font-semibold rounded-sm text-sm md:text-base bg-pink-700">Submit</button>


                    </div>      
                </div>

            </div>
        </>
    )
}

export default memo(Blog)