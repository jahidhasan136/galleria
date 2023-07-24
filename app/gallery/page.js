'use client'
import React from 'react';
import BannerSecond from '../components/BannerSecond/Banner';
import FeaturedNftsSecond from '../components/FeaturedNftsSecond/FeaturedNfts';
import FeaturedCollectionSecond from '../components/FeaturedCollectionSecond/FeaturedCollection';
import PremiumNfts from '../components/PremiumNfts/PremiumNfts';
import { Helmet } from 'react-helmet-async';

const page = () => {
    return (
        <div>
            <Helmet>
                <title>Gallery Page | Galleria</title>
            </Helmet>
            <BannerSecond></BannerSecond>
            <FeaturedNftsSecond></FeaturedNftsSecond>
            <FeaturedCollectionSecond></FeaturedCollectionSecond>
            <PremiumNfts></PremiumNfts>
        </div>
    );
};

export default page;