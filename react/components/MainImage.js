const mainImage = (props) => {

    return(
        <div className="border-solid border border-gray-200 rounded-lg my-6 p-6">                
            <img src={`img/${props.image}.jpg`} />
        </div>
   )
}

export default mainImage;