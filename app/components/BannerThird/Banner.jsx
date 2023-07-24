'use client'
import Image from 'next/image'
import profile from './images/profile.png'
import bannerDot from './images/banner-dot.png'
import vector from './images/vector.png'
import { MdOutlineWatchLater } from 'react-icons/md'
import { AiOutlineGlobal } from 'react-icons/ai'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import RevealAnimation from '../RevealAnimation/RevealAnimation'

const BannerThird = () => {
    return (
        <section className='banner-bg-third relative z-10 pt-[139px] lg:pt-[239px] pb-[100px] lg:pb-[250px]'>
            <img className='absolute -z-10 top-0 w-full h-full' src={bannerDot.src} alt="" />
            <div className="container">

                {/* Desktop Device */}

                <RevealAnimation>
                    <div className='hidden md:grid lg:flex items-center md:gap-[70px] lg:gap-[209px]'>
                        <div className='md:flex items-center gap-[50px]'>
                            <div className='grid items-center'>
                                <Image
                                    src={profile.src}
                                    width={profile.width}
                                    height={profile.height}
                                    className='mb-[30px]'
                                />
                                <button className='primary-btn mb-[20px] block mx-auto'>Manage Collection</button>
                                <button className='px-8 py-[14px] border rounded-full bg-[#ffffff1a] block w-[225px]  mx-auto transition hover:scale-[1.05]'>Edit Profile</button>
                            </div>
                            <div>
                                <h2 className='text-2xl lg:text-[32px] mb-[5px]'>Minhaj Udding</h2>
                                <p className='mb-[11px]'>@minhaj.uddin</p>
                                <p className='flex items-center gap-[6px] mb-[11px]'>
                                    <Image
                                        src={vector.src}
                                        width={vector.width}
                                        height={vector.height}
                                    />
                                    0gh67 8d878gh</p>
                                <p className='flex items-center gap-[6px] mb-5'>
                                    <MdOutlineWatchLater></MdOutlineWatchLater>
                                    Joined March 2021
                                </p>
                                <div className='flex gap-[18px] mb-[25px]'>
                                    <div className='btn-circle'>
                                        <AiOutlineGlobal className=' text-[28px]'></AiOutlineGlobal>
                                    </div>
                                    <div className='btn-circle'>
                                        <BsTwitter className='text-[28px]'></BsTwitter>
                                    </div>
                                    <div className='btn-circle'>
                                        <BsInstagram className='text-[28px]'></BsInstagram>
                                    </div>

                                </div>
                                <p className=''>
                                    As a California-based photographer and NFT collector, I am <br /> constantly inspired by the world around me. I love capturing the <br /> beauty of nature through the lens of my camera.
                                </p>
                            </div>
                        </div>
                        <div>
                            <button className='primary-btn mb-[18px] w-[237px]'>Follow</button>
                            <p className='mb-[25px]'>500 followers</p>
                            <div className='mb-[20px]'>
                                <h3 className='text-xl lg:text-[26px] mb-[2px]'>2k+</h3>
                                <p>Number of Collectors</p>
                            </div>
                            <div className='mb-[20px]'>
                                <h3 className='text-xl lg:text-[26px] mb-[2px]'>20k+</h3>
                                <p>NFTs Purchased</p>
                            </div>
                            <div>
                                <h3 className='text-xl lg:text-[26px] mb-[2px]'>10k+</h3>
                                <p>NFTs owned</p>
                            </div>
                        </div>
                    </div>
                </RevealAnimation>

                {/* Mobile Device */}

                <div className='grid justify-center md:hidden'>
                    <div className='flex items-center gap-[18px]'>
                        <Image
                            src={profile.src}
                            width={profile.width}
                            height={profile.height}
                            className='mb-[30px] w-[140px]'
                        />
                        <div>
                            <h2 className='text-2xl mb-[10px]'>Minhaj Udding</h2>
                            <p className='mb-[14px] text-base'>@minhaj.uddin</p>
                            <p className='flex items-center gap-[6px] mb-[14px] text-base'>
                                <Image
                                    src={vector.src}
                                    width={vector.width}
                                    height={vector.height}
                                />
                                0gh67 8d878gh</p>
                            <p className='flex items-center text-base gap-[6px] mb-5'>
                                <MdOutlineWatchLater></MdOutlineWatchLater>
                                Joined March 2021
                            </p>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <p className='text-base text-justify'>
                            As a California-based photographer and NFT collector, I am constantly inspired by the world around me. I love capturing the beauty of nature through the lens of my camera.
                        </p>
                    </div>
                    <div className='mb-6'>
                        <div className='flex justify-between items-center mb-4'>
                            <button className='primary-btn w-[140px]'>Follow</button>
                            <div className='flex gap-[12px]'>
                                <div className='btn-circle h-[45px] w-[45px]'>
                                    <AiOutlineGlobal className='mx-auto text-[20px]'></AiOutlineGlobal>
                                </div>
                                <div className='btn-circle h-[45px] w-[45px]'>
                                    <BsTwitter className='mx-auto text-[20px]'></BsTwitter>
                                </div>
                                <div className='btn-circle h-[45px] w-[45px]'>
                                    <BsInstagram className='mx-auto text-[20px]'></BsInstagram>
                                </div>
                            </div>
                        </div>
                        <p className='mb-[24px]'>500 followers</p>
                        <div className='flex justify-between mb-4'>
                            <div>
                                <h3 className='text-xl lg:text-[26px] mb-[2px]'>10k+</h3>
                                <p>NFTs owned</p>
                            </div>
                            <div className=''>
                                <h3 className='text-xl lg:text-[26px] mb-[2px]'>20k+</h3>
                                <p>NFTs Purchased</p>
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='text-xl lg:text-[26px] mb-[2px]'>2k+</h3>
                            <p>Number of Collectors</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <button className='primary-btn text-sm'>Manage Collection</button>
                        <button className='px-4 py-[14px] text-sm border rounded-full bg-[#ffffff1a] transition hover:scale-[1.05]'>Edit Profile</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerThird;