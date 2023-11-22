const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
const corsOptions={
origin:"https://inotebook-oym3.onrender.com"
}
connectToMongo();
const app = express()
const port = process.env.PORT || 5000;
app.use(cors(corsOptions));
app.use(express.json())

// // // Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening at ${port}`)
})
