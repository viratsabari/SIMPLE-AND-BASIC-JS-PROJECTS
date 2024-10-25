const icons=document.querySelectorAll('i');
const password=document.getElementById('password');
const button=document.querySelector('button');
const pwdstrength=document.querySelector('.pwdstrength')
let p=document.createElement('p');

icons.forEach(icon=>{
    icon.addEventListener('click',()=>{
        if(icon===icons[0]){
            icons[0].style.display="none"
            icons[1].style.display="inline"
           document.body.style.backgroundColor="white"
        }
         else if(icon===icons[1]){
            icons[1].style.display="none"
            icons[0].style.display="inline"

            document.body.style.backgroundColor="black"
}
})
})

icons.forEach(icon=>{
    icon.addEventListener('click',()=>{
        if(icon===icons[2])
        {
            password.type="text";
            icons[2].style.display="none";
            icons[3].style.display="inline";
        }
        else if(icon===icons[3]){
            password.type="password";
            icons[3].style.display="none";
            icons[2].style.display="inline"
        }
    })
})
    
let uppercsepatturn = /[A-Z]/;
let spicialcasepatturn = /[!@#$%^&*(),.?":{}|<>]/;
let numberpatturn = /[0-9]/;

password.addEventListener('input', (e) => {
    let validate = e.target.value;
    
    if (validate.length < 6) {
        p.textContent="Weak password. Must be at least 6 characters long."
       pwdstrength.appendChild(p)

    } else if (validate.length >= 6 && validate.length < 10) {
        if (uppercsepatturn.test(validate)) {
            if (spicialcasepatturn.test(validate)) {
                if (numberpatturn.test(validate)) {
                    p.textContent="Password is strong";
                    pwdstrength.appendChild(p);

                } else {
                    p.textContent="Add numbers to make it stronger"
                    pwdstrength.appendChild(p);a
                }
            } else {
                p.textContent="Add special characters to make it stronger"
                pwdstrength.appendChild(p);
            }
        } else {
            p.textContent="Add uppercase characters to make it stronger";
            pwdstrength.appendChild(p);
        }
    } else if (validate.length >= 10) {
        if (uppercsepatturn.test(validate) && spicialcasepatturn.test(validate) && numberpatturn.test(validate)) {
            p.textContent="Password is very strong."
            pwdstrength.appendChild(p);
        } else {
            p.textContent="Add uppercase, numbers, and special characters to make it very strong"
            pwdstrength.appendChild(p);
        }
    }
});

