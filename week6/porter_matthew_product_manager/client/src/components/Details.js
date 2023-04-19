import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";

const Details = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    useEffect(()=> {
        axios.get("http://localhost:8000/api/product/" + id)
        .then(response => {
            console.log(response.data);
            setProduct(response.data);
        })
        .catch(error => console.log(error))
    }, [id]);

    return(
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default Details;