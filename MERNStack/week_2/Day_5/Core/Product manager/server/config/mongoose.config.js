const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@mydb.krtdpk7.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then(() => console.log("SERVER RUNNING ✔✔"))
    .catch(err => console.log("ERROR ❌❌", err));