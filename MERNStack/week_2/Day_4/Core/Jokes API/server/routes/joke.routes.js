const JokeController = require("../controllers/joke.controller")

module.exports=(app)=>{
    app.get("/api/jokes",JokeController.getAll)
    app.get("/api/jokes/:id",JokeController.getOne)
    app.post("/api/jokes",JokeController.create)
    app.put("/api/jokes/:id",JokeController.update)
    app.delete("/api/jokes/:id",JokeController.delete)
};