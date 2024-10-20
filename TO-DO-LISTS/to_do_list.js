const items = document.querySelector('input');
const button = document.querySelector('button');
const lists = document.querySelector('#lists');
let todos = [];
window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(element => add(element));
}
button.addEventListener('click', () => {
    todos.push(items.value);
    localStorage.setItem('todos', JSON.stringify(todos));
    add(items.value);
    items.value = ""; 
});
function add(value) {
    let p = document.createElement('p');
    p.textContent = value;
    lists.appendChild(p);
    p.addEventListener('dblclick', () => {
        let index = todos.indexOf(value);
        todos.splice(index, 1);
        lists.removeChild(p);
        localStorage.setItem('todos', JSON.stringify(todos)); 
    });
}







