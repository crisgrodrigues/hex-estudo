const express = require ('express')

const { createLivro } = require('../../domain/service/adding/adding'),
      { listLivroByID, listLivros } = require('../../domain/service/listing/listing')

function initializateRouter() {
    const router = express.Router()
    router.post('/lib/livros', postLivroHandler)
    router.get('/lib/livros', getLivrosHandler)
    router.get('/lib/livros/:id', getLivroHandler)
    return router
}

function getLivroHandler(req, res) {
    listLivroByID(req.params.id)
        .then(f => res.send(f))
}

function getLivrosHandler(req, res) {
    listLivros().then(data => res.send(data))
}

function postLivroHandler(req, res) {
    createLivro(req.body).catch(e => res.status(500).send(e))
        .then(data => {
            res.status(201).send(data)
        }).catch(e => res.status(400).send(e))
}

module.exports = initializateRouter()