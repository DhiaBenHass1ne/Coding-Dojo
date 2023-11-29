from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_app.models.user_model import User
from flask_app.models.recipe_model import Recipe


@app.route("/recipes")
def read_all_recipes():
    if "user_id" not in session:
        return redirect("/")
    recipes=Recipe.get_all_recipes()
    data = {"id": session["user_id"]}
    loggedin_user = User.get_user_by_id(data)
    return render_template("all_recipes.html",recipes=recipes,loggedin_user=loggedin_user)

@app.route("/recipes/new")
def render_new_recipe():
    if "user_id" not in session:
        return redirect("/")
    return render_template("create_recipe.html")

@app.route("/recipes/new/create", methods=["POST"])
def create_new_recipe():
    if "user_id" not in session:
        return redirect("/")
    if not Recipe.validate_recipe(request.form):
        return redirect("/recipes/new")
    data = {**request.form,
            "users_id":session["user_id"]}
    recipe_id=Recipe.create_recipe(data)
    return redirect("/recipes")


@app.route("/recipes/<int:id>")
def render_one_recipe(id):
    if "user_id" not in session:
        return redirect("/")
    data={"id":id}
    result=Recipe.get_recipe_by_id(data)
    creator=User.get_user_by_id({"id": result.user_id})
    data = {"id": session["user_id"]}
    loggedin_user = User.get_user_by_id(data)
    return render_template("one_recipe.html",recipe=result,creator=creator,loggedin_user=loggedin_user)


@app.route("/recipes/delete/<int:id>")
def delete_recipe(id):
    if "user_id" not in session:
        return redirect("/")
    data={"id":id}
    Recipe.delete_recipe(data)
    return redirect ("/recipes")

@app.route("/recipes/edit/<int:id>")
def edit_recipe_display(id):
    if "user_id" not in session:
        return redirect("/")
    data={"id":id}
    result=Recipe.get_recipe_by_id(data)
    return render_template("edit_recipe.html",recipe=result)

@app.route("/recipes/edit/<int:id>", methods=["POST"])
def edit_recipe(id):
    if "user_id" not in session:
        return redirect("/")
    if not Recipe.validate_recipe_edit(request.form):
        return redirect(f"/recipes/edit/{id}")
    data={**request.form, "id":id}
    result=Recipe.edit_recipe(data)
    return redirect("/recipes")
    




