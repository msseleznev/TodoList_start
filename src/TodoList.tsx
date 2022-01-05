import React from 'react';
import './App.css';
import {FilterValueType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean

}

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: number) => void
    changeFilter: (value: FilterValueType)=> void


}

export function TodoList(props: TodoListPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => <li>
                        <button onClick={() => {
                            props.removeTasks(t.id)
                        }}>x
                        </button>
                        <input type='checkbox' checked={t.isDone}/><span>{t.title}</span></li>)
                }

            </ul>
            <div>
                <button onClick={() => {props.changeFilter("all")}}>All</button>
                <button onClick={() => {props.changeFilter("active")}}>Active</button>
                <button onClick={() => {props.changeFilter("completed")}}>Completed</button>
            </div>
        </div>
    )
}


