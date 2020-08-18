const ProductDescription = (props) => {

    return (
        <div className="mt-6 mb-10">
            <p className="text-gray-500 mb-4">Starting at<br/>
            <span className="text-gray-900 text-4xl"><strong>${ props.price }</strong>
            </span>
            </p>
            <p className="text-gray-900 text-lg mb-4">
                The <span className="uppercase">Kemper Profiler</span> is the leading-edge digital guitar amplified and all-in-one effects 
                processor.
            </p>
            <p className="text-gray-500 text-lg mb-4">
                Hailed as a game-changer by guitarists the world over, the <span className="uppercase">Profiler</span> is the first digital 
                guitar amp to really nail the full and dynamic sound of a guitar or bass amp.
            </p>
            <p className="text-gray-500 text-lg">
                This is made possible by a radical patented technology and concept which we call "PROFILING".
            </p>
        </div>
    )
}

export default ProductDescription;