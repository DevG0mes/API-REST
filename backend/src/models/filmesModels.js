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
const UpdatedFilme = async (id, filme) => {
  const query = 'UPDATE catalogo SET nome=$1, preco=$2 WHERE id=$3';
  
  const {nome,preco} = filme;
  
  const UpdatedFilme = await connection.query(query,[nome, preco, id]);
  
  return UpdatedFilme;
};




module.exports = {
  getAll, insertfilm, deleteFilme, UpdatedFilme
};
