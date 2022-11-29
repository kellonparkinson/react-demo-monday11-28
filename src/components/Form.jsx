import React, {useState} from 'react'

const Form = (props) => {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => setUserInput(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(userInput)
        props.addTask(userInput)
        setUserInput('')
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Add a Task</h1>
            <input type="text" value={userInput} onChange={handleChange} />
            <button>Add Task</button>
        </form>
    )
}

export default Form