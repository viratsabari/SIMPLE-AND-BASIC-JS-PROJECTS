let input=document.querySelector('input');
let button=document.querySelector('button');
input.max=new Date().toISOString().split('T')[0];

button.addEventListener('click',()=>{
    let birth=new Date(input.value);
    let brithyear=birth.getFullYear();
    let birthmonth=birth.getMonth()+1;
    let birthdate=birth.getDate();

    let current=new Date();
    let currentyear=current.getFullYear();
    let currentmonth=current.getMonth()+1;
    let currentdate=current.getDate();

    let dyear,dmouth,dday;
    dyear=currentyear-brithyear;
    
   if(currentmonth >= birthmonth){
    dmouth=currentmonth-birthmonth;
   }
   else{
    dyear--;
    dmouth=12+currentmonth-birthmonth
   }

   if(currentdate >= birthdate){
    dday=currentdate-birthdate;
   }
   else{
    dmouth--;
    dday=getmonthyear(brithyear,birthmonth)+currentmonth-currentyear
   }

   if(dmouth<0){
    dmouth=11;
     dyear--;
   }
   Swal.fire({
    title: "YOUR AGE IS",
    text: `${dyear} years ${dmouth} months ${dday}days`,
    icon: "success"
  });

   input.value="";
   

});

function getmonthyear(year,month){
    return new Date(year,month,0).getDate();
}
