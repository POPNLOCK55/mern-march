import React, { useState } from "react";
import styles from "./styles/Header.module.css";
import boxStyle from "./styles/Box.module.css";

const BoxForm = (props) => {
    const [box, setBox] = useState({
        boxStyle
    })
    
    const boxHandler = (e) => {
        setBox({...box, [e.target.color]:e.target.value})
    }
    
    return (
        <div>
        <h1 className={styles.header}>Add a box!</h1>
        <form onSubmit={boxHandler}>
            <div>
                <label>Color: </label>
                <input type="text" name="color"/>
                <input type="submit" value="Add"/>
            </div>
        </form>
    </div>
)
};

export default BoxForm