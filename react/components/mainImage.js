const mainImage = (props) => {

    return(
        <div className="border-solid border-2 border-gray-300 rounded-lg my-6 p-6">                
            <img src={`img/${props.image}.jpg`} />
        </div>
   )
}

export default mainImage;