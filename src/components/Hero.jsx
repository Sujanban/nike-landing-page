import React, { useState } from 'react';
import jordanOrange from "../assets/jordan-orange.png";
import jordan1 from "../assets/jordan1.webp";
import jordan2 from "../assets/jordan2.webp";
import jordan3 from "../assets/jordan3.webp";
import { AiTwotoneStar } from "react-icons/ai";
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs";

export const Hero = () => {
    let [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = ()=>{
        if (currentIndex === 0) {
            setCurrentIndex(items.length-1)
        } else {
            setCurrentIndex(currentIndex-1)
        }
    }
    const nextSlide = ()=>{
        if (currentIndex === items.length-1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex+1)
        }
    }
    console.log(currentIndex)
    const items = [
        {
            'name': 'Air Jordan',
            'image': jordan1,
            'price': '200$',
            'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
        },
        {
            'name': 'Bir Jordan',
            'image': jordan2,
            'price': '250$',
            'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
        },
        {
            'name': 'Cir Jordan',
            'image': jordan3,
            'price': '300$',
            'rating': [<AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />, <AiTwotoneStar />]
        }
    ]

    return (
        <main className='px-12 h-screen bg-[#FEEAC2] pt-[10vh]'>
            <div className='h-full container m-auto grid grid-cols-3'>
                <div className='flex flex-col items-center justify-center'>
                    <div>
                        <h1 className='drop-shadow-custom uppercase text-8xl font-bold'>Nike Air Jordan 1</h1>
                        <p className='py-4 text-xl font-medium'>Nike's Air Jordan 1s were among the most popular sneakers this year</p>
                        <h2 className='p-4 font-semibold text-5xl text-orange-600'>$300</h2>
                        <button className='py-6 px-6 bg-stone-900 text-slate-200 rounded'>ADD TO CART</button>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex justify-center items-center flex-1'>
                        <img className='hover:scale-110 hover:-rotate-30 transition-all duration-500 ease-in-out drop-shadow-custom -rotate-25 w-full' src={jordanOrange} alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col gap-12'>
                        <button>
                            <BsArrowUpCircleFill className='m-auto text-[#FECB7F]' size={25} onClick={prevSlide}/>
                        </button>
                        {
                            <div className='rounded-md flex m-auto hover:scale-105 transition-all duration-500 cursor-pointer ease-in-out' >
                                <div className='flex items-center justify-center rounded-md bg-blue-400 w-20'>
                                    <img src={items[currentIndex].image} alt="" className='w-20 -rotate-25' />
                                </div>
                                <div className='px-8 py-2 bg-white -ml-1 rounded-r-md'>
                                    <p className='font-medium'>{items[currentIndex].name}</p>
                                    <span className='flex py-1'>
                                        <li className='text-yellow-400 list-none flex mr-1'>{items[currentIndex].rating}</li>
                                    </span>
                                    <p>$250</p>
                                </div>
                            </div>
                        }
                        <button>
                            <BsArrowDownCircleFill className='m-auto text-[#FECB7F]' size={25} onClick={nextSlide} />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
