public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount(){
        accounts++;
    }

    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public double getCheckingBalance(){
        return this.checkingBalance;
    }

    public double getSavingsBalance(){
        return this.savingsBalance;
    }

    public double getTotalMoney(){
        return this.totalMoney;
    }

    public int getAccounts(){
    return this.accounts;
    }

    // METHODS

    // deposit
    // - users should be able to deposit money into their checking or savings account
    public String deposit(double money, String account){
        if (account == "SAVINGS"){
            this.savingsBalance+=money;
            this.totalMoney+=money;
            return "$"+money+" Successfully Added To Your Savings Account";

        }else if (account == "CHECKING"){
            this.checkingBalance+=money;
            this.totalMoney+=money;
            return "$"+money+" Successfully Added To Your Checking Account";
        }else {return "Please Choose A Valid Account.";}}
    // withdraw 
    // - users should be able to withdraw money from their checking or savings account
    public String withdraw(double money, String account){
        if (account == "SAVINGS"){
            if (money<this.savingsBalance){
            this.savingsBalance-=money;
            this.totalMoney-=money;
            return "$"+money+" Successfully Withdrawn From Your Savings Account";
            }else{return "Not Enough Money In Savings";}

        }else if (account == "CHECKING"){
            if (money<this.checkingBalance){
                this.checkingBalance-=money;
                this.totalMoney-=money;
                return "$"+money+" Successfully Withdrawn From Your Checking Account";}
            else{
                return "Not Enough Money In Checking";
                }
        }else {return "Please Choose A Valid Account.";}}

    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    // getBalance
    public double getBalance(){
        System.out.println("SAVINGS: $"+getSavingsBalance()+" CHECKING: $"+getCheckingBalance());
        double sum = getCheckingBalance() + getSavingsBalance();
        return sum;
    }
    // - display total balance for checking and savings of a particular bank account
}
