// main.js
const addBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const empty = document.getElementById('empty');

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const input = document.querySelector('input');
    const text = input.value;
    if (text !== '') {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        taskList.appendChild(li);

        input.value = '';
        empty.style.display = 'none';
    }
});

function addDeleteBtn() {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        taskList.removeChild(item);

        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            empty.style.display = 'block';
        }
    });
    return deleteBtn;
}
