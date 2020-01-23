import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    // Declatation d'un state avec un tableau vide ou on va stocker nos taches
    const [todos,setTodos] = useState([]);
    // Declaration d'un state avec all pour faire de l'affichage conditionelle
    const [menu,setMenu] = useState("all");

    // Ajouter une tache
    const addToDo = (e) => {
        if(e.key === "Enter"){
            setTodos([...todos,{   
                id:  todos.length,
                text: e.target.value,
                check: false,
            }])
            e.target.value = "";
        }
    }   
    // tache fait ou non
    const checkToDo = (id) => {
        // On copie le tableau pour mieux reattribuer avec setTodos
        const tmp = todos.slice();

        if(tmp[id].check === true)
            tmp[id].check = false;
        else
            tmp[id].check = true;

        setTodos(tmp);
    }
    //Supprimer une tache
    const deleteToDo = (id) => {
        // On copie le tableau pour mieux reattribuer avec setTodos
        const tmp = todos.slice();

        tmp.splice(id,1);

        setTodos(tmp);
    }
    // Mettre a jour une tache
    const updateToDo = (event,id) => {
        // On copie le tableau pour mieux reattribuer avec setTodos
        const tmp = todos.slice();    
    
        tmp[id].text = event.target.value 
        
        setTodos(tmp);
    }

    // Creation de la variable du rendu de todo pour eviter une répétition
    // les attributs on permet de passer en props des fonctions qui va permettre a jour directement via le parent
    // Le element.id me permet de retrouver ma tache pour pouvoir l'utiliser par la suite
    const rendu = todos.map((element,index) => 
        <TodoItem 
            key={index}  
            id={element.id}
            text={element.text} 
            check={element.check} 
            onUpdate={(event) => updateToDo(event,element.id)}
            onDelete={() => deleteToDo(element.id)}
            onCheck={() => checkToDo(element.id)}
        />
    )

    return (
        <div>
            <h1 className="text-white text-center">Todo List</h1>
            <div className="form-group mt-5 mb-5">
                <input type="text"className="d-block form-control w-75 mx-auto" onKeyPress={addToDo} />
            </div>
            <div className="d-flex justify-content-center">
                <button className={menu === "all" ? "btn btn-primary active" : "btn btn-primary"} onClick={() => setMenu("all")}>Tous</button>
                <button className={menu === "todo" ? "btn btn-primary active mx-2" : "btn btn-primary mx-2"} onClick={() => setMenu("todo")}>à faire</button>
                <button className={menu === "done" ? "btn btn-primary active" : "btn btn-primary"} onClick={() => setMenu("done")}>Fait</button>
            </div>
            <div className="mt-5">
                <ul className="list-group py-2">
                    {/* Conditon de rendu pour afficher toutes les taches, les taches fait et les taches non fait
                    Le filter me permet de filtrer mon tableau */}
                    {menu === "all" && rendu}
                    {menu === "todo" && rendu.filter(el => el.props.check === true)}
                    {menu === "done" && rendu.filter(el => el.props.check === false)}
                </ul>
            </div>
        </div>
    )
};

export default TodoList;
