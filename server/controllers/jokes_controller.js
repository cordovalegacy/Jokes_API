const Jokes = require('../models/jokes_model')

module.exports = {

    getAllJokes: (req, res) => { //<=this creates a module that handles a mongoose to mongodb query
        Jokes.find() //<= Joke is from model and find uses mongoose (from model) to execute a NoSQL query that finds all
            .then((allJokes) => {
                res.status(201).json(allJokes)
            })
            .catch((err) => {
                res.json({message: "Something went wrong", error: err})
            })
    },

    getOneJoke: (req, res) => {
        Jokes.findOne({_id: req.params.id})
            .then(oneJoke => {
                res.status(201).json(oneJoke)
            })
            .catch((err) => {
                res.json({message: "Something went wrong", error: err})
            })
    },

    createJoke: (req, res) => {
        console.log(req.body)
        Jokes.create(req.body)
            .then((newJoke) => {
                res.status(201).json(newJoke)
            })
            .catch((err) => {
                res.json({message: "Something went wrong", error: err})
            })
    },

    updateJoke: (req, res) => {
        Jokes.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then((updatedJoke) => {
                res.status(201).json(updatedJoke)
            })
            .catch((err) => {
                res.json({message: "Something went wrong", error: err})
            })
    },

    deleteJoke: (req, res) => {
        Jokes.deleteOne({_id: req.params.id})
            .then((deletedJoke) => {
                res.status(201).json(deletedJoke)
            })
            .catch((err) => {
                res.json({message: "Something went wrong", error: err})
            })
    }

}