import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Number = (props) => {
    const {numWord, color, bgColor} = useParams()

    return (
        <div>
            {
                isNaN(numWord)?
                <h2 style={color?{color: color, backgroundColor: bgColor}
            :null}>
                The word is: {numWord}!</h2>
                :
                <h2>The number is: {numWord}!</h2>
            }
        </div>
    )
}

export default Number