const display=document.querySelector(".display");
const clear=document.querySelector(".clear");


const nums=document.querySelectorAll(".num");
const operations=document.querySelectorAll(".operator");

let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");

const equal=document.querySelector(".equals")

equal.addEventListener("click",function(){
    if(currentNum!="" && previousNum!=""){
        calculate();
    }
})

//testi
//nums.forEach((num)=>{
    //num.addEventListener("click",(e)=>{
    //    handleNumber(e.target.textContent)
  //  })
//})


nums.forEach((num)=>{
    num.addEventListener("click",(ev)=>{

        
    handleNumber(ev.target.textContent)
    })})
 


operations.forEach((btn)=>{
        btn.addEventListener("click",(ev)=>{
            handleOperator(ev.target.textContent);
        })
    })
    
function handleNumber(number){
    if(currentNum.length<=11){
currentNum+=number;
currentDisplayNumber.textContent=currentNum;}
}



function handleOperator(op){
    operator=op;
 
    previousNum=currentNum;
    if(previousNum!=""){
    previousDisplayNumber.textContent=previousNum+' ' +operator;
    currentNum='';
    currentDisplayNumber.textContent='';}
}

clear.addEventListener("click",function(){
        currentNum=""
        previousNum=""
        currentDisplayNumber.textContent="0"
        previousDisplayNumber.textContent=""
    })



    const backspace = document.querySelector(".backspace");

    backspace.addEventListener("click",clearLastOne)

    function clearLastOne(){
        
        //let lengthOfDisplayValue = currentNum.length;
        if(currentNum!=""){
            currentNum = currentNum.slice(0, - 1);}
            //nese e bojm me lengthot... ateher te slice(0,lengthof...-1)
        
    
    currentDisplayNumber.innerText = currentNum;
}







    const addition =(a,b)=>{
        return a+b
    }
    
    const subtraction =(a,b)=>{
    
        return a-b;
    }
    
    const multiply=(a,b)=>{
        return a*b;
    }
    
    const divide=(a,b)=>{
        return a/b;
    }





    function calculate(){
        previousNum=Number(previousNum);
        currentNum=Number(currentNum)
        
        if(operator === "+"){
            previousNum = addition(previousNum,currentNum)

        }
        else if(operator==="-"){
            previousNum=subtraction(previousNum,currentNum);
        }else if(operator==="*"){
            previousNum=multiply(previousNum,currentNum);
        }
        else if(operator==="/"){
            previousNum=divide(previousNum,currentNum)
        }
        previousDisplayNumber.textContent="";
        
        currentDisplayNumber.textContent=previousNum;
        currentNum=previousNum;

    }



    


    function AllToKeyboard(){



        
    }