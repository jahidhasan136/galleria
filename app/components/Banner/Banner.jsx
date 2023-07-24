"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards } from 'swiper/modules';

import Link from 'next/link'
import BannerDotsBg from './images/dots-bg.png'
import BannerThumb from './images/banner-thumb.png'
import BannerThumb2 from './images/banner-thumb2.png'
import BannerThumb3 from './images/banner-thumb3.png'
import BannerShapeLeft from './images/banner-shape-left.png'
import BannerThumbDots from './images/thumb-dots.png'
import BannerShadow from './images/banner-shadow.png'
import BannerShadow2 from './images/banner-shadow2.png'
import RevealAnimation from '../RevealAnimation/RevealAnimation'

const Banner = () => {
    return (
        <section className="banner-bg relative z-10 pt-[160px] md:pb-[100px]">
            <img className='absolute -z-10 top-0' src={BannerDotsBg.src} alt="" />
            <img className='absolute -z-10 top-0 left-0' src={BannerShapeLeft.src} alt="" />
            <img className='absolute right-0 -z-10 top-0' src={BannerShadow.src} alt="" />
            <img className='absolute top-[20%] -z-10' src={BannerShadow2.src} alt="" />
            <div className="container">
                <RevealAnimation>
                    <div className="md:grid xl:grid-cols-[7fr_5fr] md:grid-cols-2 flex flex-col-reverse text-center md:text-start gap-4 items-center">
                        <div className="relative p-[30px] md:order-2 w-[300px] sm:w-[50%] md:w-[100%] mb-[20px] md:mb-0 card-swiper">
                            <img className='absolute -z-20 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] opacity-25' src={BannerThumbDots.src} alt="" />
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                loop={true}
                                autoplay={{
                                    delay: 2500
                                }}
                                modules={[Autoplay, EffectCards]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src={BannerThumb.src} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={BannerThumb2.src} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={BannerThumb3.src} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="banner-content xl:pr-8 pr-0 md:order-1">
                            <h6 className='gradient-border bg-[#332092] py-[13px] px-[20px] md:mb-5 mb-6 lg:text-[18px] text-[16px]'>Curated On The Polygon & Ethereum Network</h6>
                            <h5 className="xl:text-[48px] lg:text-[38px] text-[24px] xl:leading-[55px] lg:leading-[50px] leading-[44px] lg:mb-[30px] mb-[16px]">The NFT Marketplace for talented & emerging photographers</h5>
                            <p className='lg:mb-[40px] mb-[20px] text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                            <Link href='/' className='primary-btn mb-[34px] md:mb-0'>Explore The Market</Link>
                        </div>
                    </div>
                </RevealAnimation>
            </div>
        </section>

    )
}

export default Banner