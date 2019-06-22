import React from 'react'
import logo from './logo.svg'
import redux from './redux.png'
import './App.css'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='img-box'>
          <img src={logo} className="App-logo" alt="react logo" />
          <img src={redux} className="App-logo" id='redux' alt="redux logo" />
        </div>
        <h1>
          Todo List
        </h1>
        <TodoForm />
			  <TodoList />
      </header>

    </div>
  )
}

export default App
