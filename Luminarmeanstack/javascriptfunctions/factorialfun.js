function factorial(num){ 

var i=1,fact=1;

while(i<=num){
     
    fact*=i;
    i++;
}
console.log("factorial="+fact);

}


factorial(5);
