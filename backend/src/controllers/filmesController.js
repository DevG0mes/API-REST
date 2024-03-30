const filmesModels = require('../models/filmesModels');
const getAll = async(req,res) => {

  const filmes = await filmesModels.getAll();
  return res.status(200).json(filmes);
};
const insertfilm = async(req,res) => {

  const filmes = await filmesModels.insertfilm();
  return res.status(201).json(filmes);
};

module.exports = {
  getAll, insertfilm
};