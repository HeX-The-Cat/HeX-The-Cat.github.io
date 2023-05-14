import React from 'react';
import './Footer.css';
import {reactLogo, viteLogo, tailwindLogo} from '../assets'

const Footer = () => {
    return (
        <>
            <div className='flex justify-between w-[100%] FooterMain'>
                <div className=' flex flex-col justify-center pl-8'>
                    <p className=' text-4xl py-2'>Website by:</p>
                    <p className=' text-4xl py-2'>HeX The Cat</p>
                </div>

                
                <div className=' flex flex-col justify-center pr-8'>
                    <p className=' text-xl font-bold text-center'>Made with:</p>

                    <div className=' flex h-28 items-center'>
                            
                        <a href="https://vitejs.dev" target="_blank">
                            <img src={viteLogo} className="logo" alt="Vite logo" />
                        </a>

                        <p className='text-center text-3xl font-extrabold'> + </p>
                            
                        <a href="https://react.dev" target="_blank" className=' overflow-hidden'>
                            <img src={reactLogo} className="logo react" alt="React logo" />
                        </a>
                            
                        <p className='text-center text-3xl font-extrabold'> + </p>

                        <a href="https://tailwindcss.com/" target="_blank">
                            <img src={tailwindLogo} className="logo" alt="Tailwind logo" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;