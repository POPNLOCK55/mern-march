import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {
    const {products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((response) => {
            console.log(response.data);
            setProducts(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [setProducts])

    return (
        <div>
            {products.map((product, index)=>{
                return <div key={index}>
                    <Link to = {`/product/${product._id}`}>{product.title}</Link>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    
                </div>
            })}
        </div>
    )
}

export default ProductList