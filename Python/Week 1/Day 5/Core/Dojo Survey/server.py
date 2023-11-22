from flask import Flask, render_template, session, redirect, request

app = Flask(__name__)

app.secret_key="shhhhhhhhhh"


@app.route("/")
def form():
    return render_template("index.html")

@app.route("/process", methods=["POST"])
def process():
    session["fullname"]= request.form["fullname"]
    session["location"]= request.form["location"]
    session["lang"]= request.form["lang"]
    session["comment"]= request.form["comment"]
    return redirect("/result")

@app.route("/result")
def result():
    return render_template("data.html")

if __name__ == "__main__":
    app.run(debug=True)
