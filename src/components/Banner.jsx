import React from 'react'
import jordan1 from "../assets/jordan1.webp";

export const Banner = () => {
    return (
        <div className='px-8 md:px-12 py-20 bg-[#FEEAC2]'>
            <div className='conatiner m-auto flex items-center justify-center flex-wrap grid-cols-2 gap-4'>
                <div className='max-w-md m-auto'>
                    <h1 className='text-3xl md:text-4xl py-2 font-medium text-stone-900'>BE THE FIRST TO LEARN ABOUT NEW PRODUCTS</h1>
                    <p className='text-md py-2 text-stone-900'>Be the first to learn about our Latest Release</p>
                    <form action="" className='my-12 drop-shadow-sm flex flex-wrap justify-center'>
                        <input type="email" placeholder='Email' className='p-4  md:rounded-l-md outline-none capitalize  placeholder:text-stone-900'/>
                        <button className='mt-4 xs:mt-0 py-4 px-12  md:rounded-r-md bg-stone-900 text-slate-200'>SUBSCRIBE</button>
                    </form>
                </div>
                <img src={jordan1} alt="" className='m-auto drop-shadow-sm'/>
            </div>
        </div>
    )
}
