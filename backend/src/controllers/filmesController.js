const filmesModels = require('../models/filmesModels');
const getAll = async(req,res) => {

  const filmes = await filmesModels.getAll();
  return res.status(200).json(filmes);
};
const insertfilm = async(req,res) => {
  
  const nome = req.body.nome;
  const preco = req.body.preco;

  const filmes = await filmesModels.insertfilm(nome,preco);
  return res.status(201).json(filmes);
};

const deleteFilme = async(req,res) =>{
  const {id} = req.params;

  await filmesModels.deleteFilme(id);
  return res.status(204).json();
};

const UpdatedFilme = async (req,res) => {
  
  const {id} = req.params;
  
  await filmesModels.UpdatedFilme(id, req.body);
  
  return res.status(204).json();
};

module.exports = {
  getAll, insertfilm, deleteFilme, UpdatedFilme
};