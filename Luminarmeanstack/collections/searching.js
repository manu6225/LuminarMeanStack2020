var arr=[1,2,3,4,5,6,7,8]

var element=5;

var flg=0;
for(data of arr){
    if(data==element){
        flg+=1;
        break;
       
    }
   
}
if(flg>0){ 
    console.log("element found");
}
else{
    console.log("not fopund");
}