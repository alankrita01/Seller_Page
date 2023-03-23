const express = require('express');
const router = express.Router();

const sellerController = require('../controller/seller');

router.post('/add-product',sellerController.postAddProduct);

router.get('/get-seller',sellerController.getSeller);

router.delete('/delete-seller/:id',sellerController.postDeleteSeller);

router.put('/edit-seller/:id',sellerController.getEditSeller);

module.exports = router;
