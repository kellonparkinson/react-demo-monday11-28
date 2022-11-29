import './App.css'
import { useState } from 'react'

import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'

function App() {
  const [taskList, setTaskList] = useState([])

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask])
  }

  return (
    <div className="App">
      <Header />
      <Form addTask={addTask} />
      <List tasks={taskList} />
    </div>
  )
}

export default App