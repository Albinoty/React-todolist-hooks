import React from 'react';

import TodoList from './components/TodoList'

const App = () => {

    return ( 
        <div className="container">
            <div className="bg-secondary">
                <TodoList />
            </div>
            <footer className="bg-secondary border-top text-center">
                <p className="py-2 text-white d-flex justify-content-center align-items-center">Albinoty @ {new Date().getFullYear()} | <a href="https://github.com/Albinoty/React-todolist-hooks" className="nav-link text-white"><i className="fab fa-github mx-2 fa-2x"></i> Github Repo</a></p>
            </footer>
        </div>
    )

}

export default App;