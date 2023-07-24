'use client'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevealAnimation from '../RevealAnimation/RevealAnimation';

const ForSale = () => {
    return (
        <div className='container mt-[80px] mb-10'>

            <RevealAnimation>
                <h1 className='text-[22px] mb-[60px]'>For Sale</h1>

                <Swiper
                    spaceBetween={45}
                    loop={true}

                    // grabCursor={true}
                    // keyboard={{
                    //     enabled: true,
                    // }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    navigation={true}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    // scrollbar={true}
                    // navigation={true}
                    
                >
                    <SwiperSlide>
                        <div className='bg-[#ffffff0d] p-[18px] rounded-2xl border border-transparent hover:border-[#6A00FF] transition-all'>
                            <div className='mb-4'>
                                <img className='w-full' src={image1.src} alt="" />
                            </div>
                            <h2 className='capitalize xl:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                            <div className='border border-[#ffffff1a] my-4'></div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h3 className='xl:text-[24px] text-[20px]'>250.0 Matic</h3>
                                    <p className='lg:text-[18px] text-[16px]'>209.50 Usd</p>
                                </div>
                                <button className='btn_sm'>Buy Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#ffffff0d] p-[18px] rounded-2xl border border-transparent hover:border-[#6A00FF] transition-all'>
                            <div className='mb-4'>
                                <img className='w-full' src={image2.src} alt="" />
                            </div>
                            <h2 className='capitalize xl:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                            <div className='border border-[#ffffff1a] my-4'></div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h3 className='xl:text-[24px] text-[20px]'>250.0 Matic</h3>
                                    <p className='lg:text-[18px] text-[16px]'>209.50 Usd</p>
                                </div>
                                <button className='btn_sm'>Buy Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#ffffff0d] p-[18px] rounded-2xl border border-transparent hover:border-[#6A00FF] transition-all'>
                            <div className='mb-4'>
                                <img className='w-full' src={image3.src} alt="" />
                            </div>
                            <h2 className='capitalize xl:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                            <div className='border border-[#ffffff1a] my-4'></div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h3 className='xl:text-[24px] text-[20px]'>250.0 Matic</h3>
                                    <p className='lg:text-[18px] text-[16px]'>209.50 Usd</p>
                                </div>
                                <button className='btn_sm'>Buy Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#ffffff0d] p-[18px] rounded-2xl border border-transparent hover:border-[#6A00FF] transition-all'>
                            <div className='mb-4'>
                                <img className='w-full' src={image3.src} alt="" />
                            </div>
                            <h2 className='capitalize xl:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                            <div className='border border-[#ffffff1a] my-4'></div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h3 className='xl:text-[24px] text-[20px]'>250.0 Matic</h3>
                                    <p className='lg:text-[18px] text-[16px]'>209.50 Usd</p>
                                </div>
                                <button className='btn_sm'>Buy Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#ffffff0d] p-[18px] rounded-2xl border border-transparent hover:border-[#6A00FF] transition-all'>
                            <div className='mb-4'>
                                <img className='w-full' src={image3.src} alt="" />
                            </div>
                            <h2 className='capitalize xl:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                            <div className='border border-[#ffffff1a] my-4'></div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h3 className='xl:text-[24px] text-[20px]'>250.0 Matic</h3>
                                    <p className='lg:text-[18px] text-[16px]'>209.50 Usd</p>
                                </div>
                                <button className='btn_sm'>Buy Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#ffffff0d] p-[18px] rounded-2xl border border-transparent hover:border-[#6A00FF] transition-all'>
                            <div className='mb-4'>
                                <img className='w-full' src={image3.src} alt="" />
                            </div>
                            <h2 className='capitalize xl:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                            <div className='border border-[#ffffff1a] my-4'></div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h3 className='xl:text-[24px] text-[20px]'>250.0 Matic</h3>
                                    <p className='lg:text-[18px] text-[16px]'>209.50 Usd</p>
                                </div>
                                <button className='btn_sm'>Buy Now</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='flex justify-center mt-[64px] md:hidden'>
                    <button className='primary-btn'>See more</button>
                </div>
            </RevealAnimation>
        </div>
    );
};

export default ForSale;