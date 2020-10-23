class Maths{

    add(){
        console.log(10+20)               //polymorphism==>many forms
    }                                    // same method name but diff arguments
    add(num1){
        console.log(20+num1)
    }
    add(num1,num2){
        console.log(num1+num2)
    }
}
var cal=new Maths();
cal.add(10,20);