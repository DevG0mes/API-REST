const connection = require('./connection');

const getAll = async () => {
  const filmes = await connection.query('SELECT * FROM catalogo');
  return filmes.rows;
};

const insertfilm = async(nome,preco) => {
  const filmes = await connection.query('INSERT INTO catalogo (nome, preco) VALUES ($1, $2)', [nome, preco]);
  return filmes.rows;
};



module.exports = {
  getAll, insertfilm
};
