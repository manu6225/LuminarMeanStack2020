class Parent{

    m1(){

    }
}
class Child extends Parents{

    m2(){
        
    }
}
class SubChild extends Child{

    m3(){

    }
}
var sb=new SubChild();
sb.m3();
sb.m2();
sb.m1();
