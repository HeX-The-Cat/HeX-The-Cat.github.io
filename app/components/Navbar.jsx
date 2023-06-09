"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { hexlogo } from "../assets";
import "./Navbar.css"
import { usePathname } from 'next/navigation';



export default function Navbar() {
    const currentRoute = usePathname();

    return (
        <>
            <div className=" flex justify-between w-[100%]">
                <div className=" relative NavLogo">
                    <Link href="/">
                            <Image src={hexlogo} alt="hex logo" fill />
                    </Link>
                </div>
                
                <ul className=" flex pr-5 pt-4 h-full">
                    <li>
                        <Link href="/goals" className={currentRoute === "/goals" ? 'LinkActive' : 'LinkInactive'}>goals</Link>
                    </li>
                    <li>
                        <Link href="/about" className={currentRoute === "/about" ? 'LinkActive' : 'LinkInactive'}>about</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};