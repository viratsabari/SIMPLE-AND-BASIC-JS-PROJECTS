let questions1=document.querySelectorAll('.questions1>p')
let questions2=document.querySelectorAll('.questions2>p')
let questions3=document.querySelectorAll('.questions3>p')
let questions4=document.querySelectorAll('.questions4>p')
let questions5=document.querySelectorAll('.questions5>p')
let q1=document.querySelector('.questions1')
let q2=document.querySelector('.questions2')
let q3=document.querySelector('.questions3')
let q4=document.querySelector('.questions4')
let q5=document.querySelector('.questions5')
let button=document.querySelectorAll('button');
let total=0;
const answers = [ "string","boolean","12","[object Object][object Object]","true"];
questions1.forEach(paragraph=>{
    paragraph.addEventListener('click',()=>{
      if(paragraph.textContent==answers[0]){
            paragraph.style.backgroundColor ='green';
            total++;
            button[0].style.display='inline';
            showToast('Correct!', 'You got the answer right!');
            button[0].addEventListener('click',()=>{
                q1.style.display='none';
                button[0].style.display='none';
                q2.style.display='inline';
            })
        }
        else{
            paragraph.style.backgroundColor ='red';

        }
    })
})
questions2.forEach(paragraph=>{
    paragraph.addEventListener('click',()=>{
      if(paragraph.textContent==answers[1]){
            paragraph.style.backgroundColor ='green';
            total++;
            button[1].style.display='inline';
            showToast('Correct!', 'You got the answer right!');
            button[1].addEventListener('click',()=>{
                q2.style.display='none';
                button[1].style.display='none';
                q3.style.display='inline';
            })
        }
        else{
            paragraph.style.backgroundColor ='red';

        }
    })
})
questions3.forEach(paragraph=>{
    paragraph.addEventListener('click',()=>{
      if(paragraph.textContent==answers[2]){
            paragraph.style.backgroundColor ='green';
            total++;
            button[2].style.display='inline';
            showToast('Correct!', 'You got the answer right!');
            button[2].addEventListener('click',()=>{
                q3.style.display='none';
                button[2].style.display='none';
                q4.style.display='inline';
            })
        }
        else{
            paragraph.style.backgroundColor ='red';

        }
    })
})
questions4.forEach(paragraph=>{
    paragraph.addEventListener('click',()=>{
      if(paragraph.textContent==answers[3]){
            paragraph.style.backgroundColor ='green';
            total++;
            showToast('Correct!', 'You got the answer right!');
            button[3].style.display='inline';
            button[3].addEventListener('click',()=>{
                q4.style.display='none';
                button[3].style.display='none';
                q5.style.display='inline';
            })
        }
        else{
            paragraph.style.backgroundColor ='red';

        }
    })
})
questions5.forEach(paragraph=>{
    paragraph.addEventListener('click',()=>{
      if(paragraph.textContent==answers[4]){
            paragraph.style.backgroundColor ='green';
            total++;
            showToast('Correct!', 'You got the answer right!');
            button[4].style.display='inline';
            button[4].addEventListener('click',()=>{
                Swal.fire({
                    toast: true,
                    position: 'center',
                    icon: 'success',
                    title: 'YOUR TOTAL MARKS IS',
                    width:800,
                    
                    size:50,
                    text: total,
                    showConfirmButton: false,
                    timer: 10000,
                    background: '#a5dc86', 
                    color: '#333', 
                    iconColor: '#fff', 
                });
               
            })
        }
        else{
            paragraph.style.backgroundColor ='red';

        }
    })
})

total=0;
function showToast(title, text, icon = 'success') {
    Swal.fire({
        position:'top-end', 
        
        icon: icon,          
        title: title,        
        text: text,          
        showConfirmButton: false, 
        timer: 2000,         
        toast: true          
    });
}