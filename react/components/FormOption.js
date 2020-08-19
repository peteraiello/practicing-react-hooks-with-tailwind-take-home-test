const formSelect = (props) => {

    const className =  "w-full border-solid rounded-lg p-4 hover:border-gray-700"
    let activeClass = "border-gray-700 border-2"
    let inactiveClass = "border-gray-300 border"

    return(
        <button 
            className={ (props.activeButton === props.id ? className + " " + activeClass  : className + " " + inactiveClass) }
            onClick={ () => props.click(props.id, props.cost) } 
            aria-label={props.title}
        >
            <span className="flex items-center">
                <p className="text-left w-10/12 text-sm">
                    { props.title }
                    <br />
                    <span className="text-gray-500">{ props.content }</span>
                </p>
                <p>
                    <span className="text-gray-900 float-righ text-sm"> { ( props.cost != 0 ?  "+ $" + props.cost : "" ) }</span>
                </p>
            </span>
        </button>
    )
}

export default formSelect;