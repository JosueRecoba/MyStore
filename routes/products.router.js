const express = require('express');

const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();


router.get('/', (req, res) => {
  const product = service.find();
  res.json(products);
})

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter')
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.status(201).json({
    message: 'Created',
    data: body,
    id,
  });
})

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'Updated',
    data: body,
    id,
  });
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: 'Deleted',
    id,
  });
})


module.exports = router;
