const router = require('express').Router();
const Product = require('./productModel');

router.get(`/`, (req, res) => {
    res.status(200).json({ message: 'Hello API' })
})

router.post(`/products`, async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            image: req.body.image,
            countInStock: req.body.countInStock
        });
        const newProduct = await product.save();
        res.status(201).json({ success: true, data: newProduct })
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
});

router.get(`/products`, async (req, res) => {
    try {
        const productList = await Product.find();
        res.status(200).json({ success: true, data: productList })
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
})

module.exports = router;