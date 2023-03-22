import React, {useState} from 'react';
import style from './modules/FormStyle.module.css';


const BoxForm = ({boxList, setBoxList}) =>{ 
    const [box, setBox] = useState({
        color : "",
        height : ""
    })

    const submitHandler = (e) => {
        e.preventDefault()
        setBoxList([...boxList, box])
        console.log(boxList)
    }

    return (
        <form onSubmit= {submitHandler}>
        <div className = {style.formBody}>
            <h1>Create a Box!</h1>
            <div>
            <label>Choose a Color!</label>
            <input type="text" onChange={ (e) => setBox({...box, "color": e.target.value})}/>
            </div>
            <div>
            <label>Adjust the Height!</label>
            <input type="number" onChange={ (e) => setBox({...box, "height": e.target.value})}/>
            </div>
        </div>
        <input type="submit" value="Add Box"/>
        </form>
    )}

export default BoxForm