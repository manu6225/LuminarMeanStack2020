var ar=[10,4,2,9,5]

for(var i=0;i<ar.length;i++){

    for(var j=i+1;j<ar.length;j++){

        if(ar[i]>ar[j]){

            var temp=ar[i];
            ar[i]=ar[j];
            ar[j]=temp;
        }
    }
}
console.log(ar);





//fuctional programming new model

// var arr=arr.sort((i,j)=>i-j)
// console.log(arr);