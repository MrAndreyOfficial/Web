import { addDataToJson } from './data.js';

const todoNameInput = document.getElementById('todo-name');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => {
    const value = todoNameInput.value.trim();

    if (value == '') {
        alert('Enter todo');
        return;
    }

    addDataToJson('../../backend/actions/add.php', value)
    .then(() => location.href = '../index.php')
    .catch(console.error);
});
