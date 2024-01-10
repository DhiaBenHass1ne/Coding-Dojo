const mongoose = require("mongoose");

const JokeSchema = mongoose.Schema({
    setup:{
        type:String,
        requires:[true,"A setup is required!"]
    },
    punchline:{
        type:String,
        requires:[true,"A setup is required!"]
    }
})

module.exports.Joke = mongoose.model("Joke", JokeSchema);