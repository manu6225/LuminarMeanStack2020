class Student{

    constructor(rollno,name,total,course){
        this.rollno=rollno;
        this.name=name;
        this.total=total;
        this.course=course;
    }
    getStud=()=>{
        console.log("Rollno: "+this.rollno);
        console.log("Name: " +this.name);
        console.log("Total mark: "+this.total);
        console.log("Course: " +this.course);
    }
}

var obj=new Student(101,"Alex",110,"BBA");
obj.getStud();
var obj1=new Student(102,"Ajay",140,"BCA");
obj1.getStud();
var obj2=new Student(103,"Arun",120,"BA");
obj2.getStud();
var obj3=new Student(104,"Vijay",138,"BCA");
obj3.getStud();

var stud=[];
stud.push(obj);
stud.push(obj1);
stud.push(obj2);
stud.push(obj3);

console.log("Scores > 135")
for(s of stud){                         //var ar=stud.filter(obj=>obj.total>135)
                                        // console.log(ar)
    if(s.total>135){
        console.log(s.name+" "+s.rollno);
    }
}

console.log("Students in BCA")
for(s of stud){
    if(s.course=="BCA"){
        console.log(s.name)
    }
}


var tot=0;
for(s of stud){
    if(s.course=="BCA"){              //var total=cfilter.map(obj=>obj.total).reduce((obj1,obj2)=>obj1+obj2)
        tot+=s.total;
    }
}
console.log("total mark of students in BCA: "+tot);


var maxtotal=stud.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
console.log("maxtotal= "+maxtotal)


// var mintotal=stud.map(obj=>obj.total).reduce((obj1,obj2)=>obj1<obj2?obj1:obj2)
// console.log("mintotal= "+mintotal)

var topstud=stud.filter(obj=>obj.total==stud.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2))
for(stud of topstud){
    stud.getStud();
}