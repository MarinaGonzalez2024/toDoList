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

        // Agregar la hora actual
        const currentTime = new Date();
        const timeText = `(${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()})`;
        p.textContent += ' ' + timeText;

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
    deleteBtn.className = "btn-delete rounded-full bg-red-500 hover:bg-red-600 text-white px-2 py-1 ";

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
