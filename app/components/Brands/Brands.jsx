'use client'
import Amazon from './images/amazon.png'
import YouTube from './images/youtube.png'
import Slack from './images/slack.png'
import Netflix from './images/netflix.png'
import Google from './images/google.png'
import Sony from './images/sony.png'
import wave from './images/metal-prints-wave.png'
import RevealAnimation from '../RevealAnimation/RevealAnimation'

const Brands = () => {
    return (
        <section className='relative z-10'>
            <img className='absolute top-[50%] -z-10' src={wave.src} alt="" />
            <div className="container">
                <RevealAnimation>
                    <div className="relative bg-white/5 rounded-[16px] py-[60px] px-[50px]">
                        <h6 className='text-center text-[20px] mb-[40px]'>we have partnered with top commpanies</h6>
                        <div className="md:flex flex-wrap items-center justify-center gap-[50px] grid grid-cols-2">
                            <div>
                                <img src={Amazon.src} alt="" />
                            </div>
                            <div>
                                <img src={YouTube.src} alt="" />
                            </div>
                            <div>
                                <img src={Slack.src} alt="" />
                            </div>
                            <div>
                                <img src={Netflix.src} alt="" />
                            </div>
                            <div>
                                <img src={Google.src} alt="" />
                            </div>
                            <div>
                                <img src={Sony.src} alt="" />
                            </div>
                        </div>
                    </div>
                </RevealAnimation>
            </div>
        </section>
    )
}

export default Brands