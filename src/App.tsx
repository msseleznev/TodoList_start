import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

function App() {

    let tasks1: Array<TaskType> = [
        {id: 1, title: 'CSS&HTML', isDone: false },
        {id: 2, title: 'JS', isDone: false },
        {id: 3, title: 'REACT', isDone: false }
    ]
    let tasks2: Array<TaskType> = [
        {id: 1, title: 'Spider-men', isDone: false },
        {id: 2, title: 'Matrix', isDone: false },
        {id: 3, title: 'Hachi', isDone: false }
    ]

    return (
        <div className="App">
            <TodoList title = 'Что нужно выучить' tasks = {tasks1} />
            <TodoList title = 'Что посмотреть' tasks = {tasks2} />
        </div>
    );

}



export default App;
