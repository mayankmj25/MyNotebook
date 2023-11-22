const mongoose = require('mongoose');

 const mongoURI ="mongodb+srv://deepak1257:deepak%401257@deepak-1234.sodqs7p.mongodb.net/Notebook" ;
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully ");
    })
}
module.exports = connectToMongo;