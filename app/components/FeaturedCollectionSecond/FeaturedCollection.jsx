import Image from 'next/image'
import profile1 from './images/caucasian/profile_1.png'
import profile2 from './images/blue_smoke/profile_2.png'
import image1 from './images/caucasian/image1.png'
import image2 from './images/caucasian/image2.png'
import image3 from './images/caucasian/image3.png'

import image4 from './images/blue_smoke/image4.png'
import image5 from './images/blue_smoke/image5.png'
import image6 from './images/blue_smoke/image6.png'
import image7 from './images/blue_smoke/image7.png'
import image8 from './images/blue_smoke/image8.png'
import image9 from './images/blue_smoke/image9.png'
import image10 from './images/blue_smoke/image10.png'
import image11 from './images/blue_smoke/image11.png'
import image12 from './images/blue_smoke/image12.png'
import featuredLine from './images/featured-line.png'
import featuredShadow from './images/featured-shadow.png'

import { AiFillHeart } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import Link from 'next/link'

const FeaturedCollectionSecond = () => {
    return (
        <section className='featured-bg py-[120px] relative z-10 mt-[144px]'>
            <img className='absolute left-0 top-[70%] -z-10' src={featuredLine.src} alt="" />
            <img className='absolute left-0 md:top-[20%] top-[20%] -z-10' src={featuredShadow.src} alt="" />
            <h1 className='mb-10 lg:mb-[66px] text-2xl lg:text-3xl xl:text-[44px] container'>Featured NFTs</h1>
            <div className='grid xl:grid-cols-2 justify-center gap-[44px] container'>

                {/* card one */}

                <div className='bg-[#ffffff0d] p-[30px] rounded-[14px] xl:w-[638px] xl:h-[530px] border border-transparent hover:border-[#6A00FF] transition-all'>
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
                    <div className='flex gap-5 mt-6'>
                        <img className='sm:rounded-[14px] rounded-[8px] h-[180px] md:h-full object-cover' src={image1.src} alt="" />
                        <div className='grid gap-5'>
                            <img className='w-full sm:rounded-[14px] rounded-[8px]' src={image2.src} alt="" />
                            <img className='w-full sm:rounded-[14px] rounded-[8px]' src={image3.src} alt="" />
                        </div>
                    </div>
                </div>

                {/* card two */}

                <div className='bg-[#ffffff0d] p-[30px] rounded-[14px] xl:w-[638px] xl:h-[530px] border border-transparent hover:border-[#6A00FF] transition-all'>
                    <div className='flex justify-between items-center'>
                        <div className='flex sm:items-center items-start gap-[14px]'>
                            <div className='relative'>
                                <Image
                                    src={profile2.src}
                                    width={profile2.width}
                                    height={profile2.height}
                                />
                                <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                            </div>
                            <div className='grid gap-[6px]'>
                                <h2 className='lg:text-[30px] text-[24px] capitalize'>blue smoke on white</h2>
                                <p className='md:text-[18px] text-[16px]'>@Farhad.uddin</p>
                            </div>
                        </div>
                        <p className='bg-white px-[17px] py-[6px] text-black md:text-[18px] text-[12px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                    </div>
                    <div className='grid gap-5 mt-6'>
                        <img className='sm:rounded-[14px] rounded-[8px] w-full' src={image4.src} alt="" />
                        <div className='flex gap-5'>
                            <img className='w-full sm:rounded-[14px] rounded-[8px] h-[50px] md:h-full object-cover' src={image5.src} alt="" />
                            <img className='w-full sm:rounded-[14px] rounded-[8px] h-[50px] md:h-full object-cover' src={image6.src} alt="" />
                        </div>
                    </div>
                </div>

                {/* card three */}

                <div className='bg-[#ffffff0d] p-[30px] rounded-[14px] xl:w-[638px] xl:h-[530px] border border-transparent hover:border-[#6A00FF] transition-all'>
                    <div className='flex justify-between items-center'>
                        <div className='flex sm:items-center items-start gap-[14px]'>
                            <div className='relative'>
                                <Image
                                    src={profile2.src}
                                    width={profile2.width}
                                    height={profile2.height}
                                />
                                <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                            </div>
                            <div className='grid gap-[6px]'>
                                <h2 className='lg:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                                <p className='md:text-[18px] text-[16px]'>@Farhad.uddin</p>
                            </div>
                        </div>
                        <p className='bg-white px-[17px] py-[6px] text-black md:text-[18px] text-[12px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                    </div>
                    <div className='flex gap-5 mt-6'>
                        <img className='w-full sm:rounded-[14px] rounded-[8px] h-[180px] md:h-full object-cover' src={image7.src} alt="" />
                        <img className='w-full sm:rounded-[14px] rounded-[8px] h-[180px] md:h-full object-cover' src={image8.src} alt="" />
                    </div>
                </div>

                {/* card four */}

                <div className='bg-[#ffffff0d] p-[30px] rounded-[14px] xl:w-[638px] xl:h-[530px] border border-transparent hover:border-[#6A00FF] transition-all'>
                    <div className='flex justify-between items-center'>
                        <div className='flex sm:items-center items-start gap-[14px]'>
                            <div className='relative'>
                                <Image
                                    src={profile2.src}
                                    width={profile2.width}
                                    height={profile2.height}
                                />
                                <BsCheck className='bg-[#2BC927] rounded-full absolute bottom-0 right-0'></BsCheck>
                            </div>
                            <div className='grid gap-[6px]'>
                                <h2 className='lg:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                                <p className='md:text-[18px] text-[16px]'>@Farhad.uddin</p>
                            </div>
                        </div>
                        <p className='bg-white px-[17px] py-[6px] text-black md:text-[18px] text-[12px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                    </div>
                    <div className='grid grid-cols-2 gap-5 mt-6'>
                        <img className='w-full sm:rounded-[14px] rounded-[8px]' src={image9.src} alt="" />
                        <img className='w-full sm:rounded-[14px] rounded-[8px]' src={image10.src} alt="" />
                        <img className='w-full sm:rounded-[14px] rounded-[8px]' src={image11.src} alt="" />
                        <img className='w-full sm:rounded-[14px] rounded-[8px]' src={image12.src} alt="" />
                    </div>
                </div>

            </div>
            <div className='flex justify-center mt-[65px]'>
                <Link href='/' className='primary-btn'>See more</Link>
            </div>
        </section>
    );
};

export default FeaturedCollectionSecond;