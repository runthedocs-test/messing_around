import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false
        };

        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;

    return (
        <div className="app">
            <header className="header">
                <h1>My Todo List</h1>
            </header>

            <form onSubmit={addTodo} className="todo-form">
                <input
                    type="text"
                    className="todo-input"
                    placeholder="What needs to be done?"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className="add-button" disabled={!inputValue.trim()}>
                    Add Todo
                </button>
            </form>

            {todos.length === 0 ? (
                <p className="empty-state">No todos yet. Add one above!</p>
            ) : (
                <>
                    <ul className="todo-list">
                        {todos.map(todo => (
                            <li key={todo.id} className="todo-item">
                                <input
                                    type="checkbox"
                                    className="todo-checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                />
                                <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                                    {todo.text}
                                </span>
                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className="delete-button"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="stats">
                        {completedCount} of {totalCount} completed
                    </div>
                </>
            )}
        </div>
    );
}

export default App;