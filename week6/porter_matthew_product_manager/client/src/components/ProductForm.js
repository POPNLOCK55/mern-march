import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    const {products, setProducts} = props;
    //keep track of what is being typed via useState hook
    const [productTitle, setProductTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/product', {
            title: productTitle,
            price: price,
            description: description
        })
            .then(response => {
                console.log(response); // always console log to get used to tracking your data!
                console.log(response.data);
                setProducts([...products, response.data])
            })
            .catch(error => console.log(error))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br />
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" onChange={(e) => setProductTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br />
                <input type="text" onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br />
                <textarea onChange={(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}
export default ProductForm;

