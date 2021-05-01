const router = require('express').Router();

router.use(require('./product/productRouter'));

module.exports = router;