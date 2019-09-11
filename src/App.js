import React, { useReducer } from 'react';
import TodoForm from './components/ToDoForm';
import  TodoList from './components/ToDoList';
import {initialState, toDoReducer } from './reducers/reducer';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialState)
  return (
    <div className="App">
      <header className="App-header">
        <TodoList dispatch={dispatch} data={state} />
        <TodoForm dispatch={dispatch} />
      </header>
    </div>
  );
}

export default App;
