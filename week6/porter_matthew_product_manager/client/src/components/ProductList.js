import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';

const ProductList = (props) => {
    const {products, setProducts, removeProductFromDOM} = props;

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

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
        .then(response => {
            removeProductFromDOM(productId)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            {products.map((product, index)=>{
                return <div key={index}>
                    <Link to = {`/product/${product._id}`}>{product.title}</Link>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <Link to = {"/product/edit/" + product._id}>Edit Product info</Link>
                    <button onClick={(e) => {deleteProduct(product._id)}}>Delete Product</button>
                </div>
            })}
        </div>
    )
}

export default ProductList