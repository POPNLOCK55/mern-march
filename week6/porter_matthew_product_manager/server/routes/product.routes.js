const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
    app.post('/api/product', ProductController.createProduct);
}