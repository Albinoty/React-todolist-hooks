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
        <li className={props.check === true ? "list-group-item bg-success w-75 mx-auto mx-auto d-flex justify-content-center align-items-center" : "list-group-item w-75 mx-auto d-flex justify-content-center align-items-center"} id={props.id} onDoubleClick={handleClick} >
            <input type="checkbox" onClick={props.onCheck} className=""  defaultChecked={props.check} />
            {!input && <p className="m-0 px-5 w-75">{props.text}</p>}
            {input && <input type="text" className="w-75" onChange={props.onUpdate} onKeyPress={conditonInput} />}
            <span>
                <button type="button" className="btn-close d-block col-2" onClick={props.onDelete} data-dismiss="toast"></button>
            </span>
        </li>
    )

}

export default TodoItem