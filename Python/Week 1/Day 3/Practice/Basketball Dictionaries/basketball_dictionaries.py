class Player:
    
    def __init__(self, player):
        self.name = player['name']
        self.age = player['age']
        self.position =player['position']
        self.team = player['team']
    
    @classmethod
    def get_team(cls,list_dic):
            new=[]
            for index in list_dic:
                new.append(Player(index))
            return new





players = [
    {
        "name": "Kevin Durant", 
        "age":34, 
        "position": "small forward", 
        "team": "Brooklyn Nets"
    },
    {
        "name": "Jason Tatum", 
        "age":24, 
        "position": "small forward", 
        "team": "Boston Celtics"
    },
    {
        "name": "Kyrie Irving", 
        "age":32,
        "position": "Point Guard", 
        "team": "Brooklyn Nets"
    },
    {
        "name": "Damian Lillard", 
        "age":33,
        "position": "Point Guard", 
        "team": "Portland Trailblazers"
    },
    {
        "name": "Joel Embiid", 
        "age":32,
        "position": "Power Foward", 
        "team": "Philidelphia 76ers"
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
]



kevin = {
        "name": "Kevin Durant", 
        "age":34, 
        "position": "small forward", 
        "team": "Brooklyn Nets"
}
jason = {
        "name": "Jason Tatum", 
        "age":24, 
        "position": "small forward", 
        "team": "Boston Celtics"
}
kyrie = {
        "name": "Kyrie Irving", 
        "age":32,
        "position": "Point Guard", 
        "team": "Brooklyn Nets"
}
    
# Create your Player instances here!
# player_jason = ???

player_jason=Player(jason)
player_kevin=Player(kevin)
player_kyrie=Player(kyrie)




# ... (class definition and large list of players here)
new_team = []
# # Write your for loop here to populate the new_team variable with Player objects.
for each_player in players:
    new_team.append(Player(each_player))

print(Player.get_team(players))