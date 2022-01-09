import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

export type FilterValueType = 'all' | "active" | "completed"

function App() {
//BLL
    let initTasks: Array<TaskType> = [
        {id: v1(), title: 'CSS&HTML', isDone: false},
        {id: v1(), title: 'JS', isDone: false},
        {id: v1(), title: 'REACT', isDone: true},
        {id: v1(), title: 'REDUX', isDone: false}
    ]
//Измё  енение текущего состояния BLL
    let [tasks, setTasks] = useState(initTasks)
    let [filter, setFilter] = useState<FilterValueType>('all')

//Deleted tasks
    function removeTasks(id: string) {
        tasks = tasks.filter(t => t.id !== id)
        setTasks(tasks)
    }

// Filtered tasks
    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }

    let tasksForTodoList = tasks
    if (filter === "active") {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
    }

    //Added tasks
    function addNewTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }


    return (
        <div className="App">
            <TodoList title='Что нужно выучить'
                      tasks={tasksForTodoList}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
                      addNewTask={addNewTask}
            />

        </div>
    );

}


export default App;
