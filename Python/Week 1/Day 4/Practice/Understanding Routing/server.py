from flask import Flask 

app = Flask(__name__)


@app.route('/')        
def hello_world():
    return 'Hello World!'  

@app.route('/dojo')        
def dojo():
    return 'Dojo'

@app.route('/say/<name>')     
def hello_name(name):
    
    return f'Hi {name}!'

@app.route('/repeat/<num>/<msg>')        
def repeat(num, msg):
    return f"{msg}\n"*int(num)


@app.route('/<path:invalid_path>')
def invalid_path(invalid_path):
    return "Sorry! No response, Try again"

if __name__=="__main__":
    app.run(debug=True)

