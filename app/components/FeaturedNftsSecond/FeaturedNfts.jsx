import Image from 'next/image';
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image6 from './images/image6.png'
import person1 from './images/person1.png'
import person2 from './images/person2.png'
import person3 from './images/person3.png'
import wave from './images/metal-prints-wave.png'
import bg_blue from './images/bg_blue.png'
import bg_pink from './images/bg_pink.png'
import vector from './images/vector.png'
import { AiFillHeart } from 'react-icons/ai'
import Link from 'next/link';



const FeaturedNftsSecond = () => {
    return (
        <div className='relative z-10'>
            <img className='absolute top-[10%] -z-10' src={wave.src} alt="" />
            <img className='absolute top-[10%] right-0 -z-10' src={bg_blue.src} alt="" />
            <img className='absolute -bottom-[20%] right-0 -z-10' src={vector.src} alt="" />
            <img className='absolute -bottom-[80%] right-0 -z-10' src={bg_pink.src} alt="" />
            <div className='container z-10 mt-[30px] md:mt-[90px] lg:mt-[140px]'>


                <h1 className='mb-10 lg:mb-[66px] text-2xl lg:text-3xl xl:text-[44px]'>Featured NFTs</h1>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[45px]'>

                    {/* card one */}

                    <div className='bg-[#ffffff0d] p-[18px] rounded-2xl border border-transparent hover:border-[#6A00FF] transition-all'>
                        <div className='mb-4 relative'>
                            <img className='w-full' src={image1.src} alt="" />
                            <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 120</p>
                        </div>
                        <h2 className='capitalize mb-2 xl:text-[30px] text-[24px]'>Caucasian Beauty</h2>
                        <div className='flex items-center gap-[6px]'>
                            <Image
                                src={person1.src}
                                width={person1.width}
                                height={person1.height}
                            />
                            <p className='lg:text-[18px] text-[16px]'>@minhaj.udding</p>
                        </div>
                        <div className='border border-[#ffffff1a] my-4'></div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h3 className='xl:text-[24px] text-[20px]'>250.0 Matic</h3>
                                <p className='lg:text-[18px] text-[16px]'>209.50 Usd</p>
                            </div>
                            <button className='btn_sm'>Buy Now</button>
                        </div>
                    </div>

                    {/* card two */}

                    <div className='bg-[#ffffff0d] p-[18px] rounded-2xl border border-transparent hover:border-[#6A00FF] transition-all'>
                        <div className='mb-4 relative'>
                            <img className='w-full' src={image2.src} alt="" />
                            <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 90</p>
                        </div>
                        <h2 className='capitalize mb-2 xl:text-[30px] text-[24px]'>film element Con</h2>
                        <div className='flex items-center gap-[6px]'>
                            <Image
                                src={person2.src}
                                width={person2.width}
                                height={person2.height}
                            />
                            <p className='lg:text-[18px] text-[16px]'>@Sajig.098</p>
                        </div>
                        <div className='border border-[#ffffff1a] my-4'></div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h3 className='xl:text-[24px] text-[20px]'>278.0 Matic</h3>
                                <p className='lg:text-[18px] text-[16px]'>216.50 Usd</p>
                            </div>
                            <button className='btn_sm'>Buy Now</button>
                        </div>
                    </div>

                    {/* card three */}

                    <div className='bg-[#ffffff0d] p-[18px] rounded-2xl border border-transparent hover:border-[#6A00FF] transition-all'>
                        <div className='mb-4 relative'>
                            <img className='w-full' src={image3.src} alt="" />
                            <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 145</p>
                        </div>
                        <h2 className='capitalize mb-2 xl:text-[30px] text-[24px]'>film element Con</h2>
                        <div className='flex items-center gap-[6px]'>
                            <Image
                                src={person3.src}
                                width={person3.width}
                                height={person3.height}
                            />
                            <p className='lg:text-[18px] text-[16px]'>@Saiful.34</p>
                        </div>
                        <div className='border border-[#ffffff1a] my-4'></div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h3 className='xl:text-[24px] text-[20px]'>278.0 Matic</h3>
                                <p className='lg:text-[18px] text-[16px]'>216.50 Usd</p>
                            </div>
                            <button className='btn_sm'>Buy Now</button>
                        </div>
                    </div>

                    {/* card four */}

                    <div className='bg-[#ffffff0d] p-[18px] rounded-2xl border border-transparent hover:border-[#6A00FF] transition-all'>
                        <div className='mb-4 relative'>
                            <img className='w-full' src={image4.src} alt="" />
                            <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 145</p>
                        </div>
                        <h2 className='capitalize mb-2 xl:text-[30px] text-[24px]'>film element Con</h2>
                        <div className='flex items-center gap-[6px]'>
                            <Image
                                src={person3.src}
                                width={person3.width}
                                height={person3.height}
                            />
                            <p className='lg:text-[18px] text-[16px]'>@Saiful.34</p>
                        </div>
                        <div className='border border-[#ffffff1a] my-4'></div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h3 className='xl:text-[24px] text-[20px]'>278.0 Matic</h3>
                                <p className='lg:text-[18px] text-[16px]'>216.50 Usd</p>
                            </div>
                            <button className='btn_sm'>Buy Now</button>
                        </div>
                    </div>

                    {/* card five */}

                    <div className='bg-[#ffffff0d] p-[18px] rounded-2xl border border-transparent hover:border-[#6A00FF] transition-all'>
                        <div className='mb-4 relative'>
                            <img className='w-full' src={image5.src} alt="" />
                            <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 90</p>
                        </div>
                        <h2 className='capitalize mb-2 xl:text-[30px] text-[24px]'>film element Con</h2>
                        <div className='flex items-center gap-[6px]'>
                            <Image
                                src={person2.src}
                                width={person2.width}
                                height={person2.height}
                            />
                            <p className='lg:text-[18px] text-[16px]'>@Sajig.098</p>
                        </div>
                        <div className='border border-[#ffffff1a] my-4'></div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h3 className='xl:text-[24px] text-[20px]'>278.0 Matic</h3>
                                <p className='lg:text-[18px] text-[16px]'>216.50 Usd</p>
                            </div>
                            <button className='btn_sm'>Buy Now</button>
                        </div>
                    </div>

                    {/* card six */}

                    <div className='bg-[#ffffff0d] p-[18px] rounded-2xl border border-transparent hover:border-[#6A00FF] transition-all'>
                        <div className='mb-4 relative'>
                            <img className='w-full' src={image6.src} alt="" />
                            <p className='absolute top-5 right-5 bg-[#FFFFFF] text-black text-base px-4 py-[6px] rounded-full flex items-center'><AiFillHeart className='text-[#CE2929]'></AiFillHeart> 145</p>
                        </div>
                        <h2 className='capitalize mb-2 xl:text-[30px] text-[24px]'>film element Con</h2>
                        <div className='flex items-center gap-[6px]'>
                            <Image
                                src={person3.src}
                                width={person3.width}
                                height={person3.height}
                            />
                            <p className='lg:text-[18px] text-[16px]'>@Saiful.34</p>
                        </div>
                        <div className='border border-[#ffffff1a] my-4'></div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h3 className='xl:text-[24px] text-[20px]'>278.0 Matic</h3>
                                <p className='lg:text-[18px] text-[16px]'>216.50 Usd</p>
                            </div>
                            <button className='btn_sm'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link href='/' className='primary-btn  mt-[65px]'>See more</Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedNftsSecond;