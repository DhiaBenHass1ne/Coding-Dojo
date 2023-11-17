from ninja import Ninja
from pet import Pet

class Cat(Pet):
    def __init__(self, name, type, tricks, health, energy, age, color):
        super().__init__(name, type, tricks, health, energy)
        self.age=age
        self.color=color


dog=Pet("Rex","dog",["Sit","Roll","Greet"],25,500)
dhia=Ninja("Dhia","Ben Hassine","Chocolate","Biscuits",dog)
cat=Cat("garfield","cat",["Evil","Hungry"],10,200)




dhia.bathe()
dhia.feed()
dhia.walk()