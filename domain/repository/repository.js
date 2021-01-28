const { saveLivros, findLivros, findLivrosByID } = require('../../adapters/storage/db')

function addLivros(f) {
    return saveLivros(f)
}

function getLivrosByFilter(filter) {
    return findLivros(filter)
}

function getLivrosByID(f) {
    return findLivrosByID(f) 
}

module.exports = {addLivros, getLivrosByFilter, getLivrosByID}