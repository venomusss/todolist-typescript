import React, {FC, useState} from 'react';
import {ITodoItem} from "../types/types";

interface TodoItemProps {
    todo: ITodoItem;
    removeTodo: (todo: ITodoItem) => void;
}

export const TodoItem: FC<TodoItemProps> = ({todo, removeTodo}) => {
    const [ischecked, setIsChecked] = useState<boolean>(false);
    const checker = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!ischecked)
    }
    return (
        <div className='todo-item'>
            <input className='check' onChange={checker} checked={ischecked} type="checkbox"/>
            <div className='title' style={{
                textDecoration: ischecked ? "line-through" : 'none',
                color: ischecked ? "gray" : '#811654'
            }}>{todo.title}</div>
            <button onClick={()=>removeTodo(todo)} className='delete-button'>✖</button>
        </div>
    );
};
