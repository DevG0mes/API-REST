const connection = require('./connection');

const getAll = async () => {
  const filmes = await connection.query('SELECT * FROM catalogo');
  return filmes.rows;
};

const insertfilm = async(nome,preco) => {
  const filmes = await connection.query('INSERT INTO catalogo (nome, preco) VALUES ($1, $2)', [nome, preco]);
  return filmes.rows;
};

const deleteFilme = async (id) => {
  const removedFilme = await connection.query('DELETE FROM catalogo WHERE id = $1', [id]);
  return removedFilme;
};




module.exports = {
  getAll, insertfilm, deleteFilme,
};
