from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.user_model import User

#Display route - Just to render the page
@app.route("/users/new")
def newUser():
    return render_template("create.html")

#Display route - to process the form

@app.route("/users")
def read_all():
    ele=User.read_all()
    return render_template("view.html",users=ele)

@app.route("/create", methods=["POST"])
def create():
    User.create(request.form)
    return redirect("/users");

