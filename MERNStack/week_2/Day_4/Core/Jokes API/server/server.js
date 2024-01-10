const express = require('express');
require('dotenv').config();
const cors = require("cors");


const app = express();
const port = process.env.port;

app.use(express.json(), express.urlencoded({extended:true}),cors());

require("./config/mongoose.config")

require ("./routes/joke.routes")(app);

app.listen(port,()=> console.log('LISTENING ON PORT: '+port))