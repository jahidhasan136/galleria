"use client"
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { FaMagnifyingGlass, FaRegBell } from "react-icons/fa6"
import { HiMiniBars3BottomRight } from "react-icons/hi2"
import { FaTimesCircle } from "react-icons/fa";
import HeaderLogo from './logo.png'
import { IconContext } from 'react-icons';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const currentPage = usePathname();
    console.log(currentPage);
    const handleClick = (e) => {
        // 👇️ toggle isActive state on click
        setIsActive(true);
    };

    const handleClose = (e) => {
        setIsActive(false);
    }
    return (
        <>
            <header className="py-5 absolute top-0 w-full z-50 bg-transparent">
                <div className="container flex items-center justify-between">
                    <Link href="/">
                        <img src={HeaderLogo.src} alt="" />
                    </Link>
                    <div className="relative xl:w-[270px] lg:w-[200px] xl:ml-[35px] lg:ml-[25px] lg:block hidden">
                        <input type="text" className="bg-transparent pl-[20px] pr-[40px] border border-white/20 xl:leading-[58px] lg:leading-[48px] w-full text-white/50 rounded-full focus:outline-none" placeholder="Search..." />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-[20px] text-white/50 ">
                            <FaMagnifyingGlass />
                        </div>
                    </div>
                    <ul className="ml-auto lg:flex xl:space-x-[50px] lg:space-x-[30px] xl:text-[18px] lg:text-[16px] font-medium text-white hidden">
                        <li><Link href='/' className='transition hover:text-pink'>Apply Now</Link></li>
                        <li><Link href='/' className='transition hover:text-pink'>Explore</Link></li>
                        <li><Link href='/' className='transition hover:text-pink'>Market</Link></li>
                        <li><Link href='/' className='transition hover:text-pink'>Profile</Link></li>
                    </ul>
                    <ul className='xl:ml-[30px] ml-auto space-x-[30px] lg:flex items-center'>
                        <li className='hidden lg:block'><Link className='gradient-border xl:px-[35px] lg:px-[30px] xl:py-[17px] lg:py-[13px]' href='/'>Mint</Link></li>
                        <li>
                            {currentPage == '/' ? (
                                <div className='bg-[#271B5E] flex items-center xl:h-[59px] h-[50px] xl:w-[59px] w-[50px] rounded-full justify-center text-white text-[20px] cursor-pointer relative'>
                                    <span className='h-[8px] w-[8px] rounded-full bg-[#FF1F00] absolute xl:right-[21px] right-[15px] xl:top-[20px] top-[15px]'></span>
                                    <FaRegBell />
                                </div>
                            ) : (
                                <div className='bg-[#271B5E] flex items-center xl:h-[59px] h-[50px] xl:w-[59px] w-[50px] rounded-full justify-center text-white text-[20px] cursor-pointer'>
                                    <FaRegBell />
                                </div>
                            )}
                        </li>
                    </ul>
                    <div className="text-2xl menu-trigger lg:hidden ml-[15px] h-[50px] w-[50px] flex items-center justify-center rounded-lg bg-white" onClick={handleClick}>
                        <IconContext.Provider
                            value={{ style: { fill: 'url(#gradient)' } }}
                        >
                            <svg width="0" height="0">
                                <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#D116BF" />
                                    <stop offset="100%" stopColor="#3016D1" />
                                </linearGradient>
                            </svg>
                            <HiMiniBars3BottomRight />
                        </IconContext.Provider>
                    </div>
                </div>
            </header>

            <div className={`${isActive ? 'active' : 'closed'} offcanvas w-[250px] px-[15px] py-[20px] h-full fixed z-50 bg-black top-0 lg:hidden left-[-250px] transition-all`}>
                <FaTimesCircle className='absolute right-[15px] top-[25px] z-10 text-white text-[24px]' onClick={handleClose}></FaTimesCircle>
                <div className="logo mb-[30px]">
                    <Link href="/">
                        <img src={HeaderLogo.src} alt="" />
                    </Link>
                </div>
                <ul className="space-y-[15px] text-[16px] font-medium text-white mb-[20px]">
                    <li><Link href='/' className='transition hover:text-pink'>Apply Now</Link></li>
                    <li><Link href='/' className='transition hover:text-pink'>Explore</Link></li>
                    <li><Link href='/' className='transition hover:text-pink'>Market</Link></li>
                    <li><Link href='/' className='transition hover:text-pink'>Profile</Link></li>
                </ul>
                <div className="relative mb-[20px]">
                    <input type="text" className="bg-transparent pl-[20px] pr-10 border border-white/20 leading-[48px] w-full text-white/50 rounded-full focus:outline-none" placeholder="Search..." />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-[20px] text-white/50 ">
                        <FaMagnifyingGlass />

                    </div>
                </div>
                <ul>
                    <li className=''><Link className='gradient-border px-[30px] py-[13px] w-full !block text-center' href='/'>Mint</Link></li>
                </ul>
            </div>

        </>
    )
}

export default Header