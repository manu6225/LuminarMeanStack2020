
// f1=(num1,num2)=> num1+num2;
// console.log(f1(10,20));

// // f2=(num1,num2)=> num1-num2;


// // f3=(num1,num2)=> num1*num2;


// // f4=(num1,num2)=> num1/num2;


// // f1=(num1,num2)=> num1+num2;


// f5=(num1)=>num1**3;
// console.log(f5(3));


var ar=[1,2,3,4,5]
// var sq=[]
// for(item of ar){

//     sq.push((item**2))

// }
// console.log(sq);

var squares=ar.map(num=>num**2);
console.log(squares);               // map 


var evens=ar.filter(num=>num%2==0)
console.log(evens);                 // filter
