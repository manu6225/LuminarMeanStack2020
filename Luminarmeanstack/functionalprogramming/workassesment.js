class Employee{

    constructor(eid,ename,desig,join,resign){
        this.eid=eid;
        this.name=ename;
        this.desig=desig;
        this.join=join;
        this.resign=resign;
        
    }
}

let obj1=new Employee(100,"ajay","developer",1981,2003);
let obj2=new Employee(101,"vijay","developer",1992,2008);
let obj3=new Employee(102,"bijoy","design",1999,2007);
let obj4=new Employee(103,"john","design",1989,2010);
let obj5=new Employee(104,"danie","design",2009,2014);
let obj6=new Employee(105,"lari","design",1987,2010);
let emp=[]
emp.push(obj1);
emp.push(obj2);
emp.push(obj3);
emp.push(obj4);
emp.push(obj5);
emp.push(obj6);

// q1: print all employee name and designations only

var ar1=emp.map(obj=>obj.name+":"+obj.desig)
console.log("all employee name and designation")
console.log(ar1);

//q2: print all employee whose desig=developer

var ar2=emp.filter(obj=>obj.desig=="developer")
console.log("all employees whose designation = developer")
console.log(ar2);

// q3 : print all employee details who are working in 80's

var ar3=emp.filter(obj=>obj.join<1990&&obj.resign>1980);
console.log("all employee details who are working in 80's")
console.log(ar3);

// q4 : print all employees those have experience > 9yrs

var ar4=emp.filter(obj=>obj.resign-obj.join>=9)
console.log("all employee details those have experience > 9yrs")
console.log(ar4);

// q5: sort all employees based on their joining years

var ar5=emp.sort((obj1,obj2)=>obj1.join-obj2.join)
console.log("sorted all employees based on their joining years")
console.log(ar5);
