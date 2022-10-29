import React from 'react';
import { FiSearch } from "react-icons/fi";
import jordan1 from '../assets/jordan1.webp'
import jordan2 from '../assets/jordan2.webp'
import jordan3 from '../assets/jordan3.webp'
import jordan4 from '../assets/jordan4.webp'
import jordan5 from '../assets/jordan5.webp'
import jordan6 from '../assets/jordan6.webp'
import jordan7 from '../assets/jordan7.webp'
import jordan8 from '../assets/jordan8.webp'
import { AiTwotoneStar } from "react-icons/ai";

export const Shop = () => {
    const shoe = [
        {
            'id': 1,
            'image': jordan3,
            'price': '$200',
            'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
        },
        {
            'id': 2,
            'image': jordan4,
            'price': '$250',
            'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
        },
        {
            'id': 3,
            'image': jordan5,
            'price': '$150',
            'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
        },
        {
            'id': 4,
            'image': jordan6,
            'price': '$100',
            'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
        },
        {
            'id': 5,
            'image': jordan7,
            'price': '$300',
            'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
        },
        {
            'id': 6,
            'image': jordan8,
            'price': '$299',
            'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
        }
    ]
    return (
        <div className='px-12 py-20 bg-[#FEEAC2]'>
            <div className='container m-auto '>
                <h1 className='px-6 py-4 text-3xl font-semibold text-center'>NEW COLLECTION</h1>
                <div className='py-4 flex items-center justify-around'>
                    <div className='flex items-center justify-center'>
                        <h2 className='px-6 py-4 text-2xl font-medium'>Colors</h2>
                        <span className='m-2 h-6 w-6 rounded-full bg-red-500'></span>
                        <span className='m-2 h-6 w-6 rounded-full bg-yellow-500'></span>
                        <span className='m-2 h-6 w-6 rounded-full bg-stone-800'></span>
                        <span className='m-2 h-6 w-6 rounded-full bg-pink-500'></span>
                        <span className='m-2 h-6 w-6 rounded-full bg-cyan-500'></span>
                        <span className='m-2 h-6 w-6 rounded-full bg-blue-500'></span>
                    </div>
                    <form action="" className='flex items-center justify-center'>
                        <input type="text" placeholder='Search...' className='p-2 outline-none rounded-l-md' />
                        <button className='p-2 px-4 bg-stone-900 rounded-r-md text-white'><FiSearch size={25} /></button>
                    </form>
                </div>
                <div className='grid grid-cols-3 gap-4 '>
                    {
                        shoe.map((item) => (
                            <>
                                <div className='m-16'>
                                    <img src={item.image} alt="" />
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <p>{item.price}</p>
                                            <li className='flex'>{item.rating}</li>
                                        </div>
                                        <button className='px-6 py-2 text-white bg-stone-900 rounded-md'>ORDER</button>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
