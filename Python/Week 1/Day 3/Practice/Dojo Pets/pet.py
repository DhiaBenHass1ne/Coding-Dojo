class Pet:

    a=10
# implement __init__( name , type , tricks ):

    def __init__(self,name,type,tricks,health,energy):
        self.name=name
        self.type=type
        self.tricks=tricks
        self.health=health
        self.energy=energy

# implement the following methods:

    def play(self): # play() - increases the pet's health by 5
        self.health+=5
        print(f"{self.name}'s health increased +5")

    def sleep(self): # sleep() - increases the pets energy by 25
        self.energy+=25
        print(f"{self.name}'s energy increased +25")

    def eat(self): # eat() - increases the pet's energy by 5 & health by 10
        self.health+=10
        self.energy+=5
        print(f"{self.name}'s health increased +10 and energy increased +5")

    def noise(self): # noise() - prints out the pet's sound
        print(f'*{self.name} noises*')