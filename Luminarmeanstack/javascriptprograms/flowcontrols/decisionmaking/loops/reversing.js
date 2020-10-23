var num=123;
var rev=0,dig;

while(num>0){
    dig=num%10;
    num=Math.floor(num/10);
    rev=(rev*10)+dig;

}
console.log(rev);
