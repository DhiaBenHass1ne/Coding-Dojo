const {Author} = require("../models/author.model")

//********** GET ALL **********

module.exports.getAll=(req, res)=>{
    Author.find()
        .then(obj=>{res.json(obj);res.status(201)})
        .catch(err=>{res.status(400);console.log(res.json(err))})
}

//********** GET ONE ***********

module.exports.getOne=(req,res)=>{
    Author.findOne({_id:req.params.id})
        .then(obj=>res.json(obj))
        .catch(err=>{res.status(404);console.log(res.json(err))})

}

//********** UPDATE ************

module.exports.update=(req,res)=>{
    Author.updateOne({_id:req.params.id},req.body,{new:true, runValidators:true})
    .then (obj=>res.json(obj))
    .catch (err=>{res.status(400);console.log(res.json(err))})
}

//*********** DELETE ************

module.exports.delete=(req,res)=>{
    Author.deleteOne({_id:req.params.id})
        .then(obj=>res.json(obj))
        .catch(err=>{res.status(404);console.log(res.json(err))})
}

//*********** CREATE ***********

module.exports.create=(req,res)=>{
    Author.create(req.body)
        .then(obj=>{res.json(obj);res.status(201)})
        .catch(err=>{res.status(400);console.log(res.json(err))})
}