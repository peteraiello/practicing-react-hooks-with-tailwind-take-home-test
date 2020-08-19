const ProductDescription = (props) => {

    return (
        <div className="mt-6 mb-10">
            <p className="mb-4">
            <span className="text-gray-500">Starting at</span><br/>
            <span className="text-gray-900 text-4xl font-extrabold"><strong>${ props.price }</strong>
            </span>
            </p>
            <p className="text-gray-900 text-lg mb-4">
                The <span className="uppercase">Kemper Profiler&trade;</span> is the leading-edge digital guitar amplified and all-in-one effects 
                processor.
            </p>
            <p className="text-gray-500 text-lg mb-4">
                Hailed as a game-changer by guitarists the world over, the <span className="uppercase">Profiler&trade;</span> is the first digital 
                guitar amp to really nail the full and dynamic sound of a guitar or bass amp.
            </p>
            <p className="text-gray-500 text-lg">
                This is made possible by a radical patented technology and concept which we call "PROFILING".
            </p>
        </div>
    )
}

export default ProductDescription;