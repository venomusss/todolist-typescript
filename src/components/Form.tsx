import React, {FC, useState} from 'react';
import {ITodoItem} from "../types/types";

interface FormProps {
    addTodo: (title: string, e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: FC<FormProps> = ({addTodo}) => {
    const [title, setTitle] = useState<string>('');
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }


    return (
        <form className='form' onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            addTodo(title, e)
            setTitle('');
        }}>
            <input className='form-input'
                   onChange={changeHandler}
                   value={title}
                   id='title' type='text'
                   placeholder='Enter title of todo'
                   name='titleName'
            />
            <button className='add-button'>Add</button>
        </form>
    );
};