var num=[1,2,3,4,5]//(3,4)

var sum=5;
for(num1 of num){
    for(num2 of num){

        if((num1+num2)==sum){
            console.log("pairs are ("+num1+","+num2+")");
        }
    }
}