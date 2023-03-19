const JokesController = require('../controllers/jokes_controller')

module.exports = (app) => {
    app.post('/api/jokes', JokesController.createJoke)
    app.get('/api/jokes', JokesController.getAllJokes)
    app.get('/api/jokes/:id', JokesController.getOneJoke)
    app.put('/api/jokes/:id', JokesController.updateJoke)
    app.delete('/api/jokes/:id', JokesController.deleteJoke)
}