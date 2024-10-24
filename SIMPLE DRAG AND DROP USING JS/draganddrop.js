let lists = document.querySelectorAll('.list');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

lists.forEach(list => {
    list.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.target.classList.add('dragging');
    });
});


[left, right].forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    container.addEventListener('drop', (e) => {
        e.preventDefault();
        let draggingElement = document.querySelector('.dragging');
        container.appendChild(draggingElement);
        draggingElement.classList.remove('dragging');
        draggingElement.classList.add('dropped'); 
        setTimeout(() => {
            draggingElement.classList.remove('dropped');
        }, 1000);
    });
});
