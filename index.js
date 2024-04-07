"use strict"
//function buttons
const display = document.getElementById("display")
const clearBtn = document.querySelector(".clear-btn");
const changeBtn = document.querySelector(".change-btn");
const porcentageBtn = document.querySelector(".porcentage-btn");

//operator buttons
const divisorBtn = document.querySelector(".divisor-btn"); 
const multipleBtn = document.querySelector(".multiple-btn"); 
const substractionBtn = document.querySelector(".substraction-btn"); 
const additionBtn = document.querySelector(".addition-btn"); 
const equalBtn = document.querySelector(".equal-btn");

clearBtn.addEventListener("click",()=>{
  display.value="";   
})





divisorBtn.addEventListener("click",()=>{
  if(comprobation()){
    display.value += "/";
  }
})

multipleBtn.addEventListener("click",()=>{
  if(comprobation()){
    display.value += "*";
  }
})

substractionBtn.addEventListener("click",()=>{
  if(comprobation()){
    display.value += "-";
  }
})

additionBtn.addEventListener("click",()=>{
  if(comprobation()){
    display.value += "+"; 
  }
})

equalBtn.addEventListener("click",()=>{
  display.value = eval(display.value); 
})
function comprobation(){
  let size = display.value.length;
  let lastElement = display.value[size-1]
  if(!((lastElement==="-") || (lastElement==="*") || (lastElement==="+") || (lastElement==="/"))) return true;
  return false;
}
