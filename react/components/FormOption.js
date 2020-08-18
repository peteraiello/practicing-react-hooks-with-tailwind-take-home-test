const formSelect = (props) => {

    const className =  "w-full border-solid border-2 rounded-lg p-4 my-4 mr-4"
    let activeClass = "border-gray-800"
    let inactiveClass = "border-gray-300"

    return(
            <button 
                className={ (props.activeButton === props.id ? className + " " + activeClass  : className + " " + inactiveClass) }
                onClick={ () => props.click(props.id, props.cost) } 
                aria-label={props.title}
            >
            <p className="text-left">
                { props.title }
                <br />
                { props.content }
                <span className="text-gray-900 float-right"> { ( props.cost != 0 ?  "+ $" + props.cost : "" ) }</span>
            </p>
        </button>
    )
}

export default formSelect;