import React, { useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = (props) => {

    const [products, setProducts] = useState([]);
    const removeProductFromDOM = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <div>
    	{/* /*PersonForm and Person List can both utilize the getter and setter established in their parent component: */}
            <ProductForm products={products} setProducts={setProducts} />
            <hr />
            <ProductList products={products} setProducts={setProducts}
            removeProductFromDOM = {removeProductFromDOM}/>
        </div>
    )
}
export default Main;
