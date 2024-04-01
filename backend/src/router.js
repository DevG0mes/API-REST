const express = require('express');
const filmesController = require('./controllers/filmesController');
const filmesMiddlewares = require('./middlewares/filmesMiddlewares');
const router = express.Router();

router.get('/filmes', filmesController.getAll);
router.post('/filmes/post', filmesMiddlewares.validateBody, filmesController.insertfilm);
router.delete('/filmes/:id', filmesController.deleteFilme);

module.exports = router;