(function(){const n=document.createElement("link").relList;if(!(n&&n.supports&&n.supports("modulepreload"))){for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const e of a.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(l){if(l.ep)return;l.ep=!0;const a=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}(l);fetch(l.href,a)}})();const display$1=document.getElementById("display"),clearBtn=document.querySelector(".clear-btn"),changeBtn=document.querySelector(".change-btn"),porcentageBtn=document.querySelector(".porcentage-btn"),divisorBtn=document.querySelector(".divisor-btn"),multipleBtn=document.querySelector(".multiple-btn"),substractionBtn=document.querySelector(".substraction-btn"),additionBtn=document.querySelector(".addition-btn"),equalBtn=document.querySelector(".equal-btn"),commaBtn=document.querySelector(".comma-btn");function comprobation(){let n=display.value,t=n[n.length-1];return t!=="-"&&t!=="*"&&t!=="+"&&t!=="/"}let commaBand=!1;clearBtn.addEventListener("click",()=>{display$1.value="",commaBand=!1}),changeBtn.addEventListener("click",()=>{let content=display$1.value,size=content.length,lastElement=content[size-1];if(content==="")display$1.value="-0";else if(comprobation()&&lastElement!=="."){let number=eval(content);number*=-1;let wordStr=number.toString();display$1.value=wordStr}}),porcentageBtn.addEventListener("click",()=>{let content=display$1.value,size=content.length,lastElement=content[size-1];if(comprobation()&&lastElement!=="."&&content!==""&&content!=="0"){let number=eval(content);display$1.value=number/100}}),divisorBtn.addEventListener("click",()=>{comprobation()&&display$1.value!=""&&(display$1.value+="/",commaBand=!1)}),multipleBtn.addEventListener("click",()=>{comprobation()&&display$1.value!=""&&(display$1.value+="*",commaBand=!1)}),substractionBtn.addEventListener("click",()=>{comprobation()&&(display$1.value+="-",commaBand=!1)}),additionBtn.addEventListener("click",()=>{comprobation()&&display$1.value!=""&&(display$1.value+="+",commaBand=!1)}),equalBtn.addEventListener("click",()=>{display$1.value=eval(display$1.value)}),commaBtn.addEventListener("click",()=>{let n=display$1.value.length,t=display$1.value[n-1];comprobation()&&t!=="."&&!commaBand&&(display$1.value===""&&(display$1.value+="0"),display$1.value+=".",commaBand=!0)});