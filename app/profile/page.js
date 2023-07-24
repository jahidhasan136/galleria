'use client'
import React from 'react';
import BannerThird from '../components/BannerThird/Banner';
import ForSale from '../components/ForSale/ForSale';
import Collection from '../components/Collection/Collection';
import NftBidOn from '../components/NftBidOn/NftBidOn';
import { Helmet } from 'react-helmet-async';

const page = () => {
    return (
        <div>
            <Helmet>
                <title>Profile Page | Galleria</title>
            </Helmet>
            <BannerThird></BannerThird>
            <ForSale></ForSale>
            <Collection></Collection>
            <NftBidOn></NftBidOn>
        </div>
    );
};

export default page;