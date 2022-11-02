import React, { useEffect, useState } from 'react';
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
const shoeData = [
    {
        'id': 1,
        'name': 'Air Jordan 1 Retro sneakers',
        'color': 'red',
        'image': jordan1,
        'price': '$650',
        'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
    },
    {
        'id': 2,
        'name': 'Air Jordan 1 Mid sneakers',
        'color': 'black',
        'image': jordan2,
        'price': '$399',
        'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
    },
    {
        'id': 3,
        'name': 'Air Jordan 7 Retro sneakers',
        'color': 'red',
        'image': jordan4,
        'price': '$285',
        'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
    },
    {
        'id': 4,
        'name': 'Air Jordan 3 Retro sneakers',
        'color': 'white',
        'image': jordan6,
        'price': '$299',
        'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
    },
    {
        'id': 5,
        'name': 'Air Jordan 1 Retro High OG sneakers',
        'color': 'red',
        'image': jordan1,
        'price': '$450',
        'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
    },
    {
        'id': 6,
        'name': 'Air Jordan 1 Retro High "Hyper Royal" sneakers',
        'color': 'black',
        'image': jordan2,
        'price': '$299',
        'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
    },
    {
        'id': 7,
        'name': 'Air Jordan 1 Retro High ',
        'color': 'white',
        'image': jordan6,
        'price': '$299',
        'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
    },
    {
        'id': 8,
        'name': 'Air Jordan 1 Retro basketball purple 2.0',
        'color': 'black',
        'image': jordan8,
        'price': '$299',
        'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
    },
    {
        'id': 9,
        'name': 'Air Jordan 1 mid-top SE sneakers',
        'color': 'white',
        'image': jordan3,
        'price': '$299',
        'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
    }
]
export const Shop = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState(shoeData);
    const filterData = (cat) => {
        const result = shoeData.filter(item => item.color === cat);
        setData(result)
    }



    return (
        <div className='px-12 py-20 bg-[#FEEAC2]'>
            <div className='container m-auto '>
                <h1 className='px-6 py-4 text-3xl font-semibold text-center'>NEW COLLECTION</h1>
                <div className='py-4 px-12 flex items-center justify-between'>
                    <div className='flex items-center justify-center'>
                        <h2 className='px-6 py-4 text-2xl font-medium'>Colors</h2>
                        {/* <span className='m-2 p-1 cursor-pointer rounded bg-green-800 text-white text-sm' onClick={() => setData(shoeData)}>Reset</span> */}
                        <span className='relative m-2 h-6 cursor-pointer w-6 rounded-full bg-white' onClick={() => setData(shoeData)}>
                            <i className='font-normal text-2xl text-red-600 absolute -top-1 left-[10%]'>X</i>
                        </span>

                        <span className='m-2 h-6 cursor-pointer w-6 rounded-full bg-stone-800' onClick={() => filterData('black')}></span>
                        <span className='m-2 h-6 cursor-pointer w-6 rounded-full bg-gray-300' onClick={() => filterData('white')}></span>
                        <span className='m-2 h-6 cursor-pointer w-6 rounded-full bg-red-500' onClick={() => filterData('red')}></span>
                        {/* <span className='m-2 h-6 w-6 rounded-full bg-yellow-500'></span>
                        <span className='m-2 h-6 w-6 rounded-full bg-red-500'></span>
                        <span className='m-2 h-6 w-6 rounded-full bg-pink-500'></span>
                        <span className='m-2 h-6 w-6 rounded-full bg-cyan-500'></span>
                        <span className='m-2 h-6 w-6 rounded-full bg-blue-500'></span> */}
                    </div>
                    <form action="" className='flex items-center justify-center'>
                        <input 
                        type="text" 
                        placeholder='Start Typing...' 
                        className='p-2 outline-none roundded-l-md rounded' 
                        onChange={(e)=> setQuery(e.target.value)}
                        />
                        {/* <button className='p-2 px-4 bg-stone-900 rounded-r-md text-white'><FiSearch size={25} /></button> */}
                    </form>
                </div>
                <div className='grid grid-cols-3 gap-4 '>
                    {
                        data.filter(data=> data.name.toLowerCase().includes(query)).map((item, index) => (
                            <>
                                <div className='m-16' key={index}>
                                    <img src={item.image} alt="" />
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h1 className='font-medium'>{item.name}</h1>
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
