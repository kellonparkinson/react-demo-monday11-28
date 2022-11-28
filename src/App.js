import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Form from './components/Form'

function App() {
  const [taskList, setTaskList] = useState([])

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask])
  }

  return (
    <div className="App">
      <Header />
      <Form addTask={addTask} />
    </div>
  )
}

export default App