let buttons=document.querySelectorAll('button');
let result=document.querySelectorAll('result');
let res=document.querySelector('#res');
let output="";
let answer=0;

buttons.forEach(button => {
    button.addEventListener('click',()=>{
      if(button.textContent=='AC'){
        output="";
        console.log(output);
        res.textContent=output;
        result.appendChild(res);
        return;
     }
     if(button.textContent=='<='){
      output=output.substring(0,output.length-1)
      res.textContent=output;
      result.appendChild(res);
      return;
     }
     if(button.textContent ==='='){
      try{
        output=eval(output).toString();
        res.textContent=output;
        result.appendChild(res);
      }
      catch(error)
      {
       setTimeout(()=>{output="";
          res.textContent=output;
          result.appendChild(res);
       },15000);

      }
      return;
     }
    
      output+=button.value;
      res.textContent=output;
      result.appendChild(res);
      
      
    })
});


output="";
result.appendChild(output);



