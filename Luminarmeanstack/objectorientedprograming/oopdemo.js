//class collection of objects,designpattern,blueprint,template..
// object  realworld entity
//references


class Person{

    setPerson(ag,nam){
        this.age=ag;
        this.name=nam;
    }

    getPerson(){

        console.log("name="+this.name);
        console.log("age="+this.age);
    }

}    

var obj=new Person();
obj.setPerson(25,"ajay");
obj.getPerson()

var obj1=new Person();
obj1.setPerson(26,'vijay');
obj1.getperson()
