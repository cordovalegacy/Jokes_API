const mongoose = require('mongoose')
//require mongoose grabs mongoose from node_modules

const db = 'Jokes'
//inject into connect method

mongoose.connect(`mongodb://127.0.0.1:27017/${db}`,{
    useNewUrlParser:true, //<= new url format for mongoose.connect, old one depracated*
    useUnifiedTopology: true //<= false by default, allows us to use mongodb's new connection engine
    //https://arunrajeevan.medium.com/understanding-mongoose-connection-options-2b6e73d96de1 <=explains mongoose connect options
})

    .then(() => console.log(`Established a connection to the ${db} database`))
    .catch((err) => console.log(`Could not establish a connection to the ${db} database`, err))