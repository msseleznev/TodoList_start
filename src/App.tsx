import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

export type FilterValueType = 'all' | "active" | "completed"

function App() {

    let initTasks: Array<TaskType> = [
        {id: 1, title: 'CSS&HTML', isDone: false },
        {id: 2, title: 'JS', isDone: false },
        {id: 3, title: 'REACT', isDone: true },
        {id: 4, title: 'REDUX', isDone: false }
    ]
    let [tasks, setTasks] = useState(initTasks)
    let [filter, setFilter] = useState<FilterValueType> ('all')


    function removeTasks (id: number) {
        tasks= tasks.filter(t => t.id !== id)
        setTasks(tasks)
    }
    function changeFilter (value: FilterValueType) {
        setFilter(value)
    }

    let tasksForTodoList = tasks
    if (filter === "active") {
        tasksForTodoList =  tasks.filter(t => t.isDone === false)
    }

    return (
        <div className="App">
            <TodoList title = 'Что нужно выучить'
                      tasks = {tasksForTodoList}
                      removeTasks = {removeTasks}
                      changeFilter = {changeFilter}/>

        </div>
    );

}



export default App;
