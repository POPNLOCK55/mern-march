import React, { useState } from 'react';

const PersonCard = (props) => {
    const [personAge, setPersonAge] = useState(props.age)
    return (
        <div>
            <h2> { props.firstName } { props.lastName } </h2>
            <p>Age: { personAge }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ (event) => setPersonAge(personAge + 1)} >Birthday Button for { props.firstName }!</button>
        </div>
    )
}

export default PersonCard