from flask import Flask,render_template,session,request,redirect
app= Flask(__name__)
app.secret_key="hello hello hello"



@app.route("/")
def display():
    if 'visits' not in session:
        session["visits"]=0
    else:
        session["visits"]+=1
    return render_template("index.html")

@app.route("/reset", methods=["POST"])
def reset():
    
    return redirect('/')
    
@app.route("/clear", methods=["POST"])
def clear():
    session.clear()
    return redirect("/")

if __name__ =="__main__":
    app.run(debug=True)