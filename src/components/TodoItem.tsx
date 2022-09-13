import React, {FC} from 'react'
import {useAppDispatch} from "../hooks/redux";
import {toggleCompletedTodo, removeTodo} from "../features/todo/todoSlice";

const TodoItem:FC<any> = ({todo}) => {

    const dispatch = useAppDispatch()

    const toggleTodoHandler = (id: number) => {
        dispatch(toggleCompletedTodo(id))
    }

    const removeTodoHandler = (id: number) => {
        dispatch(removeTodo(id))
    }
    return (
        <div className='flex justify-between items-center my-2'>
            <div
                onClick={() => toggleTodoHandler(todo.id)}
                className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'>
                Complete
            </div>
            <div className={`text-sm ${todo.completed ? 'line-through font-medium text-lime-400' : ''}`}>
                {todo.text}
            </div>
            <div
                onClick={() => removeTodoHandler(todo.id)}
                className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'>
                Delete
            </div>
        </div>
    )
}

export default TodoItem
