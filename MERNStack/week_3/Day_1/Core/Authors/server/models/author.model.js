const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    fullName:{
        type:String,
        trim:true,
        required:[true,"Name is required."],
        minlength:[3,"Name must be at least 3 characters."]

    }
})

module.exports.Author= mongoose.model("Author",AuthorSchema);