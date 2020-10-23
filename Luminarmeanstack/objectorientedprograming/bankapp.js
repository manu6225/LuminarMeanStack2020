class Bank{


    //static bankname="sbi";


    createAccount(pname,acno,balance){

        this.person_name=pname;
        this.accno=acno;
        this.balance=balance;
       // this.bank_name=bname;

    }
    deposite(amount){
        this.balance+=amount;
        console.log("your"+this.bank_name+"account credited with"+amount+"avl balance"+this.balance);

    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("insufficient balance");

        }
        else{
            this.balance-=amount;
            console.log("your account is debited with"+amount+"aval balance"+this.balance);

        }
    }
    balanceEnq(){
        console.log("your current account balance is "+this.balance);
    }

}

var obj=new Bank();
obj.createAccount("ajay",1001,12000,"SBI")

//obj.withdraw(25000)
obj.balanceEnq();
