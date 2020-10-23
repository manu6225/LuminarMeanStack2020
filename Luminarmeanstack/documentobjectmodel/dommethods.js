


// var htags=document.getElementsByTagName("h1");
// for(tgs of htags){
//     tag.style.color="red";
// }
// var first=document.getElementsById("first");
// first.style.color="green";

// var cls=document.getElementsByClassName("two")
// for(cl of cls){
//     cl.style.color="blue";
// }

var lst=document.querySelectorAll("li")
for(let li of lst){
    lst.style.color="green";
}

var meth=document.querySelector("#mth")
meth.style.color="cyan";

var list=document.querySelectorAll(".lis")
for(let ls of list){
    ls.style.color="blue";
}

var hone=document.querySelector("#first")

var data=hone.textContent;
alert(data);

hone.textContent="helloworld";
