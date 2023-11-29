from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.user_model import User

#Display route - Just to render the page
@app.route("/users/new")
def newUser():
    return render_template("create.html")

#Display route - Just to render the page

@app.route("/users")
def read_all():
    user=User.read_all()
    return render_template("view.html",users=user)

#Action route - to process the form

@app.route("/create", methods=["POST"])
def create():
    User.create(request.form)
    return redirect("/users");

#Display route - Just to render the page


@app.route("/users/<int:id>")
def read_one(id):
    data={"id": id}
    user=User.read_one(data)
    return render_template("view_one_user.html",one_user=user)

#Display route - Just to render the page

@app.route("/users/<int:id>/edit")
def edit_render(id):
    data={"id": id}
    user=User.read_one(data)
    return render_template("edit_user.html", one_user=user)

#Action route - to process the form

@app.route("/users/<int:id>/update", methods=["POST"])
def edit_process(id):
    data={**request.form,
            "id": id}
    User.edit_one(data)
    return redirect("/users")

#Action route - to delete user

@app.route("/users/<int:id>/delete")
def delete(id):
    data={"id":id}
    User.delete(data)
    return redirect("/users")

