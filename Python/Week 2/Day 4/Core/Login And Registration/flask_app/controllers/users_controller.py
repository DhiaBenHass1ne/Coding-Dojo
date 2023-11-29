from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_app.models.user_model import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)




@app.route("/")
def index():
    return render_template("index.html")


@app.route("/users/register", methods=["POST"])
def user_register():
    if not User.validate(request.form):
        return redirect("/")
    pw_hashed = bcrypt.generate_password_hash(request.form["password"])
    data = {**request.form, "password": pw_hashed}
    user_id = User.create(data)
    session["user_id"] = user_id
    return redirect("/dashboard")


@app.route("/users/login", methods=["POST"])
def user_login():
    data = {"email": request.form["email"]}
    user_in_db = User.get_by_email(data)
    if not user_in_db:
        flash("invalid credentials", "log")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password, request.form["password"]):
        flash("invalid credentials", "log")
        return redirect("/")

    print(f"===> id = {user_in_db.id}")
    session["user_id"] = user_in_db.id
    return redirect("/dashboard")


@app.route("/dashboard")
def dash():
    if "user_id" not in session:
        return redirect("/")
    data = {"id": session["user_id"]}
    loggedin_user = User.get_user_by_id(data)
    session["user_email"] = "a@a.com"
    return render_template("dashboard.html", loggedin_user=loggedin_user)


@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")
