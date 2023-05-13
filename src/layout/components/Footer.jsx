import React from 'react';
import './Footer.css';
import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwind.svg'
import viteLogo from './assets/vite.svg'

const Footer = () => {
    return (
        <>
            <div className='flex '>
                <div className=' absolute left-0 bg-slate-600'>
                    <p>Website by:</p>
                    <p>HeX The Cat</p>
                </div>

                <div className=' absolute right-0 flex justify-end bg-slate-900'>
                    <div className=' bg-cyan-700'>
                        <p className=' font-bold text-center'>Made with:</p>

                        <div className=' flex h-28 bg-green-500 items-center'>
                            
                            <a href="https://vitejs.dev" target="_blank">
                                <img src={viteLogo} className="logo" alt="Vite logo" />
                            </a>

                            <p className='text-center text-3xl font-extrabold'> + </p>
                            
                            <a href="https://react.dev" target="_blank">
                                <img src={reactLogo} className="logo react" alt="React logo" />
                            </a>
                            
                            <p className='text-center text-3xl font-extrabold'> + </p>

                            <a href="https://tailwindcss.com/" target="_blank">
                                <img src={tailwindLogo} className="logo" alt="Tailwind logo" />
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;