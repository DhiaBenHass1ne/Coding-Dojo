class BankAccount:

    bb=[]
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate=0.01, balance=0): 
        # your code here! (remember, instance attributes go here)
        self.int_rate=int_rate
        self.balance=balance
        BankAccount.bb.append(self)
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        # your code here
        self.balance+=amount
        return self
    
    def withdraw(self, amount):
        # your code here
        if self.balance < amount:
            print("Insufficient funds: Charging a $5 fee")
            self.balance-=5
        else:
            self.balance-=amount
        return self

    def display_account_info(self):
        # your code here
        print(f"Blance: ${self.balance}")

    def yield_interest(self):
        if self.balance > 0:
            self.balance+= self.balance*self.int_rate
        return self
    
    @classmethod
    def bonus(cls):
        for i in cls.bb:
            print ( i.__dict__ )

account1=BankAccount(0.1,50)
account2=BankAccount(0.5,250)

account1.deposit(100).deposit(100).deposit(100).withdraw(50).yield_interest().display_account_info()
account2.deposit(150).deposit(150).withdraw(5).withdraw(10).withdraw(15).withdraw(20).yield_interest().display_account_info()
BankAccount.bonus()