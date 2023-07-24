'use client'
import image1 from './images/image1.png'

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevealAnimation from '../RevealAnimation/RevealAnimation';

const NftBidOn = () => {
    return (
        <div className="container mt-[100px]">
            <RevealAnimation>
                <h1 className='text-[22px] mb-[60px]'>NFT Bid On</h1>

                <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    spaceBetween={45}
                    // keyboard={{
                    //     enabled: true,
                    // }}
                    // scrollbar={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='md:flex items-center gap-[41px]'>
                            <div className='bg-[#ffffff0d] p-5 rounded-2xl w-[432px] h-[432px] mb-6 md:mb-0'>
                                <img className='rounded-2xl w-[392px] h-[392px] object-cover' src={image1.src} alt="" />
                            </div>
                            <div className=''>
                                <h2 className='text-2xl md:text-[28px] mb-[10px]'>Caucasian Beauty</h2>
                                <p className='mb-[22px] text-base md:text-lg text-[#CFCFCF]'>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected</p>
                                <h2 className='text-2xl mb-[10px]'>Buy Now Price: 800.0 Matic</h2>
                                <p className='mb-[22px] text-[#CFCFCF]'>Owner: 0gh67 8d878gh</p>
                                <p className='mb-[6px] text-[#CFCFCF]'>@SaifulM.eth</p>
                                <h2 className='text-2xl mb-[22px] text-[#C916BF]'>Available</h2>
                                <p className='mb-[10px] text-[#CFCFCF]'>Your Bid: 0.2 Matic</p>
                                <div className='flex gap-8'>
                                    <button className='primary-btn text-sm md:text-lg'>increase bid</button>
                                    <button className='px-8 py-[14px] border rounded-full bg-[#ffffff1a] transition hover:scale-[1.05] text-sm md:text-lg'>withdraw bid</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:flex items-center gap-[41px]'>
                            <div className='bg-[#ffffff0d] p-5 rounded-2xl w-[432px] h-[432px] mb-6 md:mb-0'>
                                <img className='rounded-2xl w-[392px] h-[392px] object-cover' src={image1.src} alt="" />
                            </div>
                            <div>
                                <h2 className='text-2xl md:text-[28px] mb-[10px]'>Caucasian Beauty</h2>
                                <p className='mb-[22px] text-base md:text-lg text-[#CFCFCF]'>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected</p>
                                <h2 className='text-2xl mb-[10px]'>Buy Now Price: 800.0 Matic</h2>
                                <p className='mb-[22px] text-[#CFCFCF]'>Owner: 0gh67 8d878gh</p>
                                <p className='mb-[6px] text-[#CFCFCF]'>@SaifulM.eth</p>
                                <h2 className='text-2xl mb-[22px] text-[#C916BF]'>Available</h2>
                                <p className='mb-[10px] text-[#CFCFCF]'>Your Bid: 0.2 Matic</p>
                                <div className='flex gap-8'>
                                    <button className='primary-btn text-sm md:text-lg'>increase bid</button>
                                    <button className='px-8 py-[14px] border rounded-full bg-[#ffffff1a] transition hover:scale-[1.05] text-sm md:text-lg'>withdraw bid</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='md:flex items-center gap-[41px]'>
                            <div className='bg-[#ffffff0d] p-5 rounded-2xl w-[432px] h-[432px] mb-6 md:mb-0'>
                                <img className='rounded-2xl w-[392px] h-[392px] object-cover' src={image1.src} alt="" />
                            </div>
                            <div>
                                <h2 className='text-2xl md:text-[28px] mb-[10px]'>Caucasian Beauty</h2>
                                <p className='mb-[22px] text-base md:text-lg text-[#CFCFCF]'>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected</p>
                                <h2 className='text-2xl mb-[10px]'>Buy Now Price: 800.0 Matic</h2>
                                <p className='mb-[22px] text-[#CFCFCF]'>Owner: 0gh67 8d878gh</p>
                                <p className='mb-[6px] text-[#CFCFCF]'>@SaifulM.eth</p>
                                <h2 className='text-2xl mb-[22px] text-[#C916BF]'>Available</h2>
                                <p className='mb-[10px] text-[#CFCFCF]'>Your Bid: 0.2 Matic</p>
                                <div className='flex gap-8'>
                                    <button className='primary-btn text-sm md:text-lg'>increase bid</button>
                                    <button className='px-8 py-[14px] border rounded-full bg-[#ffffff1a] transition hover:scale-[1.05] text-sm md:text-lg'>withdraw bid</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </RevealAnimation>


        </div>
    );
};

export default NftBidOn;