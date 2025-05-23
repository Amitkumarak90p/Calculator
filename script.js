const display = document.querySelector("#display-num");
const displayop = document.querySelector("#display-op");
const displayres = document.querySelector("#display-result");
const clearbtn = document.querySelector("#clear");
const sevenbtn = document.querySelector("#seven");
const  onebtn= document.querySelector("#one");
const  twobtn= document.querySelector("#two");
const  threebtn= document.querySelector("#three");
const  fourbtn= document.querySelector("#four");
const  fivebtn= document.querySelector("#five");
const  sixbtn= document.querySelector("#six");
const eightbtn= document.querySelector("#eight");
const ninebtn = document.querySelector("#nine");
const zerobtn = document.querySelector("#zero");
const plusbtn = document.querySelector("#plus");
const subtractbtn = document.querySelector("#subtract");
const multiplybtn = document.querySelector("#multiply");
const dividebtn = document.querySelector("#divide");
const equalsbtn = document.querySelector("#equalto");
let a = "";
let b = "";
let operator = "";
let secondnumber = false;
let result = 0;


document.addEventListener("keypress", (e)=>{
    switch(e.key){
        case "1":
            showonscreen(e.key);
            let a = 1;
            break;
        
        case "2":
            
            showonscreen(e.key);
            break;
        case "3":
            
            showonscreen(e.key);
            break;
        case "4":
            
            showonscreen(e.key);
            break;
        case "5":
            
            showonscreen(e.key);
            break;
        case "6":
            
            showonscreen(e.key);
            break;
        case "7":
            
            showonscreen(e.key);
            break;
        case "8":
            
            showonscreen(e.key);
            break;
        case "9":
            
            showonscreen(e.key);
            break;
        case "0":
            
            showonscreen(e.key);
            break;
        case "+":
            plus();
            break;
        case "-":
            minus();
            break;
        case "*":
            multiply();
            break;
        case "/":   
            divide();
            break;
        case "Enter":
            enter();
            break;
    }
})

sevenbtn.addEventListener("click", () =>showonscreen(7))
eightbtn.addEventListener("click",  () =>showonscreen(8))
sixbtn.addEventListener("click",  () => showonscreen(6))
ninebtn.addEventListener("click",  () => showonscreen(9))
fivebtn.addEventListener("click",  () => showonscreen(5))
fourbtn.addEventListener("click",  () => showonscreen(4))
threebtn.addEventListener("click",  () => showonscreen(3))
twobtn.addEventListener("click",  () => showonscreen(2))
onebtn.addEventListener("click",  () => showonscreen(1))
zerobtn.addEventListener("click",  () => showonscreen(0))
plusbtn.addEventListener("click", ()=>{
    plus();
})
subtractbtn.addEventListener("click",   () =>{
    minus();
})
multiplybtn.addEventListener("click",  () =>{
    multiply();
})
dividebtn.addEventListener("click",   () =>{
    divide();
})
clearbtn.addEventListener("click",()=>{
 display.textContent = "";
 displayop.textContent = "";
 displayres.textContent = "";
 operator = "";
    a = "";
    b = "";
    result = 0;
console.clear();
})

equalsbtn.addEventListener("click", () => {
    enter();
});


function results(){
  if (a !== "" && b !== "" && operator === "+") {
    result = addition(Number(a), Number(b));
  }
  if (a !== "" && b !== "" && operator === "-") {
    result = subtraction(Number(a), Number(b));
  }
  if (a !== "" && b !== "" && operator === "*") {
    result = multiplication(Number(a), Number(b));
  }
  if (a !== "" && b !== "" && operator === "/") {
    result = division(Number(a), Number(b));
  }
  console.log("result is "+result);
  return result;
}
function showoperator(value){
    displayop.textContent = value;
}

function showonscreen(value){
    if (secondnumber == false){
        a += value;
        console.log("i am a "+a)
    }
    else{
        b+= value;
        console.log("i am b "+b)
    }
    display.textContent += value;
}

function addition(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}

function plus(){
    showoperator("Addition");
    secondnumber = true;
    display.textContent = "";
    operator = "+";
    result += Number(a);
    a = result;
    b = "";
    displayres.textContent = result;
    console.log("result is "+result);
}
function minus(){
    showoperator("Subtraction")
    secondnumber = true;
    display.textContent = "";
    operator = "-";
    result += Number(a);
    a = result;
    b = "";
    displayres.textContent = result;
    console.log("result is "+result);
}
function multiply(){
    showoperator("Multiplication")
    secondnumber = true;
    display.textContent = "";
    operator = "*";
    result += Number(a);
    a = result;
    b = "";
    displayres.textContent = result;
    console.log("result is "+result);
}
function divide(){
    showoperator("Division")
    secondnumber = true;
    display.textContent = "";
    operator = "/";
    result += Number(a);
    a = result;
    b = "";
    displayres.textContent = result;
    console.log("result is "+result);
}

function enter(){
    results();
    displayres.textContent = result;
    a = "";
    b = "";
    operator = "";
    secondnumber = false;
    display.textContent = "";
}