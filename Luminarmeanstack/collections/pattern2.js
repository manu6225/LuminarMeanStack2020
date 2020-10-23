var ar=[5,3,2]
var total=0;
for(item of ar){
    total+=item;
}

var op=[]

for(item of ar){

    var elem=total-item;
    op.push(elem)

}
console.log(op);