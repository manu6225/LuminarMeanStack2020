class Parent{

    bike(){
        console.log("i hve ktm")
    }

}

class Child extends Parent{
    bike(){
        console.log("i hve  hornet")
    }

}


var ch=new Child();
ch.bike();
