const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/reader.controller");
const authMiddleware = require("../../middlewares/client/auth.middlewares");

router.post('/register', controller.create)
router.get('/user', controller.getUser)
router.get('/infor', controller.getInfor)
router.get('/', controller.getAll);

router.put('/borrow', controller.borrowBook)
router.put('/statusBookReturn/:readerId/:bookId', controller.statusBookReturn)
router.delete('/return/:id', controller.deleteBook)
router.get('/numberbookborrowed/:id_book', controller.getNumberBook)

module.exports = router;