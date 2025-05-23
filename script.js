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
            break;
        
        case "2":
            console.log("2 was pressed");
            break;
        case "3":
            console.log("3 was pressed");
            break;
        case "4":
            console.log("4 was pressed");
            break;
        case "5":
            console.log("5 was pressed");
            break;
        case "6":
            console.log("6 was pressed");
            break;
        case "7":
            console.log("7 was pressed");
            break;
        case "8":
            console.log("8 was pressed");
            break;
        case "9":
            console.log("9 was pressed");
            break;
        case "0":
            console.log("0 was pressed");
            break;
        case "+":
            console.log("+ was pressed");
            break;
    }
})

sevenbtn.addEventListener("click", ()=>{
    console.log("7 was pressed");
})

eightbtn.addEventListener("click", ()=>{
    console.log("8 was pressed");
})

sixbtn.addEventListener("click", ()=>{
    console.log("6 was pressed");
})
ninebtn.addEventListener("click", ()=>{
    console.log("9 was pressed");
})
fivebtn.addEventListener("click", ()=>{
    console.log("5 was pressed");
})
fourbtn.addEventListener("click", ()=>{
    console.log("4 was pressed");
})
threebtn.addEventListener("click", ()=>{
    console.log("3 was pressed");
})
twobtn.addEventListener("click", ()=>{
    console.log("2 was pressed");
})
onebtn.addEventListener("click", ()=>{
    console.log("1 was pressed");
})
zerobtn.addEventListener("click", ()=>{
    console.log("0 was pressed");
})
plusbtn.addEventListener("click", ()=>{
    console.log("+ was pressed");
});
subtractbtn.addEventListener("click", ()=>{
    console.log("- was pressed");
})
multiplybtn.addEventListener("click", ()=>{
    console.log("* was pressed");
})
dividebtn.addEventListener("click", ()=>{
    console.log("/ was pressed");
})