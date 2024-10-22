const times=document.querySelectorAll('input');
function digitalclock(){
const current_time=new Date();
times[0].value=current_time.getHours();
times[1].value=current_time.getMinutes();
times[2].value=current_time.getSeconds();
if(times[0].value>12){
    times[3].value='PM'
}
else{
    times[3].value='AM'
}


}

setInterval(digitalclock,1000)

