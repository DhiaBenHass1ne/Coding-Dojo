from  flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class User:
    def __init__(self,data):
        self.id=data["id"]
        self.first_name=data["first_name"]
        self.last_name=data["last_name"]
        self.email=data["email"]
        self.created_at=data["created_at"]

# Create User
    @classmethod
    def create (cls, data):
        query="""insert into users (first_name, last_name, email) 
                values (%(first_name)s,%(last_name)s,%(email)s);
            """
        return connectToMySQL(DATABASE).query_db(query,data)


    @classmethod
    def read_all (cls):
        query="""SELECT * FROM users;
            """
        result = connectToMySQL(DATABASE).query_db(query)
        list=[]
        for one_user in result:
            list.append(cls(one_user))
        return list



