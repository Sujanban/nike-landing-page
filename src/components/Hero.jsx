import React from 'react';
import jordanOrange from "../assets/jordan-orange.png";
import jordan1 from "../assets/jordan1.webp";
import jordan2 from "../assets/jordan2.webp";
import jordan3 from "../assets/jordan3.webp";
import { AiTwotoneStar } from "react-icons/ai";
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs";

export const Hero = () => {
    return (
        <main className='px-12 h-screen bg-[#FEEAC2] pt-[10vh]'>
            <div className='h-full container m-auto grid grid-cols-3 gap-4'>
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
                        <img className='drop-shadow-custom -rotate-25 w-full' src={jordanOrange} alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col gap-12'>
                        <button>
                            <BsArrowUpCircleFill className='m-auto text-[#FECB7F]' size={25} />
                        </button>
                        <div className='rounded-md flex m-auto'>
                            <div className='flex items-center justify-center rounded-md bg-blue-400 w-20'>
                                <img src={jordan1} alt="" className='w-20 -rotate-25' />
                            </div>
                            <div className='px-8 py-2 bg-white -ml-1 rounded-r-md'>
                                <p className='font-medium'>Air Jordan</p>
                                <span className='flex py-1'>
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                </span>
                                <p>$250</p>
                            </div>
                        </div>
                        <div className='rounded-md flex m-auto'>
                            <div className='flex items-center justify-center rounded-md bg-blue-400 w-20'>
                                <img src={jordan2} alt="" className='w-20 -rotate-25' />
                            </div>
                            <div className='px-8 py-2 bg-white -ml-1 rounded-r-md'>
                                <p className='font-medium'>Air Jordan</p>
                                <span className='flex py-1'>
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                </span>
                                <p>$250</p>
                            </div>
                        </div>
                        <div className='rounded-md flex m-auto'>
                            <div className='flex items-center justify-center rounded-md bg-blue-400 w-20'>
                                <img src={jordan3} alt="" className='w-20 -rotate-25' />
                            </div>
                            <div className='px-8 py-2 bg-white -ml-1 rounded-r-md'>
                                <p className='font-medium'>Air Jordan</p>
                                <span className='flex py-1'>
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                    <AiTwotoneStar className='text-yellow-400 mr-1' />
                                </span>
                                <p>$250</p>
                            </div>
                        </div>
                        <button>
                            <BsArrowDownCircleFill className='m-auto text-[#FECB7F]' size={25} />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
