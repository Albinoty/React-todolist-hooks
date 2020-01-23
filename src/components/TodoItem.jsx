import React, {useState} from 'react';

const TodoItem = (props) => {

    const [input,setInput] = useState(false)
    // Si on clique sur le texte, alors je mets true pour afficher l'input
    const handleClick = () => {
        setInput(true)
    }
    // Si j'appuie sur Enter, alors je mets false pour ne plus l'afficher
    const conditonInput = (e) => {
        if(e.key === "Enter")
            setInput(false)
    }

    return (
        <li className={props.check === true ? "list-group-item bg-success w-75 mx-auto" : "list-group-item w-75 mx-auto"} id={props.id} onDoubleClick={handleClick} >
            <input type="checkbox" onClick={props.onCheck}  defaultChecked={props.check} />
            {!input && props.text}
            {input && <input type="text" className="w-75" onChange={props.onUpdate} onKeyPress={conditonInput} />}
            <button type="button" className="close" onClick={props.onDelete} data-dismiss="toast" >
                <span>&times;</span>
            </button>
        </li>
    )

}

export default TodoItem