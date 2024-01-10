const {Joke} = require("../models/joke.model")


module.exports.getAll=(req, res)=>{
    Joke.find()
        .then(obj=>{res.json(obj);res.status(201)})
        .catch(err=>{res.status(400);console.log(res.json(err))})
}


module.exports.getOne=(req,res)=>{
    Joke.findOne({_id:req.params.id})
        .then(obj=>res.json(obj))
        .catch(err=>{res.status(404);console.log(res.json(err))})

}


module.exports.update=(req,res)=>{
    Joke.updateOne({_id:req.params.id},req.body,{new:true, runValidators:true})
    .then (obj=>res.json(obj))
    .catch (err=>{res.status(400);console.log(res.json(err))})
}


module.exports.delete=(req,res)=>{
    Joke.deleteOne({_id:req.params.id})
        .then(obj=>res.json(obj))
        .catch(err=>{res.status(404);console.log(res.json(err))})
}


module.exports.create=(req,res)=>{
    Joke.create(req.body)
        .then(obj=>{res.json(obj);res.status(201)})
        .catch(err=>{res.status(400);console.log(res.json(err))})
}