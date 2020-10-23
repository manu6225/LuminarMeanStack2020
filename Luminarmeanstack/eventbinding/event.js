var one=document.querySelector("#one") 

one.addEventListener("click",()=>{
    one.textContent="clicked";
    one.style.color="red";
})
// one.addEventListener("click",clk);

var two=document.querySelector("#two")
two.addEventListener("dblclick",()=>{
    two.textContent="doubleclicked";
    two.style.color="green";
})

var three=document.querySelector("#three")

three.addEventListener("mouseover",()=>{
    three.style.color="yellow";
    three.textContent="mouse over me";
})

var three=document.querySelector("#three")

three.addEventListener("mouseout",()=>{
    three.style.color="black";
    three.textContent="mouse not over me";
})