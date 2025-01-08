import { deleteDataFromJsonById, getAllDataFromJson } from './data.js';

const data = getAllDataFromJson('../backend/actions/get.php');

const tBody = document.getElementsByTagName('tbody')[0];

displayData();

function displayData() {
    data.then(json => {
        if (json) {
            for (const data of json) {
                const tr = document.createElement('tr');
    
                tr.setAttribute('id', data.id);
    
                const tdId = document.createElement('td');
                const tdName = document.createElement('td');
                const tdButton = document.createElement('td');

                const deleteButton = document.createElement('button');
    
                deleteButton.classList.add('button', 'is-danger', 'has-text-white');
                deleteButton.textContent = 'Delete';
    
                deleteButton.addEventListener('click', () => {
                    deleteDataFromJsonById('../backend/actions/delete.php', tr.getAttribute('id'));
                    location.reload();
                });
    
                tdId.textContent = data.id;
                tdId.classList.add('has-text-centered');

                tdName.textContent = data.name;
                tdName.classList.add('has-text-centered');

                tdButton.append(deleteButton);
                tdButton.classList.add('has-text-centered');

                tr.append(tdId, tdName, tdButton);
                tBody.append(tr);
            }
        }
    });
}
