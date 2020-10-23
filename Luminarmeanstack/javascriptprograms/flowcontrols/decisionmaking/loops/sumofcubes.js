var num=152,dig,cube,arm=0;

while(num>0){
    dig=num%10;
    cube=Math.pow(dig,3);
    arm+=cube;
    num=Math.floor(num/10);

}
console.log("sum of cubes="+arm);