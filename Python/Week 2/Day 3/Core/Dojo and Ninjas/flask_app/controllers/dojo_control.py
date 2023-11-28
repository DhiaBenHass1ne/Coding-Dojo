from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.dojo_model import Dojo

@app.route("/")
def home():
    return redirect("/dojos")


@app.route("/dojos")
def dojos():
    dojos=Dojo.read_all_dojos()
    return render_template("all_dojos.html",dojos=dojos)


@app.route("/dojos/insert", methods=["POST"])
def dojos_insert():
    data={**request.form}
    Dojo.create_dojo(data)
    return redirect("/")

@app.route("/dojos/<int:id>")
def dojos_ninjas(id):
    ninjas=Dojo.get_ninjas_by_dojo({"id":id})
    return render_template("all_ninjas.html",ninjas=ninjas)
    