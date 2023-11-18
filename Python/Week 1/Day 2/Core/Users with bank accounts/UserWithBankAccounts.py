class BankAccount:

    bb=[]
    def __init__(self, int_rate=0.01, balance=0): 
        self.int_rate=int_rate
        self.balance=balance
        BankAccount.bb.append(self)
    def deposit(self, amount):
        self.balance+=amount
        return self
    
    def withdraw(self, amount):
        if self.balance < amount:
            print("Insufficient funds: Charging a $5 fee")
            self.balance-=5
        else:
            self.balance-=amount
        return self

    def display_account_info(self):
        print(f"Blance: ${self.balance}")

    def yield_interest(self):
        if self.balance > 0:
            self.balance+= self.balance*self.int_rate
        return self
    
    @classmethod
    def bonus(cls):
        for i in cls.bb:
            print ( i.__dict__ )

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.checking = BankAccount(int_rate=0.02, balance=0)
        self.saving = BankAccount(int_rate=0.02, balance=0)
        
    
    
    def make_deposit(self, amount,type):
        if type.lower()=="checking":
            self.checking.deposit(amount)
        elif type.lower()=="saving":
            self.saving.deposit(amount)
        else:
            print("choose a valid account")
        return self
    
    def make_withdrawal(self, amount,type):
        if type.lower()=="checking":
            self.checking.withdraw(amount)
        elif type.lower()=="saving":
            self.saving.withdraw(amount)
        else:
            print("choose a valid account")
        return self
    
    def display_user_balance(self):
        print(f"{self.name}: Checking Balacne :${self.checking.balance}")
        print(f"{self.name}: Saving Balacne :${self.saving.balance}")
        return self

    def transfer_money(self, amount, other_user):

        if self.checking.balance >= amount:

            self.checking.withdraw(amount)
            other_user.checking.deposit(amount)
            print(f"transfer successful: ${amount} transferred from {self.name}'s account to {other_user.name}'s account.")

        else:
            print(f"insufficient funds in {self.name}'s account. transfer failed.")

        return self


    

user1=User("Dhia","dgdgdgdg")
user2=User("Putin","ffzfz")

user1.make_deposit(50,"checking").make_deposit(150,"saving").display_user_balance()
user2.make_deposit(750,"checking").make_deposit(2250,"saving").display_user_balance()


user2.transfer_money(500,user1)
