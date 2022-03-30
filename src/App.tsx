import React, {useState} from 'react';
import {ITodoItem} from "./types/types";
import {List} from "./components/List";
import {TodoItem} from "./components/TodoItem";
import {Form} from "./components/Form";


function App() {
    const [todos, setTodos] = useState<ITodoItem[]>([]);
    const addTodo = (todo: ITodoItem) => {
        setTodos([todo, ...todos])
    }
    const removeTodo = (todo: ITodoItem) => {
        const newTodo = todos.filter(item => item !== todo);
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
