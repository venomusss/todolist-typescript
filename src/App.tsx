import React, {useState} from 'react';
import {ITodoItem} from "./types/types";
import {List} from "./components/List";
import {TodoItem} from "./components/TodoItem";
import {Form} from "./components/Form";


function App() {
    const [todos, setTodos] = useState<ITodoItem[]>([]);
    const addTodo = (title: string, e:React.FormEvent) => {
        e.preventDefault();
        const todo:ITodoItem = {
            id:Date.now(),
            title: title,
            completed:false,
        }
        setTodos([todo, ...todos])
    }
    const removeTodo = (todo: ITodoItem) => {
        const newTodo:ITodoItem[] = todos.filter(item => item !== todo);
        setTodos(newTodo);
    }
    return (
        <div className="App">
            <Form addTodo={addTodo}/>
            <List items={todos}
                  renderItem={(todo: ITodoItem) => <TodoItem removeTodo={removeTodo} todo={todo} key={todo.id}/>}/>
        </div>
    );
}

export default App;
