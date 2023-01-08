import React, { useState } from 'react';
import jordanOrange from "../assets/jordan-orange.png";
import jordan1 from "../assets/jordan1.webp";
import jordan2 from "../assets/jordan2.webp";
import jordan3 from "../assets/jordan3.webp";
import jordan4 from '../assets/jordan4.webp';
import jordan6 from '../assets/jordan6.webp';
import jordan8 from '../assets/jordan8.webp';
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
    const itemss = [
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
    const items = [
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

    return (
        <main className='px-8 md:px-12 h-screen bg-[#FEEAC2] pt-[10vh]'>
            <div className='h-full container m-auto md:grid md:grid-cols-2 lg:grid-cols-3'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='py-4 md:p-0'>
                        <h1 className='drop-shadow-custom uppercase text-3xl md:text-4xl lg:text-7xl font-bold'>Nike Air Jordan 1</h1>
                        <p className='py-2 md:py-4 text-xl font-medium'>Nike's Air Jordan 1s were among the most popular sneakers this year</p>
                        <h2 className='md:p-4 font-semibold text-3xl md:text-5xl text-orange-600'>$300</h2>
                        <button className='p-4 md:py-6 md:px-6 bg-stone-900 text-slate-200 rounded'>ADD TO CART</button>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex justify-center items-center flex-1'>
                        <img className='w-[80%] xs:w-[70%] hover:scale-110 hover:-rotate-30 transition-all duration-500 ease-in-out drop-shadow-custom md:-rotate-25 md:w-full' src={jordanOrange} alt="" />
                    </div>
                </div>
                <div className='md:hidden lg:flex flex justify-center items-center'>
                    <div className='flex flex-row gap-4 md:gap-2'>
                        <button>
                            <BsArrowUpCircleFill className='m-auto text-[#FECB7F]' size={25} onClick={prevSlide}/>
                        </button>
                        {
                            <div className='rounded-md flex m-auto hover:scale-105 transition-all duration-500 cursor-pointer ease-in-out' >
                                <div className='flex items-center justify-center rounded-md bg-blue-400 w-20'>
                                    <img src={items[currentIndex].image} alt="" className='w-20 -rotate-25' />
                                </div>
                                <div className='px-8 py-2 bg-white -ml-1 rounded-r-md'>
                                    <p className='font-medium'>{items[currentIndex].name.slice(0,18)}</p>
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
