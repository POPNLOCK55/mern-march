import React, { useState } from 'react';

const ToDoListShow = ({ toDoList, setToDoList }) => {
    const [newToDo, setNewToDo] = useState('')


/*in this function we are removing an item from our array; {toDoList}.
we do so by passing in the index of whatever item we are iterating over in our map function. i.e. (deleteIdx)
then we create a new const; {filteredToDo}, that will create a copy of the original array with the filter method.
After that we compare the (deleteIdx) from our parent function with (idx) inside of our filter function to see if they DON'T match.         ^^^^^^^^^^^                               ^^^^^ SAME THING, but storing in two places allows us to compare them without React giving an error, since they are 2 unique instances of the same array
If they don't match, nothing happens.
If they DO match, the element is filtered out.*/

    const deleteHandler = (deleteIdx) => {
        const filteredToDo = toDoList.filter((item, idx) => {
            return idx !== deleteIdx
        });
        console.log("filtered array:", filteredToDo)
        setToDoList(filteredToDo);
    }

    const handleLineThrough = (textIdx) => {
        const updateItem = toDoList.map((item, idx) => {
            if (idx === textIdx){
                toDoObject.completed = !toDoObject.completed
            }
            return toDoList
        })
        setToDoList(updateItem)
    }

    const toDoObject = {
        content: newToDo,
        completed: false
    }

    return (
        <div>
            {toDoList.map((item, idx) => (
                <div className='listItem' key={idx}>
                    <p>{item}</p>
                    <input checked={toDoObject.completed} type="checkbox" onChange={(e) => {
                        handleLineThrough(idx);
                    }}/>
                    {/* create a delete handler */}
                    <button className='btn' onClick={(e) => deleteHandler(idx)}>Delete</button>
                    
                </div>
            ))}
        </div>
    )
}


export default ToDoListShow