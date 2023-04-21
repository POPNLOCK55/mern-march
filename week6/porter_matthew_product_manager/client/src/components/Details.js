import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";

const Details = (props) => {
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const {id} = useParams();
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get("http://localhost:8000/api/product/" + id)
        .then(response => {
            console.log(response.data);
            setProduct(response.data);
        })
        .catch(error => console.log(error))
    }, [id]);
    const removeProductFromDOM = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
        .then(response => {
            removeProductFromDOM(productId)
            navigate('/home')
        })
        .catch(error => console.log(error))
    }

    return(
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <div>
                <button onClick={(e)=> deleteProduct(product._id)}>Delete Item</button>
            </div>
        </div>
    )
}

export default Details;