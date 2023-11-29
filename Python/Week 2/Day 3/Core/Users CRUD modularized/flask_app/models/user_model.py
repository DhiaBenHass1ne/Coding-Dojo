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

#read all users
    @classmethod
    def read_all (cls):
        query="""SELECT * FROM users;
            """
        result = connectToMySQL(DATABASE).query_db(query)
        list=[]
        for one_user in result:
            list.append(cls(one_user))
        return list
#read one user
    @classmethod
    def read_one(cls,data):
        query="""
                SELECT * FROM users WHERE id = %(id)s;
            """
        result = connectToMySQL(DATABASE).query_db(query,data)
        print(result)
        return cls(result[0])
#edit one user
    @classmethod
    def edit_one(cls,data):
        query="""
                UPDATE users
                SET first_name=%(first_name)s,last_name=%(last_name)s,email=%(email)s
                WHERE id=%(id)s;
                """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def delete(cls,data):
        query="""
                DELETE FROM users
                WHERE id=%(id)s;
                """
        return connectToMySQL(DATABASE).query_db(query,data)



