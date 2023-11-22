from flask import Flask, render_template, redirect, request, session
import random
app = Flask(__name__)
app.secret_key= "It's a secret"



@app.route("/")
def default():
    session["NUMBER"]=random.randint(1,100)
    session["result"]="Pending"
    session["tries"]=0
    return redirect("/play")

@app.route("/play")
def play():
    return render_template("index.html")

@app.route("/check", methods=["POST"])
def check():


    if int(request.form['guess']) < session["NUMBER"]:
        session["result"]="Too Low"
        session["tries"]+=1
    elif int(request.form['guess']) > session["NUMBER"]:
        session["result"]="Too High"
        session["tries"]+=1
    elif int(request.form['guess']) == session["NUMBER"]:
        session["result"]="You Won!"
    return redirect("/play")
    





if __name__ == "__main__":
    app.run(debug=True)
