class Bank{

    static getAccountDetails(){

        let data={ 
           
            test1:{username:"test1",password:"test1",acno:1002,balance:5000},
            test2:{username:"test2",password:"test2",acno:1003,balance:6000},
            test3:{username:"test3",password:"test3",acno:1004,balance:7000},
            test4:{username:"test4",password:"test4",acno:1004,balance:8000}
            

        }
        return data;
    }


   static login(){
            let usname=document.querySelector("#uname").value;//abc
            let pwd=document.querySelector("#pwd").value;
            //chk username is present inside data
            let data=Bank.getAccountDetails()
            if(usname in data){//abc in data
                let password=data[usname]["password"];
                if(pwd==password){
                    swal("login sucess!", "u provided valid data!", "success");
                    setTimeout(()=>window.location.href="userhome.html",5000)
                }
                else{
                    swal("login failed!", "u provided invalid message!", "error");
                    
      
                }
                
            }
            else{
                alert("inavlid user")
            }

    }

    static deposite(){
        let uname=document.querySelector("#uname").value;
        let amt=Number(document.querySelector("#amount").value);
        // let btag=document.querySelector("#bal");
        let data=Bank.getAccountDetails();
      
        if(uname in data){

            data[uname]["balance"]+=amt;
            let bal=data[uname]["balance"];
           btag.textContent="available balance:"+bal;
            
        }
        else{
            swal("invalid user")

        }

    }


    static withDraw(){

        let uname=document.querySelector("#uname1").value;
        let amt=Number(document.querySelector("#amount1").value);
        // let btag=document.querySelector("#bal");
        let data=Bank.getAccountDetails();

        if(uname in data){

            let avlbal=data[uname]["balance"]
            if(amt>avlbal){
                alert("insuficient balance")
            }
            else{
                data[uname]["balance"]-=amt;
             let bal=data[uname]["balance"];
           btag.textContent="available balance:"+bal;
            }

            
        }
        else{
            swal("invalid user")

        }
    }








}