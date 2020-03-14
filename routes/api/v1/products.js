const express = require('express');
const router = express.Router();

const productsApi = require("../../../controllers/api/v1/products_api");



router.get('/',productsApi.index);
router.post('/create',productsApi.create);
router.delete('/:id',productsApi.destroy);
router.post('/:id/update_quantity',productsApi.update_quantity);


module.exports = router;