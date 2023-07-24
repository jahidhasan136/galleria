'use client'
import Image from 'next/image'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import profile1 from './images/profile1.png'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiFillHeart } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import RevealAnimation from '../RevealAnimation/RevealAnimation'
const Collection = () => {
    return (
        <div className='container mt-[100px]'>

            <RevealAnimation>
                <h1 className='text-[22px] mb-[60px]'>Collection</h1>
                <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    spaceBetween={45}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='bg-[#ffffff0d] md:p-[30px] rounded-[14px]'>
                            <div className='flex justify-between items-center'>
                                <div className='flex sm:items-center items-start gap-[14px]'>
                                    <div className='relative'>
                                        <Image
                                            src={profile1.src}
                                            width={profile1.width}
                                            height={profile1.height}
                                        />
                                        <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                                    </div>
                                    <div className='grid gap-[6px]'>
                                        <h2 className='lg:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                                        <p className='md:text-[18px] text-[16px]'>@Galleria.456</p>
                                    </div>
                                </div>
                                <p className='bg-white px-[17px] py-[6px] text-black md:text-[18px] text-[12px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                            </div>
                            <div className='grid md:grid-cols-3 mt-[21px] gap-[15px]'>
                                <img className='sm:rounded-[14px] rounded-[8px] w-full' src={image1.src} alt="" />
                                <img className='sm:rounded-[14px] rounded-[8px] hidden md:flex' src={image2.src} alt="" />
                                <img className='sm:rounded-[14px] rounded-[8px] hidden md:flex' src={image3.src} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#ffffff0d] md:p-[30px] rounded-[14px]'>
                            <div className='flex justify-between items-center'>
                                <div className='flex sm:items-center items-start gap-[14px]'>
                                    <div className='relative'>
                                        <Image
                                            src={profile1.src}
                                            width={profile1.width}
                                            height={profile1.height}
                                        />
                                        <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                                    </div>
                                    <div className='grid gap-[6px]'>
                                        <h2 className='lg:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                                        <p className='md:text-[18px] text-[16px]'>@GAlleria.456</p>
                                    </div>
                                </div>
                                <p className='bg-white px-[17px] py-[6px] text-black md:text-[18px] text-[12px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                            </div>
                            <div className='grid md:grid-cols-3 mt-[21px] gap-[15px]'>
                                <img className='sm:rounded-[14px] rounded-[8px] hidden md:flex' src={image1.src} alt="" />
                                <img className='sm:rounded-[14px] rounded-[8px] w-full' src={image2.src} alt="" />
                                <img className='sm:rounded-[14px] rounded-[8px] hidden md:flex' src={image3.src} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#ffffff0d] md:p-[30px] rounded-[14px]'>
                            <div className='flex justify-between items-center'>
                                <div className='flex sm:items-center items-start gap-[14px]'>
                                    <div className='relative'>
                                        <Image
                                            src={profile1.src}
                                            width={profile1.width}
                                            height={profile1.height}
                                        />
                                        <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                                    </div>
                                    <div className='grid gap-[6px]'>
                                        <h2 className='lg:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                                        <p className='md:text-[18px] text-[16px]'>@GAlleria.456</p>
                                    </div>
                                </div>
                                <p className='bg-white px-[17px] py-[6px] text-black md:text-[18px] text-[12px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                            </div>
                            <div className='grid md:grid-cols-3 mt-[21px] gap-[15px]'>
                                <img className='sm:rounded-[14px] rounded-[8px] hidden md:flex' src={image1.src} alt="" />
                                <img className='sm:rounded-[14px] rounded-[8px] hidden md:flex' src={image2.src} alt="" />
                                <img className='sm:rounded-[14px] rounded-[8px] w-full' src={image3.src} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </RevealAnimation>
        </div>
    );
};

export default Collection;