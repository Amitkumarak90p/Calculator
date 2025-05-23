const display = document.querySelector("#display");
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


document.addEventListener("keypress", (e)=>{
    switch(e.key){
        case "1":
            console.log("1 was pressed");
            showonscreen(e.key);
            break;
        
        case "2":
            console.log("2 was pressed");
            showonscreen(e.key);
            break;
        case "3":
            console.log("3 was pressed");
            showonscreen(e.key);
            break;
        case "4":
            console.log("4 was pressed");
            showonscreen(e.key);
            break;
        case "5":
            console.log("5 was pressed");
            showonscreen(e.key);
            break;
        case "6":
            console.log("6 was pressed");
            showonscreen(e.key);
            break;
        case "7":
            console.log("7 was pressed");
            showonscreen(e.key);
            break;
        case "8":
            console.log("8 was pressed");
            showonscreen(e.key);
            break;
        case "9":
            showonscreen(e.key);
            console.log("9 was pressed");
            showonscreen(e.key);
            break;
        case "0":
            console.log("0 was pressed");
            showonscreen(e.key);
            break;
        case "+":
            console.log("+ was pressed");
            showonscreen(e.key);
            break;
    }
})

sevenbtn.addEventListener("click", ()=>{
    console.log("7 was pressed");
    showonscreen("7");
})

eightbtn.addEventListener("click", ()=>{
    console.log("8 was pressed");
    showonscreen("8");
})

sixbtn.addEventListener("click", ()=>{
    console.log("6 was pressed");
    showonscreen("6");
})
ninebtn.addEventListener("click", ()=>{
    console.log("9 was pressed");
    showonscreen("9");
})
fivebtn.addEventListener("click", ()=>{
    console.log("5 was pressed");
    showonscreen("5");
})
fourbtn.addEventListener("click", ()=>{
    console.log("4 was pressed");
    showonscreen("4");
})
threebtn.addEventListener("click", ()=>{
    console.log("3 was pressed");
    showonscreen("3");
})
twobtn.addEventListener("click", ()=>{
    console.log("2 was pressed");
    showonscreen("2");
})
onebtn.addEventListener("click", ()=>{
    console.log("1 was pressed");
    showonscreen("1");
})
zerobtn.addEventListener("click", ()=>{
    console.log("0 was pressed");
    showonscreen("0");
})
plusbtn.addEventListener("click", ()=>{
    console.log("+ was pressed");
    showonscreen("+");
});
subtractbtn.addEventListener("click", ()=>{
    console.log("- was pressed");
    showonscreen("-");
})
multiplybtn.addEventListener("click", ()=>{
    console.log("* was pressed");
    showonscreen("*");
})
dividebtn.addEventListener("click", ()=>{
    console.log("/ was pressed");
    showonscreen("/");
})
clearbtn.addEventListener("click",()=>{
    display.textContent = "";
    console.clear();
})

function showonscreen(value){
    display.textContent += value;
}