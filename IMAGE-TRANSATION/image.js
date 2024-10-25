const imglist = document.querySelector('.imglist');
const ogimg = document.querySelector('.ogimg');
const span = document.getElementById('span');
const leftspace = imglist.offsetLeft;

imglist.addEventListener('mousemove', (e) => {
    let boxWidth = e.pageX - leftspace;

    
    boxWidth = Math.max(0, Math.min(boxWidth, imglist.offsetWidth));

    ogimg.style.width = boxWidth + "px";
    span.style.left = boxWidth + "px";
});

imglist.addEventListener('mouseenter', () => {
    ogimg.style.transition = "width 0.5s ease-in-out";
    span.style.transition = "left 0.5s ease";
});

imglist.addEventListener('mouseleave', () => {
    ogimg.style.transition = "width 0.5s ease-in-out";
    span.style.transition = "left 0.5s ease";
});



