import FormOption from './FormOption';
import React, {useState} from 'react';
const ProductForm = (props) => {

    const [active, setActive] = useState({
        active: 0
    })

    const [costState, setCost] = useState({
        cost: 0
    })


    const clickHandler = (id, cost) => {
        setActive({ active: id })
        setCost({ cost: cost })
        event.preventDefault();
     }

    return (
        <div>
            <h3 className="text-2xl">{ props.groupTitle }</h3>
            <ul>
                { buttons.map((buttons, index) => 
                <li key={index}>
                    <FormOption
                        id={ buttons.id }
                        title={buttons.title}
                        content={buttons.content}
                        cost={ buttons.cost }
                        label={ index}
                        activeButton={ active.active }
                        click={ clickHandler }
                    ></FormOption>
                </li>
                )}
            </ul>
        </div>
    )
}

const buttons = [
    {id: 0, title: 'None', content: 'Use in the studio or with your own power amp.', cost: 0 },
    {id: 1, title: 'Powered', content: 'Built-in 600W solid state power amp.', cost: 449 },
];

export default ProductForm;