class Student{

    static get collegeName(){
        var clgname="Luminar";
        return clgname;               //static uses for memory efficient use
    }

    static printcollegeName(){
        var clgname="Luminar";
       console.log(clgname)
    }

    setStudent(rn,nam,corse,tot){
        this.rollno=rn;
        this.name=nam;
        this.course=corse;
        this.total=tot;
    }

    getStudent(){

        console.log("rollno="+this.rollno);
        console.log("name="+this.name);
        console.log("course="+this.course);
        console.log("total="+this.total);
        Student.printcollegeName();  //static method name can be accessed by using class name
    }

}    


class MyClass extends Student{};
var obj=new MyClass();
obj.setStudent(25,"ajay","mean",400);
obj.getStudent()

console.log(MyClass.collegeName);




