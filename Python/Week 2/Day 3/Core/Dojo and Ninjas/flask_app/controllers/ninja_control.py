from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.ninja_model import Ninja
from flask_app.models.dojo_model import Dojo

@app.route("/ninjas")
def new_ninja():
    dojos=Dojo.read_all_dojos()
    return render_template("newNinja.html",dojos=dojos)

@app.route("/ninjas_create", methods=(["POST"]))
def create_ninja():
        print(request.form,"+++++++++++++++++++++++++++")
        data={**request.form}
        Ninja.create_ninja(data)    
        return redirect("/dojos")