import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = (props) => {
    const {id} = useParams();

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:8000/api/product/' + id)
        .then(response => {
            setTitle(response.data.title)
            setPrice(response.data.price)
            setDescription(response.data.description)
        })
        .catch(error => console.log(error))
    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
        .then(response => {
            console.log(response)
            navigate('/home')
        })
        .catch(error => console.log(error))
    }
    return(
        <div>
        <h1>Update a Product!</h1>
        <form onSubmit={updateHandler}>
            <p>
                <label>Title</label><br />
                <input type="text" 
                name="title" 
                value={title} 
                onChange={(e) => { setTitle(e.target.value) }} />
            </p>
            <p>
                <label>Price</label><br />
                <input type="text" 
                name="price"
                value={price} 
                onChange={(e) => { setPrice(e.target.value) }} />
            </p>
            <p>
                <label>Description</label><br />
                <textarea 
                name="description"
                value={description} 
                onChange={(e) => { setDescription(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
    </div>
    )
}
export default UpdateForm