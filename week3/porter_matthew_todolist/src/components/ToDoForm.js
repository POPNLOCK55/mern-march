import React, {useState} from 'react';

const ToDoForm = ({toDoList, setToDoList}) => {
// create a component that, on submission, stores a string. Pass that data to another component that will render said string in an element with a checkoff and delete function.
    const [toDoItem, setToDoItem] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        setToDoList([...toDoList, toDoItem])
        setToDoItem('')
        console.log(toDoList)
    }
    return (
        <main>
            <div>
                <h1>To-Do List</h1>
            </div>
            <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="listItem">New To-Do:</label>
                <input type="text" onChange={(e) => setToDoItem(e.target.value)}/>
                <input type="submit" value="Add Item"/>
            </div>
            </form>
        </main>
    )
}

export default ToDoForm