const right=document.getElementById('right')
const left=document.getElementById('left')
const img=document.querySelector('img')
let images=['https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600',
             'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=600',
             'https://images.pexels.com/photos/1435075/pexels-photo-1435075.jpeg?auto=compress&cs=tinysrgb&w=600',
             'https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&w=600',
             'https://images.pexels.com/photos/2734421/pexels-photo-2734421.jpeg?auto=compress&cs=tinysrgb&w=600']

let index=0;
right.addEventListener('click',()=>{
    if(index==4){
        index=0;
        img.src=images[index++];
    }
    else{
    img.src=images[index++];
    }
})
left.addEventListener('click',()=>{
    if(index==0){
        index=4;
        img.src=images[index--];
    }
    else{
    img.src=images[index--];
    }
})