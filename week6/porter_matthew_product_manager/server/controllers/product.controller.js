const { response } = require('express');
const Product = require('../models/product.model');

module.exports.index= (request, response) => {
    response.json({ message: "hello world!"});
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
    .then(product => response.json(product))
    .catch(error => response.json(error));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
    .then(products => {
        console.log(products);
        response.json(products);
    })
    .catch(error => {
        console.log(error)
        response.json(error)
    })
}

module.exports.getOneProduct = (request, response)=> {
    Product.findOne({_id: request.params.id})
    .then(product => response.json(product))
    .catch(error => response.json(error))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(updatedProduct => response.json(updatedProduct))
    .catch(error => response.json(error))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(error => response.json(error))
}