var arr=[-1,0,1,3]

var cnt=1;

for(item of arr){
    if(arr.includes(cnt)){

    }
    else{
        console.log(cnt+" is missing value")
        break;
    }
    cnt+=1;
}




//var ar=[2,4,5]

//__________________________________________________________________________

// forEach
//--------

var arr=[1,2,3,4,5,6,7,8,9,10]

arr.forEach(num=>console.log(num))