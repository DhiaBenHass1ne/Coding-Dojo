from flask_app import DATABASE
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.ninja_model import Ninja

class Dojo:
    def __init__(self,data):
        self.id=data["id"]
        self.name=data["name"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]
    


    @classmethod
    def create_dojo(cls,data):
        query="""
            INSERT INTO dojos(name)
            VALUES (%(name)s)
            """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def read_all_dojos(cls):
        query="""
                SELECT * FROM dojos
                """
        results=connectToMySQL(DATABASE).query_db(query)
        dojos=[]
        for row in results:
            dojos.append(cls(row))
        return dojos
    
    @classmethod
    def get_ninjas_by_dojo(cls,data):
        query="""
            SELECT * FROM dojos 
            JOIN ninjas ON dojos.id=dojo_id
            WHERE dojos.id = %(id)s; 
        """
        result=connectToMySQL(DATABASE).query_db(query,data)
        dojoninjas=[]

        for row in result:
            dojoninjas.append(row)
            print (row)
        return dojoninjas
        

        
    
