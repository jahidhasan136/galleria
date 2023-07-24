'use client'
import Link from 'next/link'
import BannerDotsBg from './images/dots-bg.png'
import BannerShapeLeft from './images/banner-shape-left.png'
import BannerShadow from './images/banner-shadow.png'
import BannerShadow2 from './images/banner-shadow2.png'


const BannerSecond = () => {

    return (
        <section className="banner-bg-second relative z-10 pt-[220px] pb-[100px]">
            <img className='absolute -z-10 top-0' src={BannerDotsBg.src} alt="" />
            <img className='absolute -z-10 top-0 left-0' src={BannerShapeLeft.src} alt="" />
            <img className='absolute right-0 -z-10 top-0' src={BannerShadow.src} alt="" />
            <img className='absolute top-[20%] md:-left-[65%] lg:-left-[50%] -z-10' src={BannerShadow2.src} alt="" />
            <div className="container text-center">
                <div className="md:grid block gap-4 items-center">
                    <div className="banner-content xl:pr-8 pr-0 md:order-1">
                        <h6 className='gradient-border bg-[#332092] py-[13px] px-[20px] md:mb-5 mb-3 lg:text-[18px] text-[16px]'>Our Galleria</h6>
                        <h1 className="xl:text-[48px] lg:text-[38px] text-[32px] xl:leading-[55px] lg:leading-[50px] leading-[44px] lg:mb-[30px] mb-[15px]">Explore The Galleria</h1>
                        <p className='lg:mb-[40px] mb-[20px]'>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout. </p>
                        <Link href='/' className='primary-btn'>Explore The Market</Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BannerSecond