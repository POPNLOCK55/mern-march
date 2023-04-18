const Product = require('../models/product.model');

module.exports.index= (request, response) => {
    response.json({ message: "hello world!"});
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
    .then(product => response.json(product))
    .catch(error => response.json(error));
}