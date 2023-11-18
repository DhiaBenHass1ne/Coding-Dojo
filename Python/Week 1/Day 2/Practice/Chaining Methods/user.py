class User:
    def __init__(self,first_name,last_name,email,age):
        self.firstName=first_name
        self.lastName=last_name
        self.email=email
        self.age=age
        self.is_reward_member=False
        self.gold_card_points=0

    def display_info(self):
        for v in self.__dict__.items():
            print(':'.join([str(i) for i in v]))
        return self
    
    def enroll(self):
        if self.is_reward_member:
            print("User already a member")
            self.is_reward_member=False
        else:
            self.is_reward_member=True
            self.gold_card_points=200
        return self

    def spend_points(self,amount):
        if self.gold_card_points<amount:
            print("Not enough cash! Stranger.")
        else:
            self.gold_card_points-=amount
        return self

dhia=User('dhia','ben hassine',"dhfg@dgdg.sf",25)

dhia.display_info()

dhia.enroll()



user1=User("slimen","labyedh","slouma@gmail.com",53)
user2=User("chedli","tamar","chdoula@gmail.com",56)

user1.display_info().enroll().spend_points(50).display_info()
user2.enroll().spend_points(80).display_info()
