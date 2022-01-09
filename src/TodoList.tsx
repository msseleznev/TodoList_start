import React, {useState, ChangeEvent, KeyboardEvent} from 'react';
import './App.css';
import {FilterValueType} from "./App";
import {behaviorPlugin} from "@testing-library/user-event/dist/keyboard/types";

export type TaskType = {
    id: string
    title: string
    isDone: boolean

}

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
    changeFilter: (value: FilterValueType) => void
    addNewTask: (title: string) => void
}

export function TodoList(props: TodoListPropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const addNewTaskTitle = () => {
        props.addNewTask(newTaskTitle)
        setNewTaskTitle("")
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addNewTaskTitle()
        }
    }
    const removeTaskHandler = (id: string) => {
        props.removeTasks(id)
    }
    const onAllChangeHandle = () => {
        props.changeFilter("all")
    }
    const onActiveChangeHandle = () => {
        props.changeFilter("active")
    }
    const onCompletedChangeHandle = () => {
        props.changeFilter("completed")
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={addNewTaskTitle}>+
                </button>
            </div>
            <ul>
                {
                    props.tasks.map(t => <li key={t.id}>
                        <button onClick={() => {
                            removeTaskHandler(t.id)
                        }}>x
                        </button>
                        <input type='checkbox' checked={t.isDone}/><span>{t.title}</span></li>)
                }
            </ul>
            <div>
                <button onClick={onAllChangeHandle}>All</button>
                <button onClick={onActiveChangeHandle}>Active</button>
                <button onClick={onCompletedChangeHandle}>Completed</button>

            </div>
        </div>
    )
}


