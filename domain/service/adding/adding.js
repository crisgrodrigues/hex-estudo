const { livroFactory } = require('./livro')
const { addLivros } = require('../../repository/repository')

function createLivro(data) {
    if (validateLivro(data)) {
        return addLivros(livroFactory(data))
    } else {
        throw (new Error("Dados do livro inválido"))
    }
}

function validateLivro(f) {
    return (f.nome && f.descricao && f.autor)
}

module.exports = { createLivro }
