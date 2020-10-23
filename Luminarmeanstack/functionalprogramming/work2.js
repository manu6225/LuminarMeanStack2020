// var str="HHHPPSDAAA";
// var inp=[];
// for(data of str){
//     if(data in inp){
//         inp[data]+=1;
//     }
//     else{
//         inp[data]=1;
//     }
// }
// console.log(inp);

//---------------------------------------------------------------------------------------------


var ar=[1,2,3,4,6,7]
 var op=ar.map(num=>num>5?num+1:num-1)            // ar=[1,2,3,4,5,6,7]   (include 5)
 console.log(op)                                 //op=ar.map(num=>num>5?num+1:num<5?num-1:num)

