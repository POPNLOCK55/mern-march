import React, { useState, useEffect } from 'react';
import axios from 'axios'
const Index = () => {
    const [poke, setPoke] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
    .then(response => {setPoke(response.data.results)})
}, [])



    return (
        <main>
            <h1>Here are the Pokemans</h1>
            <div>
                {poke.map((pokemon, index, arr) => {
                    return <ul>
                        <li key={index}>{pokemon.name}</li>
                    </ul>
                })}
            </div>
        </main>
    )
}





export default Index;