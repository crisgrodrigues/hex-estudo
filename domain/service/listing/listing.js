const { getLivrosByFilter, getLivrosByID } = require('../../repository/repository')
const { livroFactory } = require('./livro')

function listLivrosByID(id) {
    return getLivrosByID(id)
}

function listLivros() {
    return livroFactory()
}

module.exports = { listLivrosByID, listLivros }