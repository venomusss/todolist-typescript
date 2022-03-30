import React, {FC, useState} from 'react';
import {ITodoItem} from "../types/types";
interface FormProps{
    addTodo:(todo:ITodoItem)=>void;
}
export const Form:FC<FormProps> = ({addTodo}) => {
    const [title, setTitle] = useState<string>('');
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const createTodo = (e:React.KeyboardEvent) => {
        if(e.key==='Enter' && title!==''){
            const todo:ITodoItem = {
                id:Date.now(),
                title: title,
                completed:false,
            }
            addTodo(todo);
            setTitle('');
        }
    }
    return (
            <input className='form'
                   onChange={changeHandler}
                   value={title}
                   onKeyPress={createTodo}
                   id='title' type='text'
                   placeholder='Enter title of todo' />
    );
};
