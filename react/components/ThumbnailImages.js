const ThumbnailImages = (props) => {
    
    const imageArray = props.images;

    let isActive = props.activeThumb;

    let className="border-solid rounded-lg py-2 px-4 mr-2 hover:border-gray-700";

    // set default border
    let activeClass = "border-gray-200 border";

    function thumbnailSelect(index) {
        return (isActive === index ? activeClass = 'border-gray-700 border-2' : activeClass = 'border-gray-200 border');
    }
 
    return (
        <div>
            <ul className="flex">
                {imageArray.map((image, index) => (
                    <li key={index}>
                            <button 
                                label={ thumbnailSelect(index) } 
                                onClick={ () => props.click(index) } 
                                className={className + " " + activeClass
                            }>
                            <img src={ "img/" + image + ".jpg" } />
                        </button>
                    
                    </li>
                ))}
            </ul>
        </div>
    )   
}

export default ThumbnailImages;