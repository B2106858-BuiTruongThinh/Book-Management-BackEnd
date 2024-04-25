const express = require('express');
const router = express.Router();

const controller = require('../../controllers/admin/auth.controller');

router.post('/login', controller.login);
router.get("/logout", controller.logout);

module.exports = router;