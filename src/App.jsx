import React from 'react';

import TodoList from './components/TodoList'

const App = () => {

    return ( 
        <div className="container">
            <div className="bg-secondary">
                <TodoList />
            </div>
            <footer className="bg-secondary border-top text-center">
                <p className="py-2">Coding 10 @ 2020</p>
            </footer>
        </div>
    )

}

export default App;