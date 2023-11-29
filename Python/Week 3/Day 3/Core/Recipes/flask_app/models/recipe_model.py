from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash



class Recipe:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.description = data["description"]
        self.instructions = data["instructions"]
        self.date_cooked = data["date_cooked"]
        self.under = data["under"]
        self.user_id=data["users_id"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]


    @classmethod
    def get_all_recipes(cls):
        query = """
                    SELECT recipes.*, users.first_name FROM recipes
                    JOIN users ON users_id = users.id;
                """
        result = connectToMySQL(DATABASE).query_db(query)

        return result

    @classmethod
    def create_recipe(cls, data):
        query = """
                    INSERT INTO recipes (name, description, instructions, date_cooked,under,users_id)
                    VALUES (%(name)s,%(description)s,%(instructions)s,%(date_cooked)s,%(under)s,%(users_id)s);
                """

        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_recipe_by_id(cls, data):
        query = """
                     SELECT * FROM recipes
                    WHERE recipes.id = %(id)s;
                """
        result = connectToMySQL(DATABASE).query_db(query, data)

        if len(result) < 1:
            return False

        return cls(result[0])
    
    @classmethod
    def edit_recipe(cls,data):
        query="""
                UPDATE recipes
                SET name=%(name)s,description=%(description)s,instructions=%(instructions)s,date_cooked=%(date_cooked)s,under=%(under)s
                WHERE id=%(id)s;
                """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def delete_recipe(cls,data):
        query="""
                DELETE FROM recipes
                WHERE id=%(id)s;
                """
        return connectToMySQL(DATABASE).query_db(query,data)


    @staticmethod
    def validate_recipe(data):
        is_valid = True

        if len(data["name"]) < 1:
            is_valid = False
            flash("Name Required !", "rec")
        if len(data["description"]) < 1:
            is_valid = False
            flash("Description Required !", "rec")
        if len(data["instructions"]) < 1:
            flash("Instructions Required !","rec")
            is_valid = False
        
        return is_valid
    
    @staticmethod
    def validate_recipe_edit(data):
        is_valid = True

        if len(data["name"]) < 1:
            is_valid = False
            flash("Name Required !", "rec_edit")
        if len(data["description"]) < 1:
            is_valid = False
            flash("Description Required !", "rec_edit")
        if len(data["instructions"]) < 1:
            flash("Instructions Required !","rec_edit")
            is_valid = False
        
        return is_valid