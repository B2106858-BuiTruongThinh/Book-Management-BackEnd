const express = require('express');
const router = express.Router();
const controller = require("../../controllers/admin/books.controller");


router.post('/',controller.createBook)
router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.put('/:id', controller.updateOne)
router.delete('/:id', controller.deleteOne)
router.delete('/', controller.deleteAll)

module.exports = router;