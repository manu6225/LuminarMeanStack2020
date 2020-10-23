class Employee{

    constructor(eid,ename,desig,sal){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.salary=sal;
    }
    getEmp=()=>{
        console.log(this.ename);
        console.log(this.desig);
        console.log(this.salary);
    }
}

var obj=new Employee(1001,"ajay","devops",25000);
obj.getEmp();

var obj1=new Employee(1002,"arun","tester",20000);
obj1.getEmp();

var obj2=new Employee(1003,"binu","analyst",30000);
obj2.getEmp();


var emp=[];
emp.push(obj);
emp.push(obj1);
emp.push(obj2);

//print all employees who have salary >22000
for(e of emp){
    if(e.salary>22000){
        console.log(e.ename+e.salary)
    }
}


//print all employees whose designation=devops

for(e of emp){
    if(e.desig=="devops"){
        console.log(e.ename+e.desig)
    }
}




//question
//---------
///student class rolno,name, total,course
//print all stud name and aid who have total>135
//prnt stud name who have course bca
//find sum of stud total course =bca