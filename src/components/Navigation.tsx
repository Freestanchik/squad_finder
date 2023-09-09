'use client'
import React, {FC, useState} from "react";
import Link from "next/link";
import {FaRegUser} from "react-icons/fa";

const Navigation: FC = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const handleMenuClick = () => {
        setIsMenuVisible(!isMenuVisible)
    }
    {
        return (
            <>
                <nav className="hidden lg:block">
                    <ul className="flex">
                        <li>
                            <Link href="/" className="hover:text-red-600 p-1 lg:p-5">Game sessions</Link>
                        </li>
                        <li>
                            <Link href="/gamesInfo" className="hover:text-red-600 p-1 lg:p-5">games</Link>
                        </li>
                    </ul>
                </nav>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={handleMenuClick}>
                        <svg className="block h-6 w-6 fill-current text-amber-50" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <div className={`navbar-menu absolute z-50 ${!isMenuVisible && 'hidden'} `}>
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                    <nav
                        className={`fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-cyan-900 border-r overflow-y-auto`}>
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-end text-amber-50">
                                <FaRegUser className=" text-5xl"/>
                                <p className="text-2xl">user 101</p>
                            </div>
                            <button className=" navbar-close" onClick={handleMenuClick}>
                                <svg className="h-8 w-8 text-gray-400 cursor-pointer hover:text-gray-500"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-1" onClick={handleMenuClick}>
                                    <Link href="/"
                                          className="block p-4 text-lg font-semibold text-gray-300 hover:bg-blue-50 hover:text-blue-600 rounded">Game
                                        sessions</Link>
                                </li>
                                <li className="mb-1" onClick={handleMenuClick}>
                                    <Link href="/gamesInfo"
                                          className="block p-4 text-lg font-semibold text-gray-300 hover:bg-blue-50 hover:text-blue-600 rounded">games</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}

export default Navigation