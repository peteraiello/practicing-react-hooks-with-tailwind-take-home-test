import React, { useState } from 'react';
import MainImage from './MainImage';
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
             <MainImage image={ featuredImage.image }/>
            <ThumbnailImages images={ imageArray } click={ clickHandler }  activeThumb={ active.active }/>
         </div>
    )
}

export default ProductGallery;