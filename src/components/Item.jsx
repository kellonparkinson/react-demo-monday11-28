import React, {useState} from 'react'

const Item = ({ task }) => {
    const [complete, setComplete] = useState(false)

    const handleClick = () => setComplete(!complete)

    return (
        <li className={complete ? 'green' : 'red'} onClick={handleClick} >{ task }</li>
    )
}

export default Item