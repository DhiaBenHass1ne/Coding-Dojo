from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')    
def hello_world():
    return 'Hello World!'


@app.route('/play/<num>/<color>')
def play(num,color):
    return render_template("index.html", num=int(num), color=color)

if __name__=="__main__":      
    app.run(debug=True)   
