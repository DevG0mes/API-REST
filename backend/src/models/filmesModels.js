const connection = require('./connection');

const getAll = async () => {
  const filmes = await connection.query('SELECT * FROM catalogo');
  return filmes.rows;
};

module.exports = {
  getAll
};
