const imgshow=document.getElementById('imgshow')
const qrimg=document.getElementById('qrimg')
const input=document.querySelector('input');
const button=document.querySelector('button');
qrimg.src = "https://via.placeholder.com/150?text=QR+Code";

button.addEventListener('click',()=>{
  
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'QR Code Generated!',
        text: 'Your QR code has been created successfully.',
        showConfirmButton: false,
        timer: 3000,
        background: '#a5dc86', 
        color: '#333', 
        iconColor: '#fff', 
    });

})