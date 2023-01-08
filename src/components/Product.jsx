import React, { useState } from 'react';
import jordan1 from "../assets/jordan1.webp";
import jordan2 from "../assets/jordan2.webp";
import jordan3 from "../assets/jordan3.webp";
import jordan3Pair from "../assets/jordan3-pair.webp";
import jordan3Sole from "../assets/jordan3-sole.webp";
const image = [
    jordan3,
    jordan3Pair,
    jordan3Sole
]

export const Product = () => {
    const [img, setImg] = useState(image[0]);

    return (
        <div className='px-12 w-full'>
            <div className='py-20 md:grid grid-cols-2 gap-4 m-auto container'>
                <div className='bg-yellow-400'>
                    <img src={img} alt="" className='w-full' />
                    <div className='px-4 py-2 w-full grid grid-cols-3 gap-4'>
                        {
                            image.map((item, i) => (
                                <div key={i}>
                                    <img
                                        src={item}
                                        onClick={() => setImg(image[i])}
                                        alt=""
                                        className='bg-yellow-300 transition duration-200 cursor-pointer'
                                    />
                                </div>
                            )

                            )
                        }
                        {/* <img src={jordan3} alt="" className='border' />
                        <img src={jordan3Pair} alt="" className='border opacity-75 transition duration-200 hover:opacity-100 cursor-pointer' />
                        <img src={jordan3Sole} alt="" className='border opacity-75 transition duration-200 hover:opacity-100 cursor-pointer' /> */}
                    </div>
                </div>
                <div>
                    <h1 className='px-6 py-4 text-3xl font-medium'>AIR JORDAN 1 MID 2022</h1>
                    <h2 className='px-6 py-4 text-2xl font-medium'>$290</h2>
                    <p className='px-6 py-2 text-xl font-medium'>Select Size</p>
                    <div className='flex flex-wrap max-w-md gap-4'>
                        <button className='px-6 py-2 m-4 rounded bg-yellow-400'>7</button>
                        <button className='px-6 py-2 m-4 rounded ring-2 ring-yellow-400'>7.5</button>
                        <button className='px-6 py-2 m-4 rounded ring-2 ring-yellow-400'>8</button>
                        <button className='px-6 py-2 m-4 rounded ring-2 ring-yellow-400'>8.5</button>
                        <button className='px-6 py-2 m-4 rounded ring-2 ring-yellow-400'>9</button>
                        <button className='px-6 py-2 m-4 rounded ring-2 ring-yellow-400'>9.5</button>
                        <button className='px-6 py-2 m-4 rounded ring-2 ring-yellow-400'>10</button>
                        <button className='px-6 py-2 m-4 rounded ring-2 ring-yellow-400'>10.5</button>
                    </div>
                    <div className='flex gap-4 py-4'>
                        <button className='p-4 m-4 rounded ring-2 ring-yellow-400'>To Favourates</button>
                        <button className='p-4 m-4 rounded bg-yellow-400'>Add To Cart</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
