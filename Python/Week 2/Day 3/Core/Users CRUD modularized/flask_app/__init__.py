from flask import Flask

app = Flask(__name__)
app.secret_key = "Classified!"

DATABASE = "users_schema"