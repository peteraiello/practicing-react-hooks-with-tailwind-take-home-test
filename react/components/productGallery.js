import React, { useState } from 'react';
import MainImage from './mainImage';
import ThumbnailImages from './ThumbnailImages';

function ProductGallery() {

    const imageArray = ['kemper-front', 'kemper-angle', 'kemper-rear'];

    const [featuredImage, setFeaturedImage] = useState({
            image: imageArray[0],
        }
    )

    const [active, setActive] = useState({
            active: 0
    })

    function clickHandler(index) {
        setFeaturedImage({ image: imageArray[index] })
        setActive({ active: index })
        event.preventDefault();
    }

    return (
        <div className="relative">
            <div className="relative lg:fixed lg:w-612px lg:pr-32 xl:pr-0">
            <MainImage image={ featuredImage.image }/>
            <ThumbnailImages images={ imageArray } click={ clickHandler }  activeThumb={ active.active }/>
            </div>
        </div>
    )
}

export default ProductGallery;