let body=document.querySelector("body");
let button=document.querySelector("button");
var arr=['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
var str="";
button.addEventListener('click',change)
function change()
{
 for(let i=0;i<6;i++){
 let alpha=arr[Math.round(Math.random()*16)];
 str += alpha;
}
 var value='#'+str;
 var store=document.querySelector("#store");
 store.innerHTML=`${value}`;
 body.style.backgroundColor=value;
 button.style.backgroundColor=value;
 button.style.border="4px solid black"
 str=""
}