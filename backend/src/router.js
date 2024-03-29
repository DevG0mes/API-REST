const express = require('express');
const filmesController = require('./controllers/filmesController');
const router = express.Router();

router.get('/filmes', filmesController.getAll);

module.exports = router;