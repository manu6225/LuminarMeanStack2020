var employee={eid:1001,ename:"rahul",desg:"devops"}

console.log(employee)

console.log(employee.ename)

console.log("salary" in employee)       //for search a key


employee["salary"]=25000;
console.log(employee)


employee["salary"]+=5000;
console.log(employee)

for(key in employee){
    console.log(key+","+employee[key])
}
