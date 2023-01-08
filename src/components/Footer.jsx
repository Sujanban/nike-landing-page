import React from 'react'

export const Footer = () => {
    return (
        <div className='px-8 md:px-12 py-20'>
            <footer className=' container m-auto grid md:grid-cols-3 gap-4 max-w-6xl'>
                <div>
                    <h2 className='py-4 text-xl font-semibold'>ABOUT THE COMPANY</h2>
                    <li className='py-2 font-medium list-none'><a href="">About Us</a></li>
                    <li className='py-2 font-medium list-none'><a href="">Contacts</a></li>
                    <li className='py-2 font-medium list-none'><a href="">Shop</a></li>
                    <li className='py-2 font-medium list-none'><a href="">News</a></li>
                    <li className='py-2 font-medium list-none'><a href="">Privacy Policy</a></li>
                </div>
                <div>
                    <h2 className='py-4 text-xl font-semibold'>HELP</h2>
                    <li className='py-2 font-medium list-none'><a href="">Bonuses</a></li>
                    <li className='py-2 font-medium list-none'><a href="">Order Location</a></li>
                    <li className='py-2 font-medium list-none'><a href="">Delivery And Payment</a></li>
                    <li className='py-2 font-medium list-none'><a href="">Exchange And Refund</a></li>
                    <li className='py-2 font-medium list-none'><a href="">Gift Certificate</a></li>
                </div>
                <div>
                    <h2 className='py-4 text-xl font-semibold'>NIKE</h2>
                    <a className='py-2 font-medium list-none' href="tel:9823456789">+7 (999) 015-19-22</a>
                    <p className='py-2 font-medium list-none'>Kathmandu, Julious Street, 15</p>
                    <p className='py-2 font-medium list-none'>Daily From 6 Am T0 10Pm</p>
                </div>
            </footer>
        </div>

    )
}
